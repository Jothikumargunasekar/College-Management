// src/components/Terms.js
import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import vitbg from './assets/vitbg.jpeg';
import vitlogo from './assets/vitlogo.png';

const Terms = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${vitbg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '450px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          color: '#fff',
          position: 'relative',
          textAlign: 'center',
        }}
      >
        <Box sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.6)',
          top: 0,
          left: 0,
          zIndex: 0
        }} />
        <img src={vitlogo} alt="VIT Logo" width="150" style={{ zIndex: 1 }} />
        <Typography variant="h3" fontWeight="bold" sx={{ zIndex: 1, mt: 2 }}>
          Terms & Conditions
        </Typography>
        <Typography variant="subtitle1" sx={{ zIndex: 1 }}>
          Know Your Rights & Responsibilities
        </Typography>
      </Box>

      <Container maxWidth="md" sx={{ my: 5, p: 4, border: '2px solid #002147', borderRadius: '12px', backgroundColor: '#fff', boxShadow: 3 }}>
        <Typography variant="h4" color="#002147" gutterBottom>
          Terms & Conditions
        </Typography>
        <Typography paragraph>
          Welcome to Vellore Institute of Technology (VIT). By accessing or using our website, you agree to be bound by these Terms & Conditions. Please read them carefully before using our services.
        </Typography>
        <Typography paragraph>
          <strong>1. Acceptance of Terms:</strong> Your use of this website signifies your agreement to these Terms and Conditions.
        </Typography>
        <Typography paragraph>
          <strong>2. Use of Website:</strong> The content provided is for general informational purposes. You agree not to misuse or alter content.
        </Typography>
        <Typography paragraph>
          <strong>3. Intellectual Property:</strong> All content, logos, and designs are the property of VIT. Unauthorized use is prohibited.
        </Typography>
        <Typography paragraph>
          <strong>4. Updates:</strong> VIT reserves the right to update these terms at any time. Continued use indicates acceptance of revised terms.
        </Typography>

        <Button variant="contained" href="/" sx={{ mt: 3, backgroundColor: '#002147', '&:hover': { backgroundColor: '#FFD700', color: '#002147' } }}>
          Back to Home
        </Button>
      </Container>
    </>
  );
};

export default Terms;
