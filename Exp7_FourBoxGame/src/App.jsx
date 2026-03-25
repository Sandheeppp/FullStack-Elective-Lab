import React, { useState } from 'react';
import './index.css';

const localStyles = `
  .game-boxes { display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; margin-top: 30px; }
  .game-box { width: 140px; height: 140px; border-radius: 16px; display: flex; flex-direction: column; align-items: center; justify-content: center; font-size: 18px; font-weight: 700; box-shadow: 0 10px 25px rgba(0,0,0,0.1); transition: transform 0.3s; }
  .game-box:hover { transform: scale(1.05); }
  .choice-row { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; }
`;

function App() {
  const [initialValue, setInitialValue] = useState('');
  const [balls, setBalls] = useState([0, 0, 0, 0]);

  const boxesInfo = [
    { label: 'A', color: '#ff7675' }, 
    { label: 'B', color: '#fdcb6e' },
    { label: 'C', color: '#55efc4' },
    { label: 'D', color: '#dfe6e9' }
  ];

  const handleSetInitial = (e) => {
    e.preventDefault();
    const n = Number(initialValue);
    if (!isNaN(n) && n > 0) setBalls([n, n * 2, n * 4, n * 8]);
  };

  return (
    <div className="app-container">
      <style>{localStyles}</style>
      <div className="header">
        <h2>Four Box Interactive</h2>
        <p>State manipulation simulator</p>
      </div>
      
      <div className="card">
        <form className="form-group" onSubmit={handleSetInitial}>
          <input type="number" className="input-field" value={initialValue} onChange={(e) => setInitialValue(e.target.value)} placeholder="Initial N value..." />
          <button type="submit" className="btn-primary">Initialize</button>
        </form>

        <div className="choice-row">
          <button className="btn-primary" style={{background:'#6c5ce7'}} onClick={() => setBalls(balls.map(b => b * 2))}>1. Double</button>
          <button className="btn-primary" style={{background:'#0984e3'}} onClick={() => setBalls([0, 0, 0, balls[3] + balls[0] + balls[1] + balls[2]])}>2. Push Last</button>
          <button className="btn-primary" style={{background:'#00b894'}} onClick={() => setBalls([0, balls[1] + balls[0], 0, balls[3] + balls[2]])}>3. Odd to Even</button>
        </div>

        <div className="game-boxes">
          {balls.map((count, index) => (
            <div key={index} className="game-box" style={{ backgroundColor: boxesInfo[index].color, color: index === 3 ? '#2d3436' : 'white' }}>
              <h4>Box {boxesInfo[index].label}</h4>
              <p style={{fontSize:'32px', margin:'5px 0 0 0'}}>{count}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default App;
