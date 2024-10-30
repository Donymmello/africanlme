// src/components/Gallery.js
import React from 'react';
import ImageGallery from 'react-image-gallery';

const images = [
  { original: 'path_to_image1.jpg', thumbnail: 'path_to_thumbnail1.jpg' },
  { original: 'path_to_image2.jpg', thumbnail: 'path_to_thumbnail2.jpg' },
  // Adicione mais imagens
];

function Gallery() {
  return <ImageGallery items={images} />;
}

export default Gallery;