import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AddContactPage from './pages/AddContactPage/AddContactPage';
import EditContactPage from './pages/EditContactPage/EditContactPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddContactPage />} />
        <Route path="/edit/:id" element={<EditContactPage />} />
      </Routes>
    </Router>
  );
};

export default App;
