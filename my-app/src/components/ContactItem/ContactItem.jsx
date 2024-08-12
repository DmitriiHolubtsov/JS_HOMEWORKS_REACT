import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Button, ListItem, ListItemText, ListItemSecondaryAction } from '@mui/material';
import { Link } from 'react-router-dom';
import { deleteContact } from '../../redux/actions/contactActions';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <ListItem divider>
      <ListItemText primary={contact.name} secondary={contact.phone} />
      <ListItemSecondaryAction>
        <Button
          component={Link}
          to={`/edit/${contact.id}`}
          variant="outlined"
          color="primary"
          sx={{ mr: 1 }}>
          Edit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => dispatch(deleteContact(contact.id))}>
          Delete
        </Button>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
  }).isRequired
};

export default ContactItem;
