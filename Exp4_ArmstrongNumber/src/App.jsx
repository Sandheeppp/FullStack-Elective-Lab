import React, { useState } from 'react';
import InputForm from './InputForm';
import Result from './Result';
import { checkArmstrong } from './utils/armstrong';
import './index.css';

function App() {
  const [resultData, setResultData] = useState(null);

  return (
    <div className="app-container">
      <div className="header">
        <h2>Armstrong Checker</h2>
        <p>Mathematical validator for Armstrong properties</p>
      </div>
      <div className="card">
        <InputForm onCheck={(num) => setResultData(checkArmstrong(num))} />
        <Result resultData={resultData} />
      </div>
    </div>
  );
}
export default App;
