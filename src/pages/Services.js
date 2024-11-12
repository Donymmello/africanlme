import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import service1 from '../assets/i and c.jpg';
import service2 from '../assets/inepect and c.jpg';


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

        {/* Grid para os servicos */}
        <Grid container spacing={4}>
          {/* Card do servico 1 */}
          <Grid item xs={12} sm={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={service1}
                alt="Inspection and certification:"
              />
              <CardContent>
                <Typography variant="h6">Inspection and certification:</Typography>
                <Typography variant="body2" color="text.secondary">
                  Testing of lifting equipment performed correctly based on worldwide standards, followed by a formal accredited accordance document.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Card do parceiro 2 */}
        <Grid item xs={12} sm={4}>
            <Card>
              <CardMedia
                component="img"
                height="250"
                image={service2}
                alt="Parceiro 2"
                sx={{
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': { transform: 'scale(1.05)' }
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
    </Container>
  );
}
export default Services;