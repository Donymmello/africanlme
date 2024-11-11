import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <Box 
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '1rem',
        backgroundColor: '#f8f8f8',
      }}
    >
      <Typography variant="body1" color="textSecondary" gutterBottom>
      &copy; 2024 African Lifting Machinery Entity. All rights reserved.
      </Typography>
      <Typography variant="body1" color="textSecondary" gutterBottom>
        Connect with us
      </Typography>
      <Box sx={{ textAlign: 'center', mt: 4 }}>
      <IconButton color="primary" href="https://facebook.com">
        <FaFacebook />
      </IconButton>
      <IconButton color="primary" href="https://instagram.com">
        <FaInstagram />
      </IconButton>
      <IconButton color="primary" href="https://linkedin.com">
        <FaLinkedin />
      </IconButton>
    </Box>
    </Box>
  );
}

export default Footer;
