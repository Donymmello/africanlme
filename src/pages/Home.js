import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Tooltip } from '@mui/material';
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
  const services = [
    { 
      title: 'Inspection and Certification', 
      desc: 'Testing of lifting equipment performed correctly based on worldwide standards.', 
      img: inspect, 
      tooltip: 'Mais informações sobre certificação e inspeção de equipamentos.'
    },
    { 
      title: 'NDT (Nondestructive Tests)', 
      desc: 'Pressure test, MPI, UT, LPT, RT, Eddy Testing.', 
      img: ndt, 
      tooltip: 'Realizamos testes não destrutivos com tecnologia avançada.'
    },
    { 
      title: 'Industrial Surveying', 
      desc: 'Integrity testing of industrial structures.', 
      img: survey, 
      tooltip: 'Inspeções industriais detalhadas para garantir a segurança.'
    },
    { 
      title: 'Supply', 
      desc: 'Sourcing and supply of lifting equipment and spares.', 
      img: supply, 
      tooltip: 'Fornecemos equipamentos e peças de elevação.'
    },
    { 
      title: 'Repair and Service', 
      desc: 'Routine maintenance and restoring original condition.', 
      img: repair, 
      tooltip: 'Manutenção e reparos para garantir desempenho ideal.'
    },
    { 
      title: 'Consulting', 
      desc: 'Expert advising on lifting equipment and industrial safety.', 
      img: consulting, 
      tooltip: 'Consultoria especializada na área de segurança industrial.'
    },
  ];

  const partners = [
    { 
      name: 'Mozal', 
      img: mozal, 
      tooltip: 'Mozal é nosso parceiro estratégico no setor de alumínio.'
    },
    { 
      name: 'CDM', 
      img: cdm, 
      tooltip: 'CDM é um parceiro de longa data na fabricação de bebidas.'
    },
    { 
      name: 'Coca Cola', 
      img: cocacola, 
      tooltip: 'A Coca Cola colabora conosco em várias iniciativas.'
    },
    { 
      name: 'DP World', 
      img: dp, 
      tooltip: 'DP World é referência em logística portuária.'
    },
    { 
      name: 'Barloworld', 
      img: barloword, 
      tooltip: 'Barloworld oferece soluções robustas para equipamentos pesados.'
    },
    { 
      name: 'Kenmare', 
      img: kenmare, 
      tooltip: 'Kenmare é um dos líderes em mineração de titânio.'
    },
    { 
      name: 'Duys', 
      img: duys, 
      tooltip: 'Duys é um parceiro essencial no setor de fabricação.'
    },
    { 
      name: 'Grindrod', 
      img: grindrod, 
      tooltip: 'Grindrod oferece suporte logístico marítimo confiável.'
    },
    { 
      name: 'Sasol', 
      img: sasol, 
      tooltip: 'Sasol é um dos maiores nomes em energia e química.'
    },
    { 
      name: 'Vulcan', 
      img: vulcan, 
      tooltip: 'Vulcan é especializado em soluções de engenharia avançada.'
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
      </Box>
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
              <Tooltip title={service.tooltip} arrow>
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
              </Tooltip>
              <CardContent>
                <Typography variant="h6">{service.title}</Typography>
                <Typography variant="body2" color="text.secondary" noWrap>
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
      </Box>
      <Grid container spacing={4}>
        {partners.map((partner, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
              <Tooltip title={partner.tooltip} arrow>
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
              </Tooltip>
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
