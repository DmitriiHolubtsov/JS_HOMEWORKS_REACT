import React from 'react';
import { Box, Typography } from '@mui/material';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';

const HomePage = () => {
  return (
    <Box sx={{ maxWidth: 800, margin: 'auto', mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Phone Book
      </Typography>
      <ContactForm />
      <ContactList />
    </Box>
  );
};

export default HomePage;
