import { Course } from "../types/courses";

// frontend code
export async function fetchCourses() {
  console.log('calling fetchCourses')
    try {
      const response = await fetch('/api/courses');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const courses: Course[] = await response.json();
      return courses;
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }
  