'use client';

import { fetchVideo } from "@/utils/api/video";
import { Box } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

export default function VideoPage() {
  const searchParams = useSearchParams();
  const video_id = searchParams.get('videoId');

  const [video, setVideo] = useState<CourseVideo[]>();

  useEffect(() => {
    async function loadData() {
      const fetchedVideo: CourseVideo[] = await fetchVideo(video_id);
      console.log(fetchedVideo);
      setVideo(fetchedVideo);
    }
      loadData();
    }, []);

    console.log(video?.[0].video_link)

  return <Box width="100%" height="540px">
    <ReactPlayer controls width='100%' height='100%'
      url={video?.[0]?.video_link} />
  </Box>
}