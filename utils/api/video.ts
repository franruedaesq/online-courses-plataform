// frontend code
export async function fetchVideo(vide_id: string | null) {
  try {
    const response = await fetch(`/api/video?id=${vide_id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const video = await response.json();
    console.log("video", video)
    return video;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}
