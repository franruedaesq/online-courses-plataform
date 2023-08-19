import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import { CardActions, Button } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import * as React from 'react';

interface AulaCardProps {
    imageUrl: string;
    title: string;
    price: string;
    description: string;

}

export default function AulaCard({ imageUrl, title, price, description }: AulaCardProps) {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex', width:"100%", maxHeight: '220px'}} >
      <CardMedia
        component="img"
        sx={{ width: 300 }}
        image={imageUrl}
        alt="Imagen de portada del curso"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
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
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}></Box>
      <CardActions sx={{ padding: '16px', gap: '12px'}}>
        <Typography>${price}</Typography>
        <Button size="small" color="secondary" variant='outlined' sx={{ color: 'rgb(236, 72, 153)' }}>
          Comprar
        </Button>
      </CardActions>
      </Box>
    </Card>
  );
}
