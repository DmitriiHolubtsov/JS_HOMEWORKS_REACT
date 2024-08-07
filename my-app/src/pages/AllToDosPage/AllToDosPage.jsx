import React from 'react';
import ToDoList from '../../components/ToDoList/ToDoList';
import { getTodos } from '../../utils/localStorage';
import styles from './AllToDosPage.module.css';

const AllToDosPage = () => {
  const todos = getTodos();

  return (
    <div className={styles.allToDosPage}>
      <ToDoList todos={todos} />
    </div>
  );
};

export default AllToDosPage;
