'use client';

import { fetchVideo } from "@/utils/api/video";
import { Box } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { fetchVideos } from '@/utils/api/videos';

export default function VideoPage({ video }: {video: CourseVideo[] | null}) {

  return <Box width="100%" height="540px">
    <ReactPlayer controls width='100%' height='100%'
      url={video?.[0]?.video_link} />
  </Box>
}