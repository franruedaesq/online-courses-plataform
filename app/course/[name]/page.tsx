import { getVideos } from "@/app/video-server";
import CoursePage from "@/components/CoursePage";
import { Box} from "@mui/material";

interface CourseSearchParams {
  courseId: string;
}

export default async function Course({
  params,
  searchParams,
}: {
  params: { name: string }
  searchParams: CourseSearchParams
}) {


  const videos = await getVideos(searchParams?.courseId)
  console.log(params.name, videos)
  
  return (
   <Box p={2}>
    <CoursePage videos={videos} name={params.name}/>
   </Box>
  );
}
