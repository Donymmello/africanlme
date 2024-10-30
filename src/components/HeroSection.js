// src/components/HeroSection.js
import React from 'react';
import { Box, Typography } from '@mui/material';

function HeroSection() {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        padding: '4rem',
        textAlign: 'center',
        borderRadius: '8px',
      }}
    >
      <Typography variant="h1" component="h1">
        Welcome to Our Company
      </Typography>
      <Typography variant="h5" sx={{ marginTop: '1rem' }}>
        Quality and Innovation at Your Service
      </Typography>
    </Box>
  );
}

export default HeroSection;
