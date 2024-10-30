// src/components/Gallery.js
import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

function Gallery() {
  const images = [
    { src: 'image1.jpg', title: 'Image 1' },
    { src: 'image2.jpg', title: 'Image 2' },
    { src: 'image3.jpg', title: 'Image 3' },
  ];

  return (
    <Grid container spacing={4} sx={{ marginTop: '2rem' }}>
      {images.map((image, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card>
            <CardMedia component="img" height="200" image={image.src} alt={image.title} />
            <CardContent>
              <Typography variant="h6">{image.title}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Gallery;