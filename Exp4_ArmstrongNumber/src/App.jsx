import React, { useState } from 'react';
import InputForm from './InputForm';
import Result from './Result';
import { checkArmstrong } from './utils/armstrong';

function App() {
  const [resultData, setResultData] = useState(null);

  const handleCheck = (numStr) => {
    const result = checkArmstrong(numStr);
    setResultData(result);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <h2>Armstrong Number Checker</h2>
      
      {/* InputForm component to accept user input and emit event */}
      <InputForm onCheck={handleCheck} />
      
      {/* Result component logic separates state rendering */}
      <Result resultData={resultData} />
    </div>
  );
}

export default App;
