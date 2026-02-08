// Backend API utilities
export async function fetchArticles() {
  try {
    const backendUrl = import.meta.env.BACKEND_API_URL || 'http://localhost:8000';
    const response = await fetch(`${backendUrl}/api/articles`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
}

export async function fetchCourses() {
  try {
    const backendUrl = import.meta.env.BACKEND_API_URL || 'http://localhost:8000';
    const response = await fetch(`${backendUrl}/api/courses`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching courses:', error);
    return [];
  }
}

export async function fetchPromotions() {
  try {
    const backendUrl = import.meta.env.BACKEND_API_URL || 'http://localhost:8000';
    const response = await fetch(`${backendUrl}/api/promotions`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching promotions:', error);
    return [];
  }
}
