// frontend code
export async function fetchVideo(video_id: string | null) {
  try {
    const response = await fetch(`/api/video?id=${video_id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const video = await response.json();
    return video;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}
