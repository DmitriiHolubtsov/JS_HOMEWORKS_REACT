import React from 'react';
import PropTypes from 'prop-types';
import { Button, Select, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './ToDoItem.module.css';

const ToDoItem = ({ todo, deleteTodo, updateStatus }) => {
  const handleStatusChange = (event) => {
    updateStatus(todo.id, event.target.value);
  };

  return (
    <div className={styles.todoItem}>
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
      <Select value={todo.status} onChange={handleStatusChange} displayEmpty>
        <MenuItem value="pending">Pending</MenuItem>
        <MenuItem value="completed">Completed</MenuItem>
        <MenuItem value="not-completed">Not Completed</MenuItem>
      </Select>
      <Button variant="contained" color="secondary" onClick={() => deleteTodo(todo.id)}>
        Delete
      </Button>
      <Button variant="contained" color="primary" component={Link} to={`/todo/${todo.id}`}>
        View Details
      </Button>
    </div>
  );
};

ToDoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    status: PropTypes.oneOf(['completed', 'not-completed', 'pending']).isRequired
  }).isRequired,
  deleteTodo: PropTypes.func.isRequired,
  updateStatus: PropTypes.func.isRequired
};

export default ToDoItem;
