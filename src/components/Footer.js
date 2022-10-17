import React from 'react';
import logo from '../images/logo_blanco.png';
import './Footer.css';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';

const Footer = () => {
  return (
    <footer>
      <section className="footer">
        <ul className="social">
          <li>
            <a
              href="https://www.facebook.com/highgroundfitnesscomp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img alt="fb-icon" className="facebook" src={facebook} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/highgroundfitnesscomp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img alt="ig-icon" className="instagram" src={instagram} />
            </a>
          </li>
        </ul>
        <div className="logo-info">
          <img alt="logo-icon" className="logo-footer" src={logo} />
          <div className="brand">
            <p>HIGH GROUND FITNESS COMPETITION 2022</p>
            <p>POWERED BY CROSSFIT XELA</p>
          </div>
        </div>
      </section>
      <section className="subfooter">
        <p>2022 High Ground Fitness Competition.</p>
      </section>
    </footer>
  );
};

export default Footer;

