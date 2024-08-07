import React from 'react';
import ToDoItem from '../ToDoItem/ToDoItem';
import styles from './ToDoList.module.css';

const ToDoList = ({ todos, deleteTodo, updateStatus }) => {
  return (
    <div className={styles.todoList}>
      {todos.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} updateStatus={updateStatus} />
      ))}
    </div>
  );
};

export default ToDoList;
