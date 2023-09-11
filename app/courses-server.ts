import { supabaseAdmin } from '@/utils/supabase-admin';
import { Course } from '@/utils/types/courses';

const getCourses = async () => {
  try {
    const { data: courses, error } = await supabaseAdmin
    .from('courses')
    .select('*');

  if (error) throw error;

  return courses as unknown as Course[]
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

const getVideos = async (course_id: string) => {
  try {
    const { data: videos, error } = await supabaseAdmin
      .from('videos')
      .select("*")
      .eq('course_id', course_id)

  if (error) throw error;
  return videos as unknown as CourseVideo[]
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

export const getCoursesAndVideos = async () => {
  try {
    const courses = await getCourses();
    if (!courses) {
      return null;
    }

    const coursePromises = courses.map(async (course) => {
      const videos = await getVideos(course.id);
      if (videos) {
        course.courseVideos = videos;
      }
      return course;
    });

    const coursesAndVideos = await Promise.all(coursePromises);
    
    return coursesAndVideos;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};