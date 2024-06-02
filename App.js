import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/a" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
