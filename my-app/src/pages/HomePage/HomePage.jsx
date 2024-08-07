import React, { useState, useEffect } from 'react';
import ToDoForm from '../../components/ToDoForm/ToDoForm';
import ToDoList from '../../components/ToDoList/ToDoList';
import { getTodos, saveTodo } from '../../utils/localStorage';
import styles from './HomePage.module.css';

const HomePage = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(getTodos());
  }, []);

  const addTodo = (todo) => {
    const newTodo = { ...todo, id: Date.now().toString() };
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    saveTodo(updatedTodos);
  };

  const removeTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    saveTodo(updatedTodos);
  };

  const updateStatus = (id, status) => {
    const updatedTodos = todos.map((todo) => (todo.id === id ? { ...todo, status } : todo));
    setTodos(updatedTodos);
    saveTodo(updatedTodos);
  };

  return (
    <div className={styles.homePage}>
      <ToDoForm addTodo={addTodo} />
      <ToDoList todos={todos} deleteTodo={removeTodo} updateStatus={updateStatus} />
    </div>
  );
};

export default HomePage;
