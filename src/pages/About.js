import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import mission from '../assets/missio.jpg';
import values from '../assets/values.jpg';
import vision from '../assets/vision.jpg';

function About() {
  return (
    <Container maxWidth="lg">
      {/* Título da Seção */}
      <Box sx={{ textAlign: 'center', my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Bem-vindo à Nossa Empresa
        </Typography>
        <Typography variant="body1" color="text.secondary">
          ALME (AFRICAN Lifting Machinery Entity), is a Mozambican company which operates on industrial fields such as: oil and gas, graphite mining, civil construction, steel making, port terminal, cable making, heavy sand mining, coal terminals, Food and Beverage factories, machinery rental, etc. Providing excellence services on the field Industrial surveying focusing on:
          •	Inspection (NDT, Pressure Test and Integrity Test);
          •	Industrial Surveying;
          •	Calibration;
          •	Repairing;
          •	Certification;
          •	Service;
          •	Supplying and;
          •	Consulting.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {[ // Adicionando serviços em um array
          { title: 'Mission', desc: 'To uphold the principals and ethics of good inspectorate services ...', img: mission },
          { title: 'Vision', desc: 'African LME will be leaders in Africa by providing a holistic...', img: vision },
          { title: 'Values', desc: 'We are committed to providing our clients with state of the art solutions...', img: values },
      
        ].map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
              <CardMedia
                component="img"
                height="400"
                image={service.img}
                alt={service.title}
                sx={{
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': { transform: 'scale(1.1)' },
                }}
              />
              <CardContent>
                <Typography variant="h6">{service.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {service.desc}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}


export default About;