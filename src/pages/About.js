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

      {/* Grid para os servicos */}
      <Grid container spacing={4}>
        {/* Card do servico 1 */}
        <Grid item xs={12} sm={4}>
          <Card>
            <CardMedia
              component="img"
              height="400"
              image={mission}
              alt="Mission:"
            />
            <CardContent>
              <Typography variant="h6">Mission:</Typography>
              <Typography variant="body2" color="text.secondary">
                To uphold the principals and ethics of good inspectorate services and engineering code of conduct at all times in providing a quality and reliable service;
                Continually strive for quality in the services it provides to support its customers in their efforts to achieve high productivity by means of reduced maintenance cost.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Grid para os servicos */}
        {/* Card do servico 1 */}
        <Grid item xs={12} sm={4}>
          <Card>
            <CardMedia
              component="img"
              height="400"
              image={values}
              alt="Values:"
            />
            <CardContent>
              <Typography variant="h6">Values:</Typography>
              <Typography variant="body2" color="text.secondary">
                We are committed to providing our clients with state of the art solutions, to meet their objectives within the budget, time and quality framework of their requirements.
                We will meet all our obligations to our clients and employees by our exemplary approach to our work and our environment.
                Whether you own or operate lifting machinery, you need to ensure that they are safe, and in compliance with statutory requirements. That is where our inspection and identify can help.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Grid para os servicos */}
        {/* Card do servico 1 */}
        <Grid item xs={12} sm={4}>
          <Card>
            <CardMedia
              component="img"
              height="400"
              image={vision}
              alt="Vision:"
            />
            <CardContent>
              <Typography variant="h6">Vision:</Typography>
              <Typography variant="body2" color="text.secondary">
                African LME will be leaders in Africa by providing a holistic, innovative, and exemplary Engineering & Management Services to National & International Clients across all Industries.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}


export default About;