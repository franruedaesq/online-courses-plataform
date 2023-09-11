import { supabaseAdmin } from '@/utils/supabase-admin';

export const getVideo = async (video_id: string) => {
  try {
    const { data: video, error } = await supabaseAdmin
      .from('videos')
      .select("*")
      .eq('id', video_id)

  if (error) throw error;
  return video as unknown as CourseVideo[]
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

export const getVideos = async ( course_id: string) => {
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