import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Container, Paper } from '@mui/material';
import { styled } from '@mui/system';
import vitbg from './assets/vitbg.jpeg';
import vitlogo from './assets/vitlogo.png';
import company1 from './assets/company1.jpeg';
import company2 from './assets/company2.png';
import company3 from './assets/company3.jpg';
import Navbar from './Navbar';
import Footer from './Footer';

// Reusable styled section like in homepage
const StyledSection = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(5),
  margin: theme.spacing(4, 'auto'),
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: '90%',
  },
  [theme.breakpoints.up('md')]: {
    width: '80%',
  },
  [theme.breakpoints.up('lg')]: {
    width: '70%',
  },
  border: '2px solid #002147',
  borderRadius: '10px',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  textAlign: 'center',
  backgroundColor: '#fefefe',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0px 5px 15px rgba(0, 85, 255, 0.4)',
  },
}));

const Careers = () => {
  const companyImages = [company1, company2, company3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % companyImages.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Header */}
      <Box
        sx={{
          height: '450px',
          backgroundImage: `url(${vitbg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            bgcolor: 'rgba(0, 0, 0, 0.6)',
            zIndex: 1,
          }}
        />
        <img src={vitlogo} alt="VIT Logo" style={{ width: 180, zIndex: 2 }} />
        <Typography variant="h3" fontWeight="bold" sx={{ zIndex: 2, mt: 2 }}>
          Careers at VIT
        </Typography>
        <Typography variant="h6" sx={{ zIndex: 2 }}>
          Join a community of innovators and leaders
        </Typography>
      </Box>

      {/* Announcements Section */}
      <StyledSection elevation={3}>
        <Typography variant="h5" color="#002147" gutterBottom>
          Announcements
        </Typography>
        <Typography>
          Application Open for UG / PG / UG NRI / Foreign / Research Programmes 2025-26
        </Typography>
        <Box mt={2}>
          <Button
            href="https://admissions.vit.ac.in/ugapplications/b-arch-2025-applications/login"
            target="_blank"
            variant="contained"
            sx={{
              backgroundColor: '#002147',
              borderRadius: '8px',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#FFD700',
                color: '#002147',
              },
              m: 1,
            }}
          >
            B.Arch 2025 - Apply Now
          </Button>
          <Button
            href="https://admissions.vit.ac.in/ugapplications/bsc-hons-agri-2025-applications/login"
            target="_blank"
            variant="contained"
            sx={{
              backgroundColor: '#002147',
              borderRadius: '8px',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#FFD700',
                color: '#002147',
              },
              m: 1,
            }}
          >
            B.Sc. Agriculture 2025 - Apply Now
          </Button>
        </Box>
      </StyledSection>

      {/* Carousel Section */}
      <StyledSection elevation={3}>
        <Typography variant="h5" color="#002147" gutterBottom>
          Our Recruiting Companies
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mt: 3,
            minHeight: 150,
          }}
        >
          <img
            src={companyImages[currentImageIndex]}
            alt={`Company ${currentImageIndex + 1}`}
            style={{
              maxHeight: 120,
              transition: 'opacity 0.5s ease-in-out',
            }}
          />
        </Box>
      </StyledSection>

      {/* CDC Section */}
      <StyledSection elevation={3}>
        <Typography variant="h5" color="#002147" gutterBottom>
          Career Development Centre (CDC)
        </Typography>
        <Typography>
          The Career Development Centre at VIT empowers students with comprehensive career guidance,
          industrial training, and placement support. Our programs include workshops, mock interviews,
          industrial certifications, and networking events designed to help you achieve your professional
          aspirations.
        </Typography>
        <Button
          href="https://vit.ac.in/cdc-overview"
          target="_blank"
          variant="contained"
          sx={{
            backgroundColor: '#002147',
            borderRadius: '8px',
            fontWeight: 'bold',
            mt: 2,
            '&:hover': {
              backgroundColor: '#FFD700',
              color: '#002147',
            },
          }}
        >
          Learn More
        </Button>
      </StyledSection>
    </>
  );
};

export default Careers;
