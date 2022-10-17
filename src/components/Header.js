import React from 'react';
import cover from '../images/cover.jpg';
import './Header.css';

const Header = () => {
  return (
    <section className="header-content-pages">
      <img className="cover-pages" src={cover} alt="cover-img" />
      <p>HIGH GROUND 2022</p>
    </section>
  );
};

export default Header;

