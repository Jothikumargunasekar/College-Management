// Footer.js
import React from 'react';
import { Box, Typography, Link as MuiLink } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#002147', color: 'white', py: 2, textAlign: 'center' }}>
      <Typography variant="body2">
        &copy; 2025 VIT | All Rights Reserved |{' '}
        <MuiLink component={RouterLink} to="/privacy" sx={{ color: '#FFD700' }}>
          Privacy Policy
        </MuiLink>{' '}
        |{' '}
        <MuiLink component={RouterLink} to="/terms" sx={{ color: '#FFD700' }}>
          Terms & Conditions
        </MuiLink>
      </Typography>
    </Box>
  );
};

export default Footer;
