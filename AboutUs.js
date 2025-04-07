import React from 'react';
import { Box, Typography, Button, Paper, List, ListItem } from '@mui/material';
import { styled } from '@mui/system';
import Navbar from './Navbar';
import Footer from './Footer';

const HeaderSection = styled(Box)({
  position: 'relative',
  height: '450px',
  backgroundImage: 'url("/vitbg.jpeg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: '#fff',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '50px',
  zIndex: 0,
  textAlign: 'center',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.6)',
    zIndex: -1
  }
});

const Section = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(5),
  margin: theme.spacing(4, 'auto'),
  width: '85%',
  maxWidth: 900,
  borderRadius: 10,
  backgroundColor: '#fefefe',
  border: '2px solid #002147',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0px 5px 15px rgba(0, 85, 255, 0.4)'
  }
}));

const CustomButton = styled(Button)({
  backgroundColor: '#002147',
  color: '#fff',
  fontWeight: 'bold',
  padding: '12px 20px',
  marginTop: '15px',
  '&:hover': {
    backgroundColor: '#FFD700',
    color: '#002147',
    transform: 'scale(1.05)',
    boxShadow: '4px 4px 12px rgba(0, 0, 0, 0.3)'
  }
});

function AboutUs() {
  return (
    <Box>
    
      {/* Header */}
      <HeaderSection>
        <img src="/vitlogo.png" alt="VIT Logo" style={{ width: 180, marginBottom: 20 }} />
        <Typography variant="h3" fontWeight="bold">About VIT</Typography>
        <Typography>India's Premier Private University</Typography>
      </HeaderSection>

      {/* Welcome Section */}
      <Section elevation={3}>
        <Typography variant="h4" gutterBottom sx={{ color: '#002147', fontWeight: 'bold' }}>
          Welcome to VIT
        </Typography>
        <Typography paragraph>
          Vellore Institute of Technology (VIT) has grown into one of India's top-ranked universities,
          offering world-class faculty, cutting-edge research facilities, and a strong commitment to innovation.
        </Typography>
        <Typography paragraph>
          With multiple campuses across India, VIT is recognized for its high-quality education, research contributions,
          and global collaborations.
        </Typography>
        <CustomButton href="https://vit.ac.in/about-vit" target="_blank">Learn More</CustomButton>
      </Section>

      {/* Mission & Vision */}
      <Section elevation={3}>
        <Typography variant="h4" gutterBottom sx={{ color: '#002147', fontWeight: 'bold' }}>
          Our Mission & Vision
        </Typography>
        <Typography paragraph>
          Our mission is to empower students with knowledge, skills, and ethical values to excel in their careers and contribute to society.
        </Typography>
        <List>
          <ListItem>🔹 Providing state-of-the-art infrastructure and facilities.</ListItem>
          <ListItem>🔹 Encouraging entrepreneurial spirit and industry collaborations.</ListItem>
          <ListItem>🔹 Developing socially responsible and ethical leaders.</ListItem>
        </List>
      </Section>

      {/* Research & Innovation */}
      <Section elevation={3}>
        <Typography variant="h4" gutterBottom sx={{ color: '#002147', fontWeight: 'bold' }}>
          Research & Innovation
        </Typography>
        <Typography paragraph>
          VIT has 21 research centers dedicated to cutting-edge fields such as Artificial Intelligence, Biotechnology,
          Aerospace, Cybersecurity, and Sustainable Energy.
        </Typography>
        <Typography paragraph>
          With 10,000+ research papers published, VIT continues to drive innovation globally.
        </Typography>
      </Section>

      {/* Student Life & Events */}
      <Section elevation={3}>
        <Typography variant="h4" gutterBottom sx={{ color: '#002147', fontWeight: 'bold' }}>
          Student Life at VIT
        </Typography>
        <Typography paragraph>
          VIT offers a vibrant campus life with cultural, technical, and sports events:
        </Typography>
        <List>
          <ListItem>🎭 <strong>Riviera:</strong> Annual cultural festival.</ListItem>
          <ListItem>🛠️ <strong>GraVITas:</strong> National-level technical fest.</ListItem>
          <ListItem>⚽ <strong>Sports Meets:</strong> Competitive sports events.</ListItem>
        </List>
      </Section>

    </Box>
  );
}

export default AboutUs;