// src/pages/Home.js
import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import team from '../assets/team.jpg';
import inspect from '../assets/inspect.jpg';
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
import ss from '../assets/ss.jpg';
import msc from '../assets/msc.jpg';
import bal from '../assets/bal.jpg';
import cm from '../assets/cm.jpg';




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
      <Grid container spacing={4} direction="column"> {/* Configurado para coluna */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              height="500"
              image={team}
              alt="Equipe da empresa"
              sx={{
                transition: 'transform 0.3s ease-in-out',
                '&:hover': { transform: 'scale(1.05)' }
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

        {/* Título da seção de servicos */}
        <Box sx={{ textAlign: 'center', my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Nossos Servicos
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Trabalhamos com as melhores marcas e empresas para oferecer o melhor para nossos clientes.
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
                image={inspect}
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

        {/* Título da seção de parceiros */}
        <Box sx={{ textAlign: 'center', my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Nossos Parceiros
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Trabalhamos com as melhores marcas e empresas para oferecer o melhor para nossos clientes.
          </Typography>
        </Box>


        {/* Grid para os parceiros */}
        <Grid container spacing={4}>
          {/* Card do parceiro 1 */}
          <Grid item xs={12} sm={4}>
            <Card>
              <CardMedia
                component="img"
                height="250"
                image={mozal}
                alt="Parceiro 1"
                sx={{
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': { transform: 'scale(1.05)' }
                }}
              />
              <CardContent>
                <Typography variant="h6">Parceiro 1</Typography>
                <Typography variant="body2" color="text.secondary">
                  Descrição do parceiro 1.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Card do parceiro 2 */}
          <Grid item xs={12} sm={4}>
            <Card>
              <CardMedia
                component="img"
                height="250"
                image={cdm}
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

          {/* Card do parceiro 3 */}
          <Grid item xs={12} sm={4}>
            <Card>
              <CardMedia
                component="img"
                height="250"
                image={cocacola}
                alt="Parceiro 3"
                sx={{
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': { transform: 'scale(1.05)' }
                }}
              />
              <CardContent>
                <Typography variant="h6">Parceiro 3</Typography>
                <Typography variant="body2" color="text.secondary">
                  Descrição do parceiro 3.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Card do parceiro 4 */}
          <Grid item xs={12} sm={4}>
            <Card>
              <CardMedia
                component="img"
                height="250"
                image={dp}
                alt="Parceiro 4"
                sx={{
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': { transform: 'scale(1.05)' }
                }}
              />
              <CardContent>
                <Typography variant="h6">Parceiro 4</Typography>
                <Typography variant="body2" color="text.secondary">
                  Descrição do parceiro 4.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Card do parceiro 6 */}
          <Grid item xs={12} sm={4}>
            <Card>
              <CardMedia
                component="img"
                height="250"
                image={barloword}
                alt="Parceiro 6"
                sx={{
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': { transform: 'scale(1.05)' }
                }}
              />
              <CardContent>
                <Typography variant="h6">Parceiro 6</Typography>
                <Typography variant="body2" color="text.secondary">
                  Descrição do parceiro 6.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Card do parceiro 6 */}
          <Grid item xs={12} sm={4}>
            <Card>
              <CardMedia
                component="img"
                height="250"
                image={kenmare}
                alt="Parceiro 6"
                sx={{
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': { transform: 'scale(1.05)' }
                }}
              />
              <CardContent>
                <Typography variant="h6">Parceiro 6</Typography>
                <Typography variant="body2" color="text.secondary">
                  Descrição do parceiro 6.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Card do parceiro 6 */}
          <Grid item xs={12} sm={4}>
            <Card>
              <CardMedia
                component="img"
                height="250"
                image={duys}
                alt="Parceiro 6"
                sx={{
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': { transform: 'scale(1.05)' }
                }}
              />
              <CardContent>
                <Typography variant="h6">Parceiro 6</Typography>
                <Typography variant="body2" color="text.secondary">
                  Descrição do parceiro 6.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Card do parceiro 6 */}
          <Grid item xs={12} sm={4}>
            <Card>
              <CardMedia
                component="img"
                height="250"
                image={grindrod}
                alt="Parceiro 6"
                sx={{
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': { transform: 'scale(1.05)' }
                }}
              />
              <CardContent>
                <Typography variant="h6">Parceiro 6</Typography>
                <Typography variant="body2" color="text.secondary">
                  Descrição do parceiro 6.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Card do parceiro 6 */}
          <Grid item xs={12} sm={4}>
            <Card>
              <CardMedia
                component="img"
                height="250"
                image={sasol}
                alt="Parceiro 6"
                sx={{
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': { transform: 'scale(1.05)' }
                }}
              />
              <CardContent>
                <Typography variant="h6">Parceiro 6</Typography>
                <Typography variant="body2" color="text.secondary">
                  Descrição do parceiro 6.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Card do parceiro 6 */}
          <Grid item xs={12} sm={4}>
            <Card>
              <CardMedia
                component="img"
                height="250"
                image={vulcan}
                alt="Parceiro 6"
                sx={{
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': { transform: 'scale(1.05)' }
                }}
              />
              <CardContent>
                <Typography variant="h6">Parceiro 6</Typography>
                <Typography variant="body2" color="text.secondary">
                  Descrição do parceiro 6.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Card do parceiro 6 */}
          <Grid item xs={12} sm={4}>
            <Card>
              <CardMedia
                component="img"
                height="250"
                image={ss}
                alt="Parceiro 6"
                sx={{
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': { transform: 'scale(1.05)' }
                }}
              />
              <CardContent>
                <Typography variant="h6">Parceiro 6</Typography>
                <Typography variant="body2" color="text.secondary">
                  Descrição do parceiro 6.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Card do parceiro 6 */}
          <Grid item xs={12} sm={4}>
            <Card>
              <CardMedia
                component="img"
                height="250"
                image={msc}
                alt="Parceiro 6"
                sx={{
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': { transform: 'scale(1.05)' }
                }}
              />
              <CardContent>
                <Typography variant="h6">Parceiro 6</Typography>
                <Typography variant="body2" color="text.secondary">
                  Descrição do parceiro 6.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Card do parceiro 6 */}
          <Grid item xs={12} sm={4}>
            <Card>
              <CardMedia
                component="img"
                height="250"
                image={bal}
                alt="Parceiro 6"
                sx={{
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': { transform: 'scale(1.05)' }
                }}
              />
              <CardContent>
                <Typography variant="h6">Parceiro 6</Typography>
                <Typography variant="body2" color="text.secondary">
                  Descrição do parceiro 6.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Card do parceiro 6 */}
          <Grid item xs={12} sm={4}>
            <Card>
              <CardMedia
                component="img"
                height="250"
                image={cm}
                alt="Parceiro 6"
                sx={{
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': { transform: 'scale(1.05)' }
                }}
              />
              <CardContent>
                <Typography variant="h6">Parceiro 6</Typography>
                <Typography variant="body2" color="text.secondary">
                  Descrição do parceiro 6.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;