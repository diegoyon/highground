import React from 'react';
import cover from '../images/cover.jpg';
import './Home.css';
import bi from '../images/sponsors/BI.png';
import fitaid from '../images/sponsors/Fitaid.png';
import facsa from '../images/sponsors/FACSA.jpg';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <section className="header-content">
        <img className="cover" src={cover} alt="cover-img" />
        <div className="date">
          <h2>OCTUBRE 22-23</h2>
          <h3>2022</h3>
          <h4>XELA</h4>
        </div>
      </section>
      <section className="about-us">
        <h1>SOBRE LA COMPETENCIA</h1>
        <p>
          "High Ground Fitness Competition" es una competencia de CrossFit que
          se realiza desde el año 2018 en la ciudad de Quetzaltenango,
          Guatemala. Nuestro meta es reunir a atletas a nivel nacional e
          internacional, ponerlos a prueba y así encontrar al hombre y mujer más
          fit de la región.
        </p>
      </section>
      <section className="sponsors">
        <h1>PATROCINADORES</h1>
        <div className="corrusel">
          <img className="sponsor-img" src={bi} alt="bi" />
          <img className="sponsor-img" src={fitaid} alt="fitaid" />
          <img className="sponsor-img" src={facsa} alt="facsa" />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;

