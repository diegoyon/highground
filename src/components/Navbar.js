import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/logo_blanco.png';

const Navbar = () => {
  const active = ({ isActive }) => (isActive ? 'active' : null);

  return (
    <ul className="navbar">
      <NavLink to="/" end className={active}>
        <img className="nav-logo" src={logo} alt="nav-logo" />
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

