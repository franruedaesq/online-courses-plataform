'use client';

import { fetchVideos } from '@/utils/api/videos';
import { Box, useMediaQuery } from '@mui/material';
import { useState, useEffect } from 'react';
import VideoCard from './VideoCard';
import { useSearchParams, usePathname } from 'next/navigation';
import { getVideos } from '@/app/video-server';

export default function CoursePage({videos, name}: {videos: CourseVideo[] | null, name: string}) {
  // const pathName = usePathname()
  // const searchParams = useSearchParams();

  // const course_id = searchParams.get('courseId');
  // const [videos, setVideos] = useState<CourseVideo[]>([]);

  // useEffect(() => {
  //   async function loadData() {
  //     const fetchedVideos: CourseVideo[] = await fetchVideos(course_id);
  //     setVideos(fetchedVideos);
  //   }

  //   loadData();
  // }, []);


  return (
    <Box p={0}>
      {videos &&
        videos.map((video) => (
          <VideoCard
            title={video.title}
            description={video.description}
            thumbnail={video.thumbnail}
            key={video.id}
            path={`/course/${name}/video?videoId=${video.id}`}
          />
        ))}
    </Box>
  );
}
