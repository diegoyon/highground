import React, { useState } from 'react';
import Header from '../components/Header';
import './Workouts.css';
import Footer from '../components/Footer';

const Workouts = () => {
  const [workout, setWorkout] = useState('WORKOUT 1');

  const handleChange = (event) => {
    setWorkout(event.target.value);
  };

  let int_content;
  let rx_content;

  switch (workout) {
    case 'WORKOUT 1':
      int_content =
        'For time \n\n Buy in:\n 30 Burpee Box Get Overs\n\n 5 Rounds\n 7 Shoulder to overhead (95/65)\n 100ft Sled Drag\n\n TC: 13min';
      rx_content =
        'For time \n\n Buy in:\n 30 Burpee Box Get Overs\n\n 5 Rounds\n 7 Shoulder to overhead (135/95)\n 100ft Sled Drag\n\n TC: 13min';
      break;
    case 'WORKOUT 2 & 3':
      int_content =
        '9 minutes to complete: \n 1600/1400m row\n In remaining time:\n Max reps Cleans (135/95)';
      rx_content =
        '9 minutes to complete: \n 1600/1400m row\n In remaining time:\n Max reps Cleans (185/125)';
      break;
    case 'WORKOUT 4':
      int_content =
        'Sprints \n 3 Elimination Rounds\n\n 3 Shuttle Runs\n 12/8 Toes To Bar\n3 Shuttle Runs\n\n TC: 3min per round';
      rx_content =
        'Sprints \n 3 Elimination Rounds\n\n 3 Shuttle Runs\n 8/5 Bar Muscle Ups\n3 Shuttle Runs\n\n TC: 3min per round';
      break;
    case 'WORKOUT 5':
      int_content =
        "For Time \n50ft OH DB Walking Lunges (35's/25's) \n 35 Box Jump Over (24\"/20\")\n 25 Hand-release Push Ups\n 50ft DB Walking Lunges (35's/25's)\n 15 Devil Press (35's/25's)\n 50ft DB Walking Lunges (35's/25's)\n 25 Hand-release Push Ups\n 35 Box Jump Over (24\"/20\")\n 50ft OH DB Walking Lunges (35's/25's)\n\n TC: 17min";
      rx_content =
        "For Time \n50ft OH DB Walking Lunges (50's/35's) \n 35 Box Jump Over (24\"/20\")\n 25 Handstand Push Ups\n 50ft DB Walking Lunges (50's/35's)\n 15 Devil Press (50's/35's)\n 50ft DB Walking Lunges (50's/35's)\n 25 Handstand Push Ups\n 35 Box Jump Over (24\"/20\")\n 50ft OH DB Walking Lunges (50's/35's)\n\n TC: 17min";
      break;
    case 'WORKOUT 6':
      int_content =
        'Snatch ladder \n\n(H) 95 - 105 - 115 - 125 - 135 - 145 - 155 - 165 -175 -185 \n (M) 65 - 75 - 85 - 95 - 100 - 105 - 110 - 115 - 120 - 125';
      rx_content =
        'Snatch ladder \n\n(H) 145 - 155 - 165 - 175 - 185 - 195 - 205 - 215 - 225 - 235 \n (M) 95 - 105 - 115 - 125 - 130 - 135 - 140 - 145 - 150 - 155';
      break;
    case 'WORKOUT 7':
      int_content =
        'For Time \n\n 21 Chest-to-bar Pull Ups \n 21 Back Squats (155/105) \n 15 Chest-to-bar Pull Ups \n 15 Front Squats (155/105) \n 9 Chest-to-bar Pull Ups \n 9 Overhead Squats (155/105)\n\n TC: 8min';
      rx_content =
        'For Time \n\n 21 Pull Ups \n 21 Back Squats (115/85) \n 15 Pull Ups \n 15 Front Squats (115/85) \n 9 Pull Ups \n 9 Overhead Squats (115/85)\n\n TC: 8min';
      break;
    default:
      break;
  }

  return (
    <>
      <Header />
      <div className="workout-description">
        <select
          className="select-workout"
          value={workout}
          onChange={handleChange}
        >
          <option value="WORKOUT 1">WORKOUT 1</option>
          <option value="WORKOUT 2 & 3">WORKOUT 2 & 3</option>
          <option value="WORKOUT 4">WORKOUT 4</option>
          <option value="WORKOUT 5">WORKOUT 5</option>
          <option value="WORKOUT 6">WORKOUT 6</option>
          <option value="WORKOUT 7">WORKOUT 7</option>
        </select>
        <div className="workout-card">
          <p className="badge">INTERMEDIO</p>
          <p>{int_content}</p>
        </div>
        <div className="workout-card rx-card">
          <p className="badge rx-badge">RX</p>
          <p>{rx_content}</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Workouts;
