import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <ul className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/workouts">Workouts</NavLink>
      <NavLink to="/leaderboard">Leaderboard</NavLink>
    </ul>
  );
};

export default Navbar;

