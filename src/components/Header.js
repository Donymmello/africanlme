import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../assets/almelogo.png';

const Header = ({ toggleTheme, isDarkMode }) => (
  <AppBar position="fixed">
    <Toolbar
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 16px',
      }}
    >
      <Link
        to="/"
        style={{
          display: 'flex',
          alignItems: 'center',
          textDecoration: 'none',
          color: 'inherit',
        }}
      >
        <img
          src={logo}
          alt="Company Logo"
          style={{ width: '100px', marginRight: '1rem', cursor: 'pointer' }}
        />
        <Typography variant="h6" component="div">
          African LME
        </Typography>
      </Link>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/about">
          About Us
        </Button>
        <Button color="inherit" component={Link} to="/services">
          Portfolio
        </Button>
        <Button color="inherit" component={Link} to="/contact">
          Contact
        </Button>
      </div>

      <Button
        color="inherit"
        onClick={toggleTheme}
        sx={{
          border: '1px solid',
          borderRadius: '16px',
          padding: '4px 12px',
        }}
      >
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </Button>
    </Toolbar>
  </AppBar>
);

export default Header;
