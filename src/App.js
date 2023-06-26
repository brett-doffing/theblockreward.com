 
// import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import BlockTip from './components/BlockTip';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <BlockTip />
        <Routes>
          <Route path='/' exact />
        </Routes>
      </Router>
    </>
  );
}

export default App;
