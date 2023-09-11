import { getVideo } from "@/app/video-server";
import VideoPage from "@/components/VideoPage";
import { fetchVideo } from "@/utils/api/video";
import { Box} from "@mui/material";

interface VideoSearchParams {
  videoId: string;
}
export default async function Video({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: VideoSearchParams
}) {


  const fetchVideo = await getVideo(searchParams?.videoId)
  return (
   <Box p={2}>
    <VideoPage video={fetchVideo}/>
   </Box>
  );
}
