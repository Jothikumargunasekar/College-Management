// src/components/StaffLogin.js
import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Paper,
  Alert
} from '@mui/material';
import vitLogo from './assets/vitlogo.png';
import generateCaptchaText from './utils/captcha';

const StaffLogin = () => {
  const [staffID, setStaffID] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [success, setSuccess] = useState(false);

  const canvasRef = useRef(null);

  useEffect(() => {
    createCaptcha();
  }, []);

  const createCaptcha = () => {
    const newCaptcha = generateCaptchaText(6);
    setCaptcha(newCaptcha);

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = '25px Arial';
    ctx.fillStyle = '#333';
    ctx.textBaseline = 'middle';
    ctx.fillText(newCaptcha, 20, 30);
  };

  const validateForm = (e) => {
    e.preventDefault();

    if (!dob) return alert('Please select your date of birth.');

    const dobDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - dobDate.getFullYear();
    const m = today.getMonth() - dobDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dobDate.getDate())) age--;

    if (!/^\d{10}$/.test(staffID)) {
      return alert('Staff ID must be exactly 10 digits.');
    }

    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password)) {
      return alert(
        'Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character.'
      );
    }

    if (age < 22) return alert('You must be at least 16 years old.');

    if (captchaInput.toLowerCase() !== captcha.toLowerCase()) {
      alert('Invalid CAPTCHA. Please try again.');
      createCaptcha();
      return;
    }

    setSuccess(true);
    // Clear all fields after successful login
    setStaffID('');
    setPassword('');
    setDob('');
    setCaptchaInput('');
    createCaptcha();

    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Paper elevation={4} sx={{ p: 4, borderTop: '6px solid #002147' }}>
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <img src={vitLogo} alt="VIT Logo" style={{ height: 50 }} />
          <Typography variant="h5" fontWeight="bold" sx={{ color: '#002147', mt: 2 }}>
            Staff Login
          </Typography>
        </Box>
        <form onSubmit={validateForm}>
          <TextField
            fullWidth
            label="Staff ID"
            variant="outlined"
            margin="normal"
            value={staffID}
            onChange={(e) => setStaffID(e.target.value)}
            required
          />
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            type="password"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <TextField
            fullWidth
            label="Date of Birth"
            type="date"
            margin="normal"
            InputLabelProps={{ shrink: true }}
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
          <Box sx={{ textAlign: 'center', mt: 3 }}>
            <canvas ref={canvasRef} width="150" height="50" />
            <Button variant="text" onClick={createCaptcha}>
              Refresh CAPTCHA
            </Button>
            <TextField
              fullWidth
              label="Enter CAPTCHA"
              variant="outlined"
              margin="normal"
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
              required
            />
          </Box>
          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{
              mt: 2,
              backgroundColor: '#002147',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#FFD700',
                color: '#002147'
              }
            }}
          >
            Login
          </Button>
        </form>
        {success && (
          <Alert severity="success" sx={{ mt: 3 }}>
            Login Successful!
          </Alert>
        )}
      </Paper>
    </Container>
  );
};

export default StaffLogin;
