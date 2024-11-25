import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import team from '../assets/team.jpg';
import inspect from '../assets/inspect.png';
import ndt from '../assets/ndt.png';
import survey from '../assets/survey.png';
import supply from '../assets/supply.png';
import repair from '../assets/repair.png';
import consulting from '../assets/consulting.png';
import mozal from '../assets/mozal.jpg';
import cdm from '../assets/cdm.jpg';
import cocacola from '../assets/coca cola.jpg';
import dp from '../assets/dp w.jpg';
import barloword from '../assets/barloword.jpg';
import kenmare from '../assets/kenm.jpg';
import duys from '../assets/duys.jpg';
import grindrod from '../assets/grindrod.jpg';
import sasol from '../assets/sasol.jpg';
import vulcan from '../assets/vulcan.jpg';

function Home() {
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

      {/* Imagem da Equipe */}
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
            <CardMedia
              component="img"
              height="500"
              image={team}
              alt="Equipe da empresa"
              sx={{
                transition: 'transform 0.3s ease-in-out',
                '&:hover': { transform: 'scale(1.05)' },
              }}
            />
            <CardContent>
              <Typography variant="h5">Nossa Equipe</Typography>
              <Typography variant="body2" color="text.secondary">
                Conheça os colaboradores que fazem nosso sucesso acontecer.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Seção de Serviços */}
      <Box sx={{ textAlign: 'center', my: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Nossos Serviços
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Trabalhamos com as melhores marcas e empresas para oferecer o melhor para nossos clientes.
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {[ // Adicionando serviços em um array
          { title: 'Inspection and Certification', desc: 'Testing of lifting equipment...', img: inspect },
          { title: 'NDT (Nondestructive Tests)', desc: 'Pressure test, MPI...', img: ndt },
          { title: 'Industrial Surveying', desc: 'Integrity testing...', img: survey },
          { title: 'Supply', desc: 'Sourcing and supply...', img: supply },
          { title: 'Repair and Service', desc: 'Routine maintenance...', img: repair },
          { title: 'Consulting', desc: 'Expert advising...', img: consulting },
        ].map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
              <CardMedia
                component="img"
                height="150"
                image={service.img}
                alt={service.title}
                sx={{
                  objectFit: 'contain',
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

      {/* Seção de Parceiros */}
      <Box sx={{ textAlign: 'center', my: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Nossos Parceiros
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Trabalhamos com as melhores marcas e empresas para oferecer o melhor para nossos clientes.
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {[ // Adicionando parceiros em um array
          { name: 'Mozal', img: mozal },
          { name: 'CDM', img: cdm },
          { name: 'Coca Cola', img: cocacola },
          { name: 'DP World', img: dp },
          { name: 'Barloworld', img: barloword },
          { name: 'Kenmare', img: kenmare },
          { name: 'Duys', img: duys },
          { name: 'Grindrod', img: grindrod },
          { name: 'Sasol', img: sasol },
          { name: 'Vulcan', img: vulcan },
        ].map((partner, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
              <CardMedia
                component="img"
                height="150"
                image={partner.img}
                alt={partner.name}
                sx={{
                  objectFit: 'contain',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': { transform: 'scale(1.1)' },
                }}
              />
              <CardContent>
                <Typography variant="h6" align="center">
                  {partner.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Home;
