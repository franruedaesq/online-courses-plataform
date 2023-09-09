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
  const matches = useMediaQuery('(max-width:768px)');
  const router = useRouter()

  return (
    <Card sx={{ display: 'flex', flexDirection: matches ? 'column-reverse' : 'unset', maxWidth: 980, margin: '0 auto' }}>
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
          <IconButton aria-label="ver video" sx={{ borderRadius: '8px' }} onClick={() => router.push(path)}>
            <PlayCircleIcon sx={{ marginRight: 1 }} />{' '}
            <Typography>Comenzar</Typography>
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: matches ? "100%" : 250 }}
        image={thumbnail}
        alt="video thumbnail"
      />
    </Card>
  );
}
