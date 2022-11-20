import React from 'react';
import cover from '../images/cover.jpg';
import './Home.css';
import bi from '../images/sponsors/BI.png';
import fitaid from '../images/sponsors/Fitaid.png';
import facsa from '../images/sponsors/FACSA.jpg';
import Acetato from '../images/sponsors/Acetato.png';
import BestGrill from '../images/sponsors/BestGrill.png';
import cantera from '../images/sponsors/cantera.png';
import cfx from '../images/sponsors/cfx.png';
import doer from '../images/sponsors/doer.png';
import inumbia from '../images/sponsors/inumbia.png';
import latam from '../images/sponsors/latam.png';
import nutrisport from '../images/sponsors/nutrisport.png';
import ProPhysio from '../images/sponsors/ProPhysio.png';
import sportaddict from '../images/sponsors/sportaddict.png';
import xelapan from '../images/sponsors/xelapan.png';
import macizo from '../images/sponsors/macizo.png';
import mediahouse from '../images/sponsors/mediahouse.png';
import powerade from '../images/sponsors/powerade.png';
import taberna from '../images/sponsors/taberna.png';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <header className="header-content">
        <img className="cover" src={cover} alt="cover-img" />
        <div className="date">
          <h2>OCTUBRE 22-23</h2>
          <h3>2022</h3>
          <h4>XELA</h4>
        </div>
      </header>
      <main>
        <section className="about-us">
          <h1>SOBRE LA COMPETENCIA</h1>
          <p>
            "High Ground Fitness Competition" es una competencia de CrossFit que
            se realiza desde el año 2018 en la ciudad de Quetzaltenango,
            Guatemala. Nuestro meta es reunir a atletas a nivel nacional e
            internacional, ponerlos a prueba y así encontrar a las personas más
            fit de la región.
          </p>
        </section>
        <section className="sponsors">
          <h1>PATROCINADORES</h1>
          <div className="corrusel">
            <img className="sponsor-img" src={bi} alt="bi" />
            <img className="sponsor-img" src={facsa} alt="facsa" />
            <img className="sponsor-img" src={Acetato} alt="acetato" />
            <img className="sponsor-img" src={BestGrill} alt="BestGrill" />
            <img className="sponsor-img" src={cantera} alt="cantera" />
            <img className="sponsor-img" src={cfx} alt="cfx" />
            <img className="sponsor-img" src={doer} alt="doer" />
            <img className="sponsor-img" src={inumbia} alt="inumbia" />
            <img className="sponsor-img" src={latam} alt="latam" />
            <img className="sponsor-img" src={nutrisport} alt="nutrisport" />
            <img className="sponsor-img" src={ProPhysio} alt="ProPhysio" />
            <img className="sponsor-img" src={sportaddict} alt="sportaddict" />
            <img className="sponsor-img" src={xelapan} alt="xelapan" />
            <img className="sponsor-img" src={fitaid} alt="fitaid" />
            <img className="sponsor-img" src={mediahouse} alt="mediahouse" />
            <img className="sponsor-img" src={macizo} alt="macizo" />
            <img className="sponsor-img" src={powerade} alt="powerade" />
            <img className="sponsor-img" src={taberna} alt="taberna" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
