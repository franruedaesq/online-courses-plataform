'use client';

import { Box } from '@mui/material';
import ReactPlayer from 'react-player';
import { Suspense } from 'react';
import Skeleton from '@mui/material/Skeleton';

export default function VideoPage({ video }: { video: CourseVideo[] | null }) {
  return (
    <>
      <Suspense
        fallback={<Skeleton height="540px" width="100%" animation="wave" />}
      >
        <Box width="100%" height="540px">
          <ReactPlayer
            controls
            width="100%"
            height="100%"
            url={video?.[0]?.video_link}
          />
        </Box>
      </Suspense>
    </>
  );
}
