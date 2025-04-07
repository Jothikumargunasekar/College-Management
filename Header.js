import React from 'react';
import { Box, Typography } from '@mui/material';
import vitbg from './assets/vitbg.jpeg';
import vitlogo from './assets/vitlogo.png';

const Header = () => {
  return (
    <Box
      sx={{
        height: 450,
        backgroundImage: `url(${vitbg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        textAlign: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          bgcolor: 'rgba(0,0,0,0.6)',
          zIndex: 1,
        },
        zIndex: 2,
      }}
    >
      <img src={vitlogo} alt="VIT Logo" width={150} style={{ zIndex: 3 }} />
      <Typography variant="h3" fontWeight="bold" sx={{ mt: 2, zIndex: 3 }}>
        Vellore Institute of Technology (VIT)
      </Typography>
      <Typography variant="h6" sx={{ zIndex: 3 }}>
        One of India's Top-Ranked Universities
      </Typography>
    </Box>
  );
};

export default Header;
