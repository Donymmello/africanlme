import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import service1 from '../assets/i and c.jpg';
import service2 from '../assets/inepect and c.jpg';
import service3 from '../assets/ins and cer.jpg';


function Services() {
  return (
    <Container maxWidth="lg">
      {/* Título da Seção */}
      <Box sx={{ textAlign: 'center', my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Bem-vindo à Nossa Empresa
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Conheça nossa equipe e os serviços que oferecemos.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {[ // Adicionando serviços em um array
          { title: 'Inspection and Certification', desc: 'Testing of lifting equipment...', img: service1 },
          { title: 'NDT (Nondestructive Tests)', desc: 'Pressure test, MPI...', img: service2 },
          { title: 'Industrial Surveying', desc: 'Integrity testing...', img: service3 },
      
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

export default Services;
