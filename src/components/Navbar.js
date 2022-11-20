import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/logo_blanco.png';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';

const Navbar = () => {
  const active = ({ isActive }) => (isActive ? 'active' : null);

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <ul className="navbar">
        <li>
          <NavLink to="/" end className={active}>
            <img className="nav-logo" src={logo} alt="nav-logo" />
          </NavLink>
        </li>
        <li className="navbar-right">
          <NavLink to="/" end className={active}>
            Home
          </NavLink>
          <NavLink to="/workouts" className={active}>
            Workouts
          </NavLink>
          <NavLink to="/horarios" className={active}>
            Horarios
          </NavLink>
          <NavLink to="/leaderboard" className={active}>
            Leaderboard
          </NavLink>
        </li>
      </ul>

      <div className="mobile">
        <div>
          <NavLink to="/" end className={active}>
            <img className="nav-logo" src={logo} alt="nav-logo" />
          </NavLink>
        </div>
        <div>
          <div className="navbar-mobile">
            <Link to="#" className="menu-bars">
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
          </div>
          <nav className={sidebar ? 'nav-menu activated' : 'nav-menu'}>
            <ul className="nav-menu-items">
              <li className="navbar-toggle" onClick={showSidebar}>
                <Link to="#" className="menu-bars">
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName} onClick={showSidebar}>
                    <NavLink to={item.path} end>
                      {item.icon}
                      <span>{item.title}</span>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
