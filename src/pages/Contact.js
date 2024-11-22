import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { Grid, TextField, Button, Typography, Box, Paper } from '@mui/material';
import Map from '../components/Map';

function Contact() {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
      .then(() => {
        setMessage('Message sent successfully!');
        setSending(false);
      })
      .catch(() => {
        setMessage('Failed to send message. Please try again later.');
        setSending(false);
      });
  };

  return (
    <Box sx={{ flexGrow: 1, p: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>Contact Us</Typography>
      
      {/* Grid Container */}
      <Grid container spacing={4}>
        {/* Informações de Contato */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>Operational Manager</Typography>
            <Typography variant="body1">Isidro Fernando</Typography>
            <Typography variant="body1">City, Country</Typography>
            <Typography variant="body1">+258 84 020 0676 / +258 82 020 0676</Typography>
            <Typography variant="body1">isidro.fernando@africanlme.co.mz</Typography>
          </Paper>
        </Grid>

        {/* Informações de Contato */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>Executive Director</Typography>
            <Typography variant="body1">Vanesio Muriana</Typography>
            <Typography variant="body1">City, Country</Typography>
            <Typography variant="body1">+258 84 020 0676 / +258 82 020 0676</Typography>
            <Typography variant="body1">vanesio.murriana@africanlme.co.mz</Typography>
          </Paper>
        </Grid>

        {/* Informações de Contato */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>Our Office</Typography>
            <Typography variant="body1">Rua Nr. 12.026, Nr. 526, Q.24.</Typography>
            <Typography variant="body1">Matola-rio, Mozambique</Typography>
            <Typography variant="body1">+258 84 02 00 676  /  +258 84 81 71 670</Typography>
            <Typography variant="body1">info@africanlme.co.mz</Typography>
          </Paper>
        </Grid>

        {/* Formulário de Contato */}
        <Grid item xs={12} md={8}>
          <form ref={form} onSubmit={sendEmail}>
            <TextField
              label="Name"
              name="name"
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Message"
              name="message"
              multiline
              rows={4}
              fullWidth
              margin="normal"
              required
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={sending}
            >
              {sending ? 'Sending...' : 'Send'}
            </Button>
            {message && (
              <Typography
                variant="body2"
                color={message.includes('success') ? 'green' : 'red'}
                sx={{ mt: 2 }}
              >
                {message}
              </Typography>
            )}
          </form>
        </Grid>

        {/* Mapa */}
        <Grid item xs={12}>
          <Box sx={{ height: '300px', mt: 4 }}>
            <Map />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Contact;
