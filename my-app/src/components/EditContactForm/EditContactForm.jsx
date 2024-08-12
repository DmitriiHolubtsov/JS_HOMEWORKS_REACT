import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Button, Box } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { editContact } from '../../redux/actions/contactActions';

const EditContactForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const foundContact = useSelector((state) => state.contacts.find((contact) => contact.id === id));

  const [name, setName] = useState(foundContact.name);
  const [phone, setPhone] = useState(foundContact.phone);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editContact({ id, name, phone }));
    navigate('/');
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400, margin: 'auto' }}>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        fullWidth
      />
      <TextField
        label="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Save Changes
      </Button>
    </Box>
  );
};

export default EditContactForm;
