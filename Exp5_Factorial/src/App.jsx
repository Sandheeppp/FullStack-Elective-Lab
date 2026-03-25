import React, { useState } from 'react';
import InputForm from './InputForm';
import Result from './Result';
import { calculateFactorial } from './utils/factorial';
import './index.css';

function App() {
  const [resultData, setResultData] = useState(null);
  return (
    <div className="app-container">
      <div className="header">
        <h2>Factorial Engine</h2>
        <p>Lightning-fast mathematical computations</p>
      </div>
      <div className="card">
        <InputForm onCalculate={(num) => setResultData(calculateFactorial(num))} />
        <Result resultData={resultData} />
      </div>
    </div>
  );
}
export default App;
