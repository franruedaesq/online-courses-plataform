import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Suspense } from 'react';
import Skeleton from '@mui/material/Skeleton';

interface AulaCardVerticalProps {
  imageUrl: string;
  title: string;
  price: string;
  description: string;
  url: string;
  courseId: string;
  videos?: CourseVideo[];
}

export default function AulaCardVertical({
  imageUrl,
  title,
  price,
  description,
  url,
  courseId
}: AulaCardVerticalProps) {
  const router = useRouter();

  return (
    <Card
      sx={{
        maxWidth: 345,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
      onClick={() => router.push(`/course/${url}?courseId=${courseId}`)}
    >
      <CardActionArea>
        {/* <CardMedia
          component="img"
          height="200px"
          image={imageUrl}
          alt="cover"
          sx={{ height: '200px' }}
        /> */}
        <Box width="100%" height="250px" position="relative">
          <Suspense fallback={<Skeleton height="250px"  width="100%" animation="wave"/>}>
            <Image src={imageUrl} alt="Card image" fill />
          </Suspense>
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ gap: '16px', paddingX: '16px' }}>
        <Typography>${price}</Typography>
        <Button
          size="small"
          color="secondary"
          variant="outlined"
          sx={{ color: 'rgb(236, 72, 153)' }}
        >
          Comprar
        </Button>
      </CardActions>
    </Card>
  );
}
