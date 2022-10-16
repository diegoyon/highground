import React, { useState } from 'react';
import './Leaderboard.css';

const Leaderboard = () => {
  const [category, setCategory] = useState('Intermedio Mujeres');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  let content;
  switch (category) {
    case 'Intermedio Mujeres':
      content = (
        <iframe
          title="Intermedio Mujeres"
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQOe1-D_UlByLk1jaRmJaI5jbzzsUJn2L7CoBc1ejDBTmXThHu8ksak7e22AhXQt8JTBd0qvfmnYCcT/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"
        ></iframe>
      );
      break;
    case 'Intermedio Hombres':
      content = (
        <iframe
          title="Intermedio Hombres"
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQOe1-D_UlByLk1jaRmJaI5jbzzsUJn2L7CoBc1ejDBTmXThHu8ksak7e22AhXQt8JTBd0qvfmnYCcT/pubhtml?gid=1678873583&amp;single=true&amp;widget=true&amp;headers=false"
        ></iframe>
      );
      break;
    case 'RX Mujeres':
      content = (
        <iframe
          title="RX Mujeres"
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQOe1-D_UlByLk1jaRmJaI5jbzzsUJn2L7CoBc1ejDBTmXThHu8ksak7e22AhXQt8JTBd0qvfmnYCcT/pubhtml?gid=1621358835&amp;single=true&amp;widget=true&amp;headers=false"
        ></iframe>
      );
      break;
    case 'RX Hombres':
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
      <select value={category} onChange={handleChange}>
        <option value="Intermedio Mujeres">Intermedio Mujeres</option>
        <option value="Intermedio Hombres">Intermedio Hombres</option>
        <option value="RX Mujeres">RX Mujeres</option>
        <option value="RX Hombres">RX Hombres</option>
      </select>
      <div className="table">{content}</div>
    </div>
  );
};

export default Leaderboard;

