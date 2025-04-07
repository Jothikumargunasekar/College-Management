import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button
} from '@mui/material';
import { Link } from 'react-router-dom';
import vitLogo from './assets/vitlogo.png';

const portals = [
  {
    title: 'Student Portal',
    image: 'https://cdn-icons-png.flaticon.com/512/201/201818.png',
    link: '/student'
  },
  {
    title: 'Staff Portal',
    image: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
    link: '/staff'
  }
];

const Portal = () => {
  return (
    <>
      {/* Header */}
      <Box
        sx={{
          backgroundImage: `url(${require('./assets/vitbg.jpeg')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '450px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          position: 'relative',
          textAlign: 'center'
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.6)',
            zIndex: 1
          }}
        />
        <Box sx={{ zIndex: 2 }}>
          <img src={vitLogo} alt="VIT Logo" style={{ width: '180px', marginBottom: '20px' }} />
          <Typography variant="h3" fontWeight="bold">VIT Portals</Typography>
          <Typography variant="h6">Select your portal below</Typography>
        </Box>
      </Box>

      {/* Portal Section */}
      <Container sx={{ mt: 5, mb: 5 }}>
        <Grid container spacing={4} justifyContent="center">
          {portals.map((portal, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card
                elevation={6}
                sx={{
                  border: '2px solid #002147',
                  borderRadius: '10px',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0px 6px 12px rgba(0,0,0,0.2)',
                  }
                }}
              >
                <CardContent>
                  <img src={portal.image} alt={portal.title} style={{ width: '100px', marginBottom: '15px' }} />
                  <Typography variant="h5" sx={{ color: '#002147' }}>{portal.title}</Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center' }}>
                  <Button
                    component={Link}
                    to={portal.link}
                    variant="contained"
                    sx={{
                      backgroundColor: '#002147',
                      color: 'white',
                      borderRadius: '8px',
                      fontWeight: 'bold',
                      '&:hover': {
                        backgroundColor: '#FFD700',
                        color: '#002147'
                      }
                    }}
                  >
                    Enter {portal.title}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Portal;
