// src/components/PrivacyPolicy.js
import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import vitbg from './assets/vitbg.jpeg';
import vitlogo from './assets/vitlogo.png';

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Header Section */}
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
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.6)',
            top: 0,
            left: 0,
            zIndex: 0,
          }}
        />
        <img src={vitlogo} alt="VIT Logo" width="150" style={{ zIndex: 1 }} />
        <Typography variant="h3" fontWeight="bold" sx={{ zIndex: 1, mt: 2 }}>
          Privacy Policy
        </Typography>
        <Typography variant="subtitle1" sx={{ zIndex: 1 }}>
          Your privacy is our priority
        </Typography>
      </Box>

      {/* Content Section */}
      <Container
        maxWidth="md"
        sx={{
          my: 5,
          p: 4,
          border: '2px solid #002147',
          borderRadius: '12px',
          backgroundColor: '#fff',
          boxShadow: 3,
        }}
      >
        <Typography variant="h4" color="#002147" gutterBottom>
          Our Privacy Commitment
        </Typography>

        <Typography paragraph>
          At Vellore Institute of Technology (VIT), we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, store, and safeguard your data when you interact with our website.
        </Typography>

        <Typography paragraph>
          <strong>Data Collection:</strong> We collect information such as your name, email address, and phone number when you register, apply for programs, or contact us.
        </Typography>

        <Typography paragraph>
          <strong>Use of Information:</strong> Your information is used to communicate with you and send updates. We never sell or share your personal data with third parties without your consent.
        </Typography>

        <Typography paragraph>
          <strong>Data Security:</strong> We employ industry-standard security measures to protect your data from unauthorized access.
        </Typography>

        <Typography paragraph>
          <strong>Your Rights:</strong> You have the right to access, update, or request deletion of your data.
        </Typography>

        <Button
          variant="contained"
          onClick={() => navigate('/')}
          sx={{
            mt: 3,
            backgroundColor: '#002147',
            '&:hover': { backgroundColor: '#FFD700', color: '#002147' },
          }}
        >
          Back to Home
        </Button>
      </Container>
    </>
  );
};

export default PrivacyPolicy;
