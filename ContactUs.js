import React from 'react';
import { Box, Container, Typography, TextField, Button, Grid, Paper, Link } from '@mui/material';
import vitlogo from './assets/vitlogo.png';
import vitbg from './assets/vitbg.jpeg';

const ContactUs = () => {
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
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          textAlign: 'center',
          color: 'white',
          px: 2,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.6)',
            zIndex: 1,
          }}
        />
        <Box sx={{ zIndex: 2 }}>
          <img src={vitlogo} alt="VIT Logo" style={{ width: '180px', marginBottom: '20px' }} />
          <Typography variant="h3" fontWeight="bold">Contact Us</Typography>
          <Typography variant="subtitle1">Get in touch with VIT for inquiries and support</Typography>
        </Box>
      </Box>

      {/* Always Horizontal Layout Section */}
      <Container sx={{ py: 5 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            gap: 4,
          }}
        >
          {/* Contact Info - 1/3 */}
          <Box sx={{ flex: 1 }}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                borderRadius: 2,
                border: '2px solid #002147',
                minWidth: '300px',
              }}
            >
              <Typography variant="h5" gutterBottom color="primary">Contact Information</Typography>
              <Typography paragraph>
                <strong>VIT Vellore Campus</strong><br />
                Vellore – 632014, Tamilnadu, India
              </Typography>
              <Typography paragraph>
                Tel: +91-416-2243091 / 93<br />
                Fax: +91-416-2243092 / +91-416-2240411
              </Typography>
              <Typography paragraph>
                <strong>VIT Chennai Campus</strong><br />
                Vandalur – Kelambakkam Road, Chennai – 600127<br />
                Phone: 044 3993 1555<br />
                Fax: 044 3993 2555<br />
                Email: admin.chennai@vit.ac.in
              </Typography>
              <Typography paragraph>
                <strong>Admissions Office (UG)</strong><br />
                VIT, Vellore – 632014, Tamil Nadu, India<br />
                Tel: 044-462-77555<br />
                Fax: +91-416-2245544, +91-416-2240411<br />
                Email: ugadmission@vit.ac.in
              </Typography>
              <Link href="https://vit.ac.in/contactus" target="_blank" rel="noopener" underline="hover">
                View More Details
              </Link>
            </Paper>
          </Box>

          {/* Contact Form - 2/3 */}
          <Box sx={{ flex: 2 }}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                borderRadius: 2,
                border: '2px solid #002147',
              }}
            >
              <Typography variant="h5" gutterBottom color="primary">Send Us a Message</Typography>
              <Box
                component="form"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Thank you for contacting us!');
                }}
              >
                <TextField label="Name" variant="outlined" fullWidth required sx={{ mb: 2 }} />
                <TextField label="Email" type="email" variant="outlined" fullWidth required sx={{ mb: 2 }} />
                <TextField label="Subject" variant="outlined" fullWidth required sx={{ mb: 2 }} />
                <TextField label="Message" variant="outlined" fullWidth required multiline rows={4} sx={{ mb: 2 }} />
                <Button variant="contained" type="submit" sx={{ backgroundColor: '#002147' }}>
                  Submit
                </Button>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default ContactUs;
