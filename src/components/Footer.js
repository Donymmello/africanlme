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
      <Box>
        <IconButton color="primary" href="https://www.facebook.com" target="_blank">
          <FaFacebook />
        </IconButton>
        <IconButton color="primary" href="https://www.instagram.com" target="_blank">
          <FaInstagram />
        </IconButton>
        <IconButton color="primary" href="https://www.linkedin.com" target="_blank">
          <FaLinkedin />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Footer;
