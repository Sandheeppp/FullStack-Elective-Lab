import React, { useState } from 'react';
import './App.css';

function App() {
  const [initialValue, setInitialValue] = useState('');
  const [balls, setBalls] = useState([0, 0, 0, 0]);

  const boxesInfo = [
    { label: 'A', color: 'violet' },
    { label: 'B', color: 'orange' },
    { label: 'C', color: 'green' },
    { label: 'D', color: 'white' }
  ];

  const handleSetInitial = () => {
    const n = Number(initialValue);
    if (!isNaN(n) && n > 0) {
      setBalls([n, n * 2, n * 4, n * 8]);
    }
  };

  const choice1 = () => {
    setBalls(balls.map(b => b * 2));
  };

  const choice2 = () => {
    const sumABC = balls[0] + balls[1] + balls[2];
    setBalls([0, 0, 0, balls[3] + sumABC]);
  };

  const choice3 = () => {
    setBalls([0, balls[1] + balls[0], 0, balls[3] + balls[2]]);
  };

  return (
    <div className="game-wrapper">
      <h2>Four Box Game</h2>
      
      <div className="controls">
        <input 
          type="number" 
          value={initialValue} 
          onChange={(e) => setInitialValue(e.target.value)} 
          placeholder="Enter Initial Value N" 
        />
        <button onClick={handleSetInitial}>Set Initial Balls</button>
      </div>

      <div className="choices">
        <button onClick={choice1}>Choice 1</button>
        <button onClick={choice2}>Choice 2</button>
        <button onClick={choice3}>Choice 3</button>
      </div>

      <div className="box-container">
        {balls.map((count, index) => (
          <div 
            key={index} 
            className="box" 
            style={{ backgroundColor: boxesInfo[index].color, color: index === 3 ? 'black' : 'white' }}
          >
            <h3>Box {boxesInfo[index].label}</h3>
            <p>{count} balls</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
