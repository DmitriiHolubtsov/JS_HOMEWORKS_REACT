import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ToDoDetailsPage from './pages/ToDoDetailsPage/ToDoDetailsPage';
import AllToDosPage from './pages/AllToDosPage/AllToDosPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todo/:id" element={<ToDoDetailsPage />} />
        <Route path="/all-todos" element={<AllToDosPage />} />
      </Routes>
    </Router>
  );
};

export default App;
