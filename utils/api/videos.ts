// frontend code
export async function fetchVideos(course_id: string | null) {
    try {
      const response = await fetch(`/api/videos?id=${course_id}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const courses = await response.json();
      return courses;
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }
  