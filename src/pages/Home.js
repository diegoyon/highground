import React from 'react';
import cover from '../images/cover.jpg';
import './Home.css';

const Home = () => {
  return (
    <>
      <section className="header-content">
        <img className="cover" src={cover} />
        <div className="date">
          <h2>OCTUBRE 22-23</h2>
          <h3>2022</h3>
          <h4>XELA</h4>
        </div>
      </section>
      <section className="about-us">
        <h1>Sobre nosotros</h1>
      </section>
      <section className="sponsors">
        <h1>Patrocinadores</h1>
      </section>
    </>
  );
};

export default Home;

