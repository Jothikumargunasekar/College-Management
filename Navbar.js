// src/components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import vitlogo from './assets/vitlogo.png';

const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#002147' }}>
      <Toolbar>
        <img src={vitlogo} alt="VIT Logo" height="40" style={{ marginRight: '16px' }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          VIT
        </Typography>
        <Box>
          <Button component={Link} to="/" color="inherit">Home</Button>
          <Button component={Link} to="/aboutus" color="inherit">About Us</Button>
          <Button component={Link} to="/careers" color="inherit">Careers</Button>
          <Button component={Link} to="/portal" color="inherit">Portal</Button>
          <Button component={Link} to="/faq" color="inherit">FAQ</Button>
          <Button component={Link} to="/contact" color="inherit">Contact Us</Button> {/* Newly added */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
