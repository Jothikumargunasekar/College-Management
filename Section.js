import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';

const vitBlue = '#002147';
const vitYellow = '#FFD700';
const textDark = '#333';

const sections = [
  {
    title: 'Welcome to VIT Vellore',
    text: 'Established in 1984, VIT is a globally recognized institution known for academic excellence, cutting-edge research, and strong industry collaborations.',
    btn: { label: 'Learn More', link: 'https://vit.ac.in/' }
  },
  {
    title: 'About Us',
    text: 'VIT Vellore offers world-class education with a strong focus on innovation, interdisciplinary research, and skill development.',
    btn: { label: 'Read More', link: 'https://vit.ac.in/about-vit' }
  },
  {
    title: 'Admissions',
    text: 'Apply now for undergraduate and postgraduate programs. Admissions are based on VITEEE, VITMEE, and direct applications.',
    btn: { label: 'Apply Now', link: 'https://vit.ac.in/admissions' }
  },
  {
    title: 'Events',
    text: 'Join exciting cultural, technical, and research events hosted at VIT.',
    btn: { label: 'Explore Events', link: 'https://vit.ac.in/campus-life/events' }
  },
  {
    title: 'Departments',
    text: 'Explore the diverse academic departments at VIT.',
    depts: [
      { name: 'SCOPE', link: 'https://vit.ac.in/academics/schools/scope' },
      { name: 'SENSE', link: 'https://vit.ac.in/academics/schools/sense' },
      { name: 'SMEC', link: 'https://vit.ac.in/academics/schools/smec' },
      { name: 'SBST', link: 'https://vit.ac.in/academics/schools/sbst' },
      { name: 'VSB', link: 'https://vit.ac.in/academics/schools/vsb' },
      { name: 'SARCH', link: 'https://vit.ac.in/academics/schools/sarch' },
    ]
  },
];

const Section = () => {
  return (
    <Container sx={{ mt: 5, mb: 5 }}>
      {sections.map((sec, index) => (
        <Box
          key={index}
          sx={{
            width: { xs: '100%', sm: '90%', md: '80%', lg: '70%' }, // Compact width
            mx: 'auto', // Center the box
            mb: 5,
            p: 4,
            border: `2px solid ${vitBlue}`,
            borderRadius: 2,
            backgroundColor: '#ffffff',
            boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
            textAlign: 'center',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '0px 5px 15px rgba(0, 85, 255, 0.4)',
            }
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: vitBlue,
              fontWeight: 600,
              mb: 2
            }}
          >
            {sec.title}
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: textDark, lineHeight: 1.6, mb: 2 }}
          >
            {sec.text}
          </Typography>

          {sec.btn && (
            <Button
              variant="contained"
              href={sec.btn.link}
              target="_blank"
              sx={{
                mt: 2,
                px: 3,
                py: 1.5,
                fontWeight: 'bold',
                bgcolor: vitBlue,
                color: '#fff',
                borderRadius: '8px',
                boxShadow: '2px 2px 8px rgba(0,0,0,0.2)',
                transition: '0.3s',
                '&:hover': {
                  bgcolor: vitYellow,
                  color: vitBlue,
                  transform: 'scale(1.05)',
                  boxShadow: '4px 4px 12px rgba(0,0,0,0.3)'
                }
              }}
            >
              {sec.btn.label}
            </Button>
          )}

          {sec.depts && (
            <Grid container spacing={2} justifyContent="center" sx={{ mt: 3 }}>
              {sec.depts.map((dept, i) => (
                <Grid item xs={12} sm={6} md={4} key={i} display="flex" justifyContent="center">
                  <Button
                    variant="contained"
                    href={dept.link}
                    target="_blank"
                    sx={{
                      bgcolor: vitBlue,
                      color: 'white',
                      fontWeight: 'bold',
                      borderRadius: '8px',
                      width: '100%',
                      maxWidth: '200px',
                      '&:hover': {
                        bgcolor: vitYellow,
                        color: vitBlue
                      }
                    }}
                  >
                    {dept.name}
                  </Button>
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      ))}
    </Container>
  );
};

export default Section;
