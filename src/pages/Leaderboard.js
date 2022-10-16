import React, { useState } from 'react';
import './Leaderboard.css';

const Leaderboard = () => {
  const [category, setCategory] = useState();

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div className="leaderboard">
      <select value={category} onChange={handleChange}>
        <option value="Intermedio Mujeres">Intermedio Mujeres</option>
        <option value="Intermedio Hombres">Intermedio Hombres</option>
        <option value="RX Mujeres">RX Mujeres</option>
        <option value="RX Hombres">RX Hombres</option>
      </select>
    </div>
  );
};

export default Leaderboard;

