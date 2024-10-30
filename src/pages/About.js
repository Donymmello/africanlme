import React from 'react';
import { Container, Grid, Button } from '@mui/material';
import HeroSection from '../components/HeroSection';
import Gallery from '../components/Gallery';
import { Link } from 'react-router-dom';

function About() {
  return (
    <Container maxWidth="lg">
      <HeroSection />
      <Gallery />
      <Grid container spacing={4} justifyContent="center" sx={{ marginTop: '2rem' }}>
        <Grid item>
          <Button component={Link} to="/about" variant="contained" color="primary" sx={{ borderRadius: '20px', padding: '0.8rem 2rem' }}>
            Learn More
          </Button>
        </Grid>
        <Grid item>
          <Button 
            component={Link} 
            to="/contact" 
            variant="outlined" 
            color="secondary" 
            sx={{ borderRadius: '20px', padding: '0.8rem 2rem' }}
          >
            Contact Us
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}


export default About;