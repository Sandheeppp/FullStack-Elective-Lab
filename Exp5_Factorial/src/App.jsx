import React, { useState } from 'react';
import InputForm from './InputForm';
import Result from './Result';
import { calculateFactorial } from './utils/factorial';

function App() {
  const [resultData, setResultData] = useState(null);

  const handleCalculate = (numStr) => {
    const result = calculateFactorial(numStr);
    setResultData(result);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <h2>Factorial Calculator</h2>
      
      <InputForm onCalculate={handleCalculate} />
      
      <Result resultData={resultData} />
    </div>
  );
}

export default App;
