const API_URL = "https://staging-u.ultimateducation.co.id/wp-json";
class WPError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
    this.name = "WPError";
  }
}
async function wpFetch(endpoint) {
  const res = await fetch(`${API_URL}${endpoint}`);
  if (!res.ok) {
    throw new WPError(res.status, `Failed to fetch ${endpoint}: ${res.statusText}`);
  }
  return res.json();
}
async function wpFetchWithHeaders(endpoint) {
  const res = await fetch(`${API_URL}${endpoint}`);
  if (!res.ok) {
    throw new WPError(res.status, `Failed to fetch ${endpoint}: ${res.statusText}`);
  }
  const totalPages = parseInt(res.headers.get("X-WP-TotalPages") || "1", 10);
  const totalPosts = parseInt(res.headers.get("X-WP-Total") || "0", 10);
  const data = await res.json();
  return {
    data,
    totalPages,
    totalPosts
  };
}

function extractImageFromContent(html) {
  const imgMatch = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  return imgMatch ? imgMatch[1] : null;
}
function normalizePost(post) {
  const featuredMedia = post._embedded?.["wp:featuredmedia"]?.[0];
  const terms = post._embedded?.["wp:term"]?.flat() || [];
  const authorData = post._embedded?.["author"]?.[0];
  const categories = terms.filter((term) => term.taxonomy === "category").map((c) => ({ name: c.name, slug: c.slug }));
  let imageSrc;
  if (featuredMedia?.source_url) {
    const sizes = featuredMedia.media_details?.sizes;
    imageSrc = sizes?.large?.source_url || sizes?.medium_large?.source_url || sizes?.full?.source_url || featuredMedia.source_url;
  }
  if (!imageSrc && post.content?.rendered) {
    const contentImage = extractImageFromContent(post.content.rendered);
    if (contentImage) {
      imageSrc = contentImage;
    }
  }
  return {
    id: post.id,
    slug: post.slug,
    title: post.title.rendered,
    content: post.content.rendered,
    excerpt: post.excerpt.rendered,
    date: post.date,
    featuredImage: imageSrc ? {
      src: imageSrc,
      alt: featuredMedia?.alt_text || post.title.rendered
    } : void 0,
    author: authorData ? {
      name: authorData.name,
      avatar: authorData.avatar_urls?.["96"] || authorData.avatar_urls?.["48"]
    } : void 0,
    categories
  };
}
async function getPosts(page = 1, perPage = 10) {
  const endpoint = `/wp/v2/posts?_embed&page=${page}&per_page=${perPage}`;
  const rawPosts = await wpFetch(endpoint);
  return rawPosts.map(normalizePost);
}
async function getPostsWithPagination(page = 1, perPage = 10) {
  const endpoint = `/wp/v2/posts?_embed&page=${page}&per_page=${perPage}`;
  const { data, totalPages, totalPosts } = await wpFetchWithHeaders(endpoint);
  return {
    posts: data.map(normalizePost),
    totalPages,
    totalPosts
  };
}
async function getPostBySlug(slug) {
  const endpoint = `/wp/v2/posts?_embed&slug=${slug}`;
  const rawPosts = await wpFetch(endpoint);
  if (rawPosts.length === 0) return null;
  return normalizePost(rawPosts[0]);
}
async function getAllPostsSlugs() {
  const endpoint = `/wp/v2/posts?per_page=100&_fields=slug`;
  const posts = await wpFetch(endpoint);
  return posts.map((p) => p.slug);
}
async function getCategories() {
  return wpFetch("/wp/v2/categories?per_page=20");
}
async function getPostsByCategory(categorySlug, page = 1, perPage = 10) {
  const categories = await wpFetch(`/wp/v2/categories?slug=${categorySlug}`);
  if (categories.length === 0) {
    return { posts: [], totalPages: 0, totalPosts: 0 };
  }
  const categoryId = categories[0].id;
  const endpoint = `/wp/v2/posts?_embed&categories=${categoryId}&page=${page}&per_page=${perPage}`;
  const { data, totalPages, totalPosts } = await wpFetchWithHeaders(endpoint);
  return {
    posts: data.map(normalizePost),
    totalPages,
    totalPosts
  };
}
async function searchPosts(query, perPage = 10) {
  const endpoint = `/wp/v2/posts?_embed&search=${encodeURIComponent(query)}&per_page=${perPage}`;
  const rawPosts = await wpFetch(endpoint);
  return rawPosts.map(normalizePost);
}
async function getAuthors() {
  return wpFetch("/wp/v2/users?per_page=50");
}
async function getAuthorBySlug(slug) {
  const authors = await wpFetch(`/wp/v2/users?slug=${slug}`);
  return authors.length > 0 ? authors[0] : null;
}
async function getPostsByAuthor(authorId, page = 1, perPage = 10) {
  const endpoint = `/wp/v2/posts?_embed&author=${authorId}&page=${page}&per_page=${perPage}`;
  const { data, totalPages, totalPosts } = await wpFetchWithHeaders(endpoint);
  return {
    posts: data.map(normalizePost),
    totalPages,
    totalPosts
  };
}
function extractPodValue(val) {
  if (val === null || val === void 0) return "";
  if (Array.isArray(val)) {
    return val.map((item) => extractPodValue(item)).join(", ");
  }
  if (typeof val === "object" && val !== null) {
    return val.rendered || val.value || JSON.stringify(val);
  }
  return String(val);
}
function stripHtml(html) {
  if (typeof html !== "string") return String(html || "");
  return html.replace(/<[^>]*>?/gm, "").trim();
}
function normalizeScholarship(post) {
  let imageSrc = post.gambar;
  if (!imageSrc) {
    const featuredMedia = post._embedded?.["wp:featuredmedia"]?.[0];
    if (featuredMedia?.source_url) {
      const sizes = featuredMedia.media_details?.sizes;
      imageSrc = sizes?.large?.source_url || sizes?.medium_large?.source_url || sizes?.full?.source_url || featuredMedia.source_url;
    }
  }
  const rawDesc = post.deskripsi || post.description || post.acf?.deskripsi;
  const finalContent = post.content?.rendered || post.content || rawDesc || "";
  const finalExcerpt = post.excerpt?.rendered || post.excerpt || (typeof rawDesc === "string" ? stripHtml(rawDesc).slice(0, 150) + "..." : "");
  const rawCountry = post.negara || post.country;
  const rawDegree = post.jenjang || post.degree;
  const rawDeadline = post.deadline;
  const rawStartDate = post.start_date;
  const rawUniversity = post.university || post.universitas;
  const rawType = post.jenis;
  const rawFieldOfStudy = post.bidang || post.field_of_study;
  const rawBenefits = post.benefit || post.benefits;
  const rawAge = post.umur || post.age;
  const rawGpa = post.ipk || post.gpa;
  const rawEnglish = post.english_test;
  const rawDocuments = post.dokumen || post.documents;
  const rawOthers = post.lainnya || post.others;
  const rawApply = post.daftar || post.how_to_apply;
  return {
    id: post.id,
    slug: post.slug,
    title: post.title?.rendered || post.title || "",
    content: finalContent,
    excerpt: finalExcerpt,
    date: post.date,
    featuredImage: imageSrc ? {
      src: imageSrc,
      alt: post.title?.rendered || post.title || "Scholarship Image"
    } : void 0,
    country: extractPodValue(rawCountry),
    degree: extractPodValue(rawDegree),
    deadline: extractPodValue(rawDeadline),
    startDate: extractPodValue(rawStartDate),
    university: extractPodValue(rawUniversity),
    type: stripHtml(extractPodValue(rawType)),
    // Fix: Strip HTML for type/badge
    fieldOfStudy: extractPodValue(rawFieldOfStudy),
    benefits: extractPodValue(rawBenefits),
    ageLimit: extractPodValue(rawAge),
    gpaRequirement: extractPodValue(rawGpa),
    englishTest: extractPodValue(rawEnglish),
    documents: extractPodValue(rawDocuments),
    others: extractPodValue(rawOthers),
    howToApply: extractPodValue(rawApply),
    // Likely HTML
    description: extractPodValue(rawDesc),
    // Likely HTML
    coverage: ""
  };
}
async function getScholarships(page = 1, perPage = 10) {
  const endpoint = `/wp/v2/beasiswa?_embed&page=${page}&per_page=${perPage}`;
  try {
    const { data, totalPages, totalPosts } = await wpFetchWithHeaders(endpoint);
    return {
      scholarships: data.map(normalizeScholarship),
      totalPages,
      totalPosts
    };
  } catch (e) {
    console.warn(`Failed to fetch from ${endpoint}, checking 'beasiswas' fallback...`);
    const fallbackEndpoint = `/wp/v2/beasiswas?_embed&page=${page}&per_page=${perPage}`;
    const { data, totalPages, totalPosts } = await wpFetchWithHeaders(fallbackEndpoint);
    return {
      scholarships: data.map(normalizeScholarship),
      totalPages,
      totalPosts
    };
  }
}
async function getScholarshipBySlug(slug) {
  const endpoint = `/wp/v2/beasiswa?_embed&slug=${slug}`;
  try {
    let rawPosts = await wpFetch(endpoint);
    if (rawPosts.length === 0) {
      const fallbackEndpoint = `/wp/v2/beasiswas?_embed&slug=${slug}`;
      rawPosts = await wpFetch(fallbackEndpoint);
    }
    if (rawPosts.length === 0) return null;
    return normalizeScholarship(rawPosts[0]);
  } catch (e) {
    console.error("Error fetching scholarship by slug:", e);
    return null;
  }
}

export { getAllPostsSlugs, getAuthorBySlug, getAuthors, getCategories, getPostBySlug, getPosts, getPostsByAuthor, getPostsByCategory, getPostsWithPagination, getScholarshipBySlug, getScholarships, searchPosts };
