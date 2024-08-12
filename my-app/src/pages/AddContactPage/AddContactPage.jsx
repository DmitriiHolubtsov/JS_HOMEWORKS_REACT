import React from 'react';
import { Box, Typography } from '@mui/material';
import ContactForm from '../../components/ContactForm/ContactForm';

const AddContactPage = () => {
  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Add New Contact
      </Typography>
      <ContactForm />
    </Box>
  );
};

export default AddContactPage;
