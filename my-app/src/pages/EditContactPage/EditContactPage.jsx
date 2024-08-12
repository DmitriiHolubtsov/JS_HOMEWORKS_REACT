import React from 'react';
import { Box, Typography } from '@mui/material';
import EditContactForm from '../../components/EditContactForm/EditContactForm';

const EditContactPage = () => {
  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Edit Contact
      </Typography>
      <EditContactForm />
    </Box>
  );
};

export default EditContactPage;
