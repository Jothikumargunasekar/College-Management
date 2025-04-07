import React from 'react';
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  Paper
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/system';

import Navbar from './Navbar';
import Footer from './Footer';

const Header = styled(Box)({
  position: 'relative',
  height: '350px',
  backgroundImage: 'url("/vitbg.jpeg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: '#fff',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
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
    zIndex: -1,
  },
});

const FAQContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(4, 2),
  maxWidth: '900px',
  margin: 'auto',
}));

const CustomAccordion = styled(Accordion)({
  marginBottom: '15px',
  border: '1px solid #002147',
  borderRadius: '8px',
  overflow: 'hidden',
  backgroundColor: '#fff',
});

const CustomAccordionSummary = styled(AccordionSummary)({
  backgroundColor: '#002147',
  color: '#fff',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: '#FFD700',
    color: '#002147',
  },
  '&.Mui-expanded': {
    backgroundColor: '#FFD700',
    color: '#002147',
  },
});

const CustomAccordionDetails = styled(AccordionDetails)({
  backgroundColor: '#fff',
  color: '#333',
  textAlign: 'left',
  lineHeight: 1.6,
});

const FAQ = () => {
  const faqs = [
    {
      question: 'What programs does VIT offer?',
      answer:
        'VIT offers a wide range of undergraduate, postgraduate, and doctoral programs in engineering, management, science, and humanities.',
    },
    {
      question: 'How can I apply for admissions?',
      answer:
        'Admissions at VIT are based on entrance exams such as VITEEE, VITMEE, and direct application procedures. Please refer to our admissions page for detailed guidelines.',
    },
    {
      question: 'What campus facilities are available at VIT?',
      answer:
        'VIT offers modern classrooms, state-of-the-art labs, extensive libraries, sports facilities, hostels, and vibrant cultural spaces that provide an enriching campus life.',
    },
    {
      question: 'What is the fee structure at VIT?',
      answer:
        'The fee structure varies based on the program and campus. Detailed fee information can be found on our admissions page or by contacting the admissions office directly.',
    },
    {
      question: 'How does VIT support research and innovation?',
      answer:
        'VIT has over 20 dedicated research centers and extensive collaborations with industry and academic institutions globally, ensuring a robust culture of innovation and research excellence.',
    },
    {
      question: 'What are the placement opportunities at VIT?',
      answer:
        'VIT boasts a robust placement cell with strong industry connections, offering excellent placement opportunities across various sectors including IT, engineering, management, and more.',
    },
  ];

  return (
    <>
      

      <Header>
        <img src="/vitlogo.png" alt="VIT Logo" style={{ width: 140, marginBottom: 10 }} />
        <Typography variant="h3" fontWeight="bold">
          FAQ
        </Typography>
        <Typography>Frequently Asked Questions about VIT</Typography>
      </Header>

      <FAQContainer>
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          sx={{ fontWeight: 'bold', color: '#002147' }}
        >
          Frequently Asked Questions
        </Typography>

        {faqs.map((faq, index) => (
          <CustomAccordion key={index}>
            <CustomAccordionSummary expandIcon={<ExpandMoreIcon />}>
              {faq.question}
            </CustomAccordionSummary>
            <CustomAccordionDetails>
              <Typography>{faq.answer}</Typography>
            </CustomAccordionDetails>
          </CustomAccordion>
        ))}
      </FAQContainer>

    </>
  );
};

export default FAQ;
