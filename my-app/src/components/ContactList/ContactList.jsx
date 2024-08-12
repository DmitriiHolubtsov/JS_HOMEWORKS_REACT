import React from 'react';
import { useSelector } from 'react-redux';
import { List, Typography } from '@mui/material';
import ContactItem from '../ContactItem/ContactItem';

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts);

  return (
    <List sx={{ width: '100%', maxWidth: 400, margin: 'auto', mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Contact List
      </Typography>
      {contacts.length > 0 ? (
        contacts.map((contact) => <ContactItem key={contact.id} contact={contact} />)
      ) : (
        <Typography>No contacts found.</Typography>
      )}
    </List>
  );
};

export default ContactList;
