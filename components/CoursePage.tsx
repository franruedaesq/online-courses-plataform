'use client';

import { fetchVideos } from '@/utils/api/videos';
import { Box, useMediaQuery } from '@mui/material';
import { useState, useEffect } from 'react';
import VideoCard from './VideoCard';
import { useSearchParams, usePathname } from 'next/navigation';

export default function CoursePage() {
  const matches = useMediaQuery('(max-width:768px)');
  const pathName = usePathname()
  const searchParams = useSearchParams();

  const course_id = searchParams.get('courseId');
  const [videos, setVideos] = useState<CourseVideo[]>([]);

  useEffect(() => {
    async function loadData() {
      const fetchedVideos: CourseVideo[] = await fetchVideos(course_id);
      setVideos(fetchedVideos);
    }

    loadData();
  }, []);

  return (
    <Box p={0}>
      {videos &&
        videos.map((video) => (
          <VideoCard
            title={video.title}
            description={video.description}
            thumbnail={video.thumbnail}
            key={video.id}
            path={`${pathName}/video?videoId=${video.id}`}
          />
        ))}
    </Box>
  );
}
