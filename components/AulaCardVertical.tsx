import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useRouter } from 'next/navigation';

interface AulaCardVerticalProps {
  imageUrl: string;
  title: string;
  price: string;
  description: string;
  url: string;
  courseId: string;
}

export default function AulaCardVertical({ imageUrl, title, price, description, url, courseId }: AulaCardVerticalProps) {
  const router = useRouter()

  return (
    <Card sx={{ maxWidth: 345, display:"flex", flexDirection:'column', justifyContent:'space-between' }} onClick={() => router.push(`/course/${url}?courseId=${courseId}`)}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200px"
          image={imageUrl}
          alt="cover"
          sx={{ height: '200px'}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ gap: '16px', paddingX: '16px'}}>
        <Typography>${price}</Typography>
        <Button size="small" color="secondary" variant='outlined' sx={{ color: 'rgb(236, 72, 153)' }}>
          Comprar
        </Button>
      </CardActions>
    </Card>
  );
}