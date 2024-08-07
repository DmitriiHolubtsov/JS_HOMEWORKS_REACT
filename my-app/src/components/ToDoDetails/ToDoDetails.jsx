import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextField, Button, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styles from './ToDoDetails.module.css';

const ToDoDetails = ({ todo, updateTodo, deleteTodo }) => {
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  const [status, setStatus] = useState(todo.status);
  const navigate = useNavigate();

  const handleUpdate = () => {
    updateTodo({ ...todo, title, description, status });
    alert('Todo updated successfully');
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
    navigate('/');
  };

  return (
    <div className={styles.todoDetails}>
      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
        margin="normal"
        multiline
        rows={4}
      />
      <FormControl fullWidth margin="normal">
        <InputLabel>Status</InputLabel>
        <Select value={status} onChange={(e) => setStatus(e.target.value)}>
          <MenuItem value="pending">Pending</MenuItem>
          <MenuItem value="completed">Completed</MenuItem>
          <MenuItem value="not-completed">Not Completed</MenuItem>
        </Select>
      </FormControl>
      <Button color="primary" variant="contained" onClick={handleUpdate} fullWidth>
        Update
      </Button>
      <Button color="secondary" variant="contained" onClick={handleDelete} fullWidth>
        Delete
      </Button>
    </div>
  );
};

ToDoDetails.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    status: PropTypes.oneOf(['completed', 'not-completed', 'pending']).isRequired
  }).isRequired,
  updateTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
};

export default ToDoDetails;
