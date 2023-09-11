import { IconButton, Typography } from "@mui/material"
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { useRouter } from 'next/navigation';

export const ComenzarButton = ({ path }: { path: string }) => {
  const router = useRouter()

  return (<IconButton aria-label="ver video" sx={{ borderRadius: '8px' }} onClick={() => router.push(path)}>
    <PlayCircleIcon sx={{ marginRight: 1 }} />{' '}
    <Typography>Comenzar</Typography>
  </IconButton>)
};