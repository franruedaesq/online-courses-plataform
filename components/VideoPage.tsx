'use client';

import { Box, Typography } from '@mui/material';
import ReactPlayer from 'react-player';
import { Suspense } from 'react';
import Skeleton from '@mui/material/Skeleton';

export default function VideoPage({ video }: { video: CourseVideo[] | null }) {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography fontSize="24px" mb="10px">{video?.[0]?.title}</Typography>
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
    </Box>
  );
}
