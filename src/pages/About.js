import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Tooltip } from '@mui/material';
import mission from '../assets/missio.jpg';
import values from '../assets/values.jpg';
import vision from '../assets/vision.jpg';

function About() {
  const details = [
    { 
      title: 'Mission', 
      desc: 'To uphold the principals and ethics of good inspectorate services ...', 
      img: mission, 
      tooltip: 'Nossa missão é manter altos padrões e ética nos serviços de inspeção.' 
    },
    { 
      title: 'Vision', 
      desc: 'African LME will be leaders in Africa by providing a holistic...', 
      img: vision, 
      tooltip: 'Nossa visão é liderar o setor na África com soluções completas.' 
    },
    { 
      title: 'Values', 
      desc: 'We are committed to providing our clients with state of the art solutions...', 
      img: values, 
      tooltip: 'Nossos valores incluem compromisso e inovação para atender nossos clientes.' 
    },
  ];

  return (
    <Container maxWidth="lg">
      {/* Título da Seção */}
      <Box sx={{ textAlign: 'center', my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Bem-vindo à Nossa Empresa
        </Typography>
        <Typography variant="body1" color="text.secondary">
          ALME (AFRICAN Lifting Machinery Entity), é uma empresa Moçambicana que opera em diversos setores industriais como petróleo e gás, mineração de grafite, construção civil, entre outros. Oferecemos excelência nos serviços de levantamento industrial, com foco em inspeção, calibração, reparos, certificação, fornecimento e consultoria.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {details.map((detail, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
              <Tooltip title={detail.tooltip} arrow>
                <CardMedia
                  component="img"
                  height="400"
                  image={detail.img}
                  alt={detail.title}
                  sx={{
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': { transform: 'scale(1.1)' },
                  }}
                />
              </Tooltip>
              <CardContent>
                <Typography variant="h6">{detail.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {detail.desc}
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
