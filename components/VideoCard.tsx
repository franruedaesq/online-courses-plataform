import {
  Card,
  Box,
  CardContent,
  Typography,
  IconButton,
  CardMedia,
  useMediaQuery
} from '@mui/material';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { useRouter } from 'next/navigation';
import Image from 'next/image'
import { ComenzarButton } from './ComenzarButton';
import { Suspense } from 'react';
import Skeleton from '@mui/material/Skeleton';

interface VideoCardProp {
  title: string;
  description: string;
  thumbnail: string;
  path: string;
}

export default function VideoCard({
  title,
  description,
  thumbnail,
  path,
}: VideoCardProp) {
  return (
    <Card sx={{
      display: 'grid', gridTemplateColumns: "auto 250px", maxWidth: 980, margin: '0 auto', '@media (max-width: 768px)': {
        gridTemplateColumns: 'revert',
      }
    }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', padding: 2 }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {description}
          </Typography>
        </CardContent>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            pb: 1
          }}
        >
          <IconButton
            aria-label="descargar dieseños"
            sx={{ borderRadius: '8px' }}
          >
            <DownloadForOfflineIcon sx={{ marginRight: 1 }} />{' '}
            <Typography>Descarga material</Typography>
          </IconButton>
          <ComenzarButton path={path}/>
        </Box>
      </Box>
      <Box position="relative" height="200px" sx={{
        width: '250px',
        '@media (max-width: 768px)': {
          width: 'auto',
          order: '-1',
        }
      }}>
        <Suspense fallback={<Skeleton height="200px"  width="100%" animation="wave"/>}>
        <Image
          src={thumbnail}
          alt="Card image"
          fill
          priority
        />
        </Suspense>
      </Box>
      {/* <CardMedia
        component="img"
        sx={{ width: matches ? "100%" : 250 }}
        image={thumbnail}
        alt="video thumbnail"
      /> */}
    </Card>
  );
}
