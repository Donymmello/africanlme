import React from 'react';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  const theme = useTheme();  // Acessa o tema atual

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '1rem',
        backgroundColor: theme.palette.background.paper,  // Usa a cor de fundo do tema
        color: theme.palette.text.primary,  // Usa a cor de texto do tema
      }}
    >
      <Typography variant="body1" gutterBottom>
        &copy; 2024 African Lifting Machinery Entity. All rights reserved.
      </Typography>
      <Typography variant="body1" gutterBottom>
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
