import React from 'react';
import logo from '../images/logo_blanco.png';
import './Footer.css';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';

const Footer = () => {
  return (
    <>
      <section className="footer">
        <ul className="social">
          <li>
            <img className="facebook" src={facebook} />
          </li>
          <li>
            <img className="instagram" src={instagram} />
          </li>
        </ul>
        <div className="logo-info">
          <img className="logo-footer" src={logo} />
          <div className="brand">
            <p>HIGH GROUND FITNESS COMPETITION 2022</p>
            <p>PRESENTED BY CROSSFIT XELA</p>
          </div>
        </div>
      </section>
      <section className="subfooter">
        <p>2022 High Ground Fitness Competition.</p>
      </section>
    </>
  );
};

export default Footer;

