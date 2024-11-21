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

      {/* Grid para os serviços */}
      <Grid container spacing={4}>
        {/* Card do serviço 1 */}
        <Grid item xs={12} sm={6}>
          <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <CardMedia
              component="img"
              image={service1}
              alt="Inspection and certification"
              style={{
                width: '100%',
                maxWidth: '300px',
                height: 'auto',
                objectFit: 'cover',
              }}
              sx={{
                transition: 'transform 0.3s ease-in-out',
                '&:hover': { transform: 'scale(1.05)' },
              }}
            />
            <CardContent>
              <Typography variant="h6">Inspection and Certification</Typography>
              <Typography variant="body2" color="text.secondary">
                Testing of lifting equipment performed correctly based on worldwide standards, followed by a formal accredited accordance document.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card do serviço 2 */}
        <Grid item xs={12} sm={6}>
          <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <CardMedia
              component="img"
              image={service2}
              alt="Parceiro 2"
              style={{
                width: '100%',
                maxWidth: '300px',
                height: 'auto',
                objectFit: 'cover',
              }}
              sx={{
                transition: 'transform 0.3s ease-in-out',
                '&:hover': { transform: 'scale(1.05)' },
              }}
            />
            <CardContent>
              <Typography variant="h6">Parceiro 2</Typography>
              <Typography variant="body2" color="text.secondary">
                Descrição do parceiro 2.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card do serviço 3 */}
        <Grid item xs={12} sm={6}>
          <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <CardMedia
              component="img"
              image={service3}
              alt="Service 3"
              style={{
                width: '100%',
                maxWidth: '300px',
                height: 'auto',
                objectFit: 'cover',
              }}
              sx={{
                transition: 'transform 0.3s ease-in-out',
                '&:hover': { transform: 'scale(1.05)' },
              }}
            />
            <CardContent>
              <Typography variant="h6">Service 3</Typography>
              <Typography variant="body2" color="text.secondary">
                Descrição do serviço 3.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

      </Grid>
    </Container>
  );
}

export default Services;
