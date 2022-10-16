import React from 'react';
import logo from '../images/logo_blanco.png';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <section className="footer">
        <ul className="social">
          <li>instagram</li>
          <li>facebook</li>
        </ul>
        <div className="logo-info">
          <img className="logo-footer" src={logo} />
        </div>
      </section>
      <section className="subfooter">
        <p>2022 High Ground Fitness Competition.</p>
      </section>
    </>
  );
};

export default Footer;

