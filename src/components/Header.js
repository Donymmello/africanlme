//import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from "react-router-dom";
import logo from '../assets/almelogo.png';

const Header = ({ toggleTheme, isDarkMode }) => ( 
  
    <AppBar position="static">
      <Toolbar>
        {/* Logo com link para a página inicial */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
          <img src={logo} alt="Company Logo" style={{ width: '100px', marginRight: '1rem', cursor: 'pointer' }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
          </Typography>
        </Link>
        {/* Botões de navegação */}
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/about">About Us</Button>
        <Button color="inherit" component={Link} to="/services">Portfolio</Button>
        <Button color="inherit" component={Link} to="/contact">Contact</Button>
        <button onClick={toggleTheme}> {isDarkMode ? '' : ''}</button>
      </Toolbar>
    </AppBar>
  );


export default Header;