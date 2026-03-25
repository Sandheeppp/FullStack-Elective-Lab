import React, { useState } from 'react';
import InputGroup from './InputGroup';
import Result from './Result';
import { findGreatest } from './utils/greatest';

function App() {
  const [resultData, setResultData] = useState(null);

  const handleCompare = (num1, num2, num3) => {
    const result = findGreatest(num1, num2, num3);
    setResultData(result);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <h2>Greatest of Three Numbers</h2>
      
      {/* Accepts inputs and emits them back */}
      <InputGroup onCompare={handleCompare} />
      
      {/* Conditionally renders the result message */}
      <Result resultData={resultData} />
    </div>
  );
}

export default App;
