import type { APIRoute } from 'astro';
import type { WPScholarship } from '../../types/wp';

function filterItems(items: WPScholarship[], q?: string, degree?: string, country?: string, type?: string): WPScholarship[] {
  const qs = (q || '').toLowerCase();
  const ds = (degree || '').toLowerCase();
  const cs = (country || '').toLowerCase();
  const ts = (type || '').toLowerCase();
  return items.filter((s) => {
    const matchDegree = ds ? (s.degree || '').toLowerCase().includes(ds) : true;
    const matchCountry = cs ? (s.country || '').toLowerCase().includes(cs) : true;
    const matchType = ts ? (s.type || '').toLowerCase().includes(ts) : true;
    const matchSearch = qs ? (s.title || '').toLowerCase().includes(qs) || (s.university || '').toLowerCase().includes(qs) : true;
    return matchDegree && matchCountry && matchType && matchSearch;
  });
}

function sortItems(items: WPScholarship[], sort?: string): WPScholarship[] {
  const key = sort || 'deadline';
  const cloned = [...items];
  if (key === 'deadline') {
    const parseSafe = (v?: string) => {
      if (!v) return Number.MAX_SAFE_INTEGER;
      const t = Date.parse(v);
      return isNaN(t) ? Number.MAX_SAFE_INTEGER : t;
    };
    cloned.sort((a, b) => parseSafe(a.deadline) - parseSafe(b.deadline));
  } else if (key === 'recent') {
    cloned.sort((a, b) => (Date.parse(b.date) || 0) - (Date.parse(a.date) || 0));
  } else if (key === 'az') {
    cloned.sort((a, b) => (a.title || '').localeCompare(b.title || '', 'id'));
  }
  return cloned;
}

export const GET: APIRoute = async ({ url }) => {
  const page = parseInt(url.searchParams.get('page') || '1');
  const perPage = parseInt(url.searchParams.get('per_page') || '9');
  const q = url.searchParams.get('q') || '';
  const degree = url.searchParams.get('degree') || '';
  const country = url.searchParams.get('country') || '';
  const type = url.searchParams.get('type') || '';
  const sort = url.searchParams.get('sort') || 'deadline';
  try {
    const { getScholarships } = await import('../../lib/api/endpoints');
    const resp = await getScholarships(page, perPage);
    let items = filterItems(resp.scholarships, q, degree, country, type);
    items = sortItems(items, sort);
    const hasMore = page < resp.totalPages;
    return new Response(JSON.stringify({ items, page, hasMore }), {
      headers: { 'content-type': 'application/json; charset=utf-8' },
      status: 200
    });
  } catch (e) {
    return new Response(JSON.stringify({ items: [], page, hasMore: false, error: 'fetch_failed' }), {
      headers: { 'content-type': 'application/json; charset=utf-8' },
      status: 200
    });
  }
};
