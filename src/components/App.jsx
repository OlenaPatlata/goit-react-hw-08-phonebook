import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import PhonebookPage from 'pages/PhonebookPage';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="phonebook" element={<PhonebookPage />} />
      </Routes>
      {/* <Navigate to="/" replace /> */}
    </>
  );
};

export default App;
