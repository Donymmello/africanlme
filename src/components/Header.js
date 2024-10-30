import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography 
          variant="h6" 
          component={Link} 
          to="/" 
          sx={{ flexGrow: 1, color: 'inherit', textDecoration: 'none' }}
        >
          {}
          Logo
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/services">Portfolio</Button>
        <Button color="inherit" component={Link} to="/contact">Contact</Button>
        </Toolbar>
    </AppBar>
  );
};

export default Header;
