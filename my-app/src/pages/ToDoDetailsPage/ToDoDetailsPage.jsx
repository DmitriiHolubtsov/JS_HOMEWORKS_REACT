import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ToDoDetails from '../../components/ToDoDetails/ToDoDetails';
import { getTodo, updateTodo, deleteTodo } from '../../utils/localStorage';
import styles from './ToDoDetailsPage.module.css';

const ToDoDetailsPage = () => {
  const { id: todoId } = useParams();
  const todo = getTodo(todoId);
  const navigate = useNavigate();

  const handleUpdate = (updatedTodo) => {
    updateTodo(updatedTodo);
  };

  const handleDelete = (id) => {
    deleteTodo(id);
    navigate('/');
  };

  return (
    <div className={styles.todoDetailsPage}>
      <ToDoDetails todo={todo} updateTodo={handleUpdate} deleteTodo={handleDelete} />
    </div>
  );
};

export default ToDoDetailsPage;
