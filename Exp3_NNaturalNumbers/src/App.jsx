import React, { useState } from 'react';
import InputForm from './InputForm';
import NumberList from './NumberList';
import './index.css';

function App() {
  const [num, setNum] = useState('');
  const count = Number(num);
  const numbers = (!isNaN(count) && count > 0) ? Array.from({ length: count }, (_, i) => i + 1) : [];

  return (
    <div className="app-container">
      <div className="header">
        <h2>Natural Numbers Generator</h2>
        <p>Interactive sequential number visualization</p>
      </div>
      <div className="card">
        <InputForm onInputChange={setNum} />
        {num !== '' && <NumberList numbers={numbers} />}
      </div>
    </div>
  );
}
export default App;
