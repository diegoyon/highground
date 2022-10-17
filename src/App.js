import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import './App.css';
import Workouts from './pages/Workouts';
import Leaderboard from './pages/Leaderboard';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/workouts" exact element={<Workouts />} />
        <Route path="/leaderboard" exact element={<Leaderboard />} />
      </Routes>
    </Router>
  );
};

export default App;

