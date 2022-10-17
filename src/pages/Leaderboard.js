import React, { useState } from 'react';
import './Leaderboard.css';
import Header from '../components/Header';

const Leaderboard = () => {
  const [category, setCategory] = useState('Intermedio');
  const [division, setDivision] = useState('Mujeres');

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleChangeDivision = (event) => {
    setDivision(event.target.value);
  };

  let content;
  switch (true) {
    case category === 'Intermedio' && division === 'Mujeres':
      content = (
        <iframe
          title="Intermedio Mujeres"
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQOe1-D_UlByLk1jaRmJaI5jbzzsUJn2L7CoBc1ejDBTmXThHu8ksak7e22AhXQt8JTBd0qvfmnYCcT/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"
        ></iframe>
      );
      break;
    case category === 'Intermedio' && division === 'Hombres':
      content = (
        <iframe
          title="Intermedio Hombres"
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQOe1-D_UlByLk1jaRmJaI5jbzzsUJn2L7CoBc1ejDBTmXThHu8ksak7e22AhXQt8JTBd0qvfmnYCcT/pubhtml?gid=1678873583&amp;single=true&amp;widget=true&amp;headers=false"
        ></iframe>
      );
      break;
    case category === 'RX' && division === 'Mujeres':
      content = (
        <iframe
          title="RX Mujeres"
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQOe1-D_UlByLk1jaRmJaI5jbzzsUJn2L7CoBc1ejDBTmXThHu8ksak7e22AhXQt8JTBd0qvfmnYCcT/pubhtml?gid=1621358835&amp;single=true&amp;widget=true&amp;headers=false"
        ></iframe>
      );
      break;
    case category === 'RX' && division === 'Hombres':
      content = (
        <iframe
          title="RX Hombres"
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQOe1-D_UlByLk1jaRmJaI5jbzzsUJn2L7CoBc1ejDBTmXThHu8ksak7e22AhXQt8JTBd0qvfmnYCcT/pubhtml?gid=1777000486&amp;single=true&amp;widget=true&amp;headers=false"
        ></iframe>
      );
      break;
    default:
      break;
  }

  return (
    <div className="leaderboard">
      <Header />
      <div className="options">
        <select value={category} onChange={handleChangeCategory}>
          <option value="Intermedio">Intermedio</option>
          <option value="RX">RX</option>
        </select>
        <select value={division} onChange={handleChangeDivision}>
          <option value="Mujeres">Mujeres</option>
          <option value="Hombres">Hombres</option>
        </select>
      </div>
      <div className="table">{content}</div>
    </div>
  );
};

export default Leaderboard;

