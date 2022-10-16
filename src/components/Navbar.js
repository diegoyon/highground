import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const active = ({ isActive }) => (isActive ? 'active' : null);

  return (
    <ul className="navbar">
      <NavLink to="/" end className={active}>
        Home
      </NavLink>
      <NavLink to="/workouts" className={active}>
        Workouts
      </NavLink>
      <NavLink to="/leaderboard" className={active}>
        Leaderboard
      </NavLink>
    </ul>
  );
};

export default Navbar;

