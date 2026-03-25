import React, { useState } from 'react';
import InputForm from './InputForm';
import NumberList from './NumberList';

function App() {
  const [num, setNum] = useState('');

  // Handle derived state: generating the array of natural numbers
  const count = Number(num);
  const numbers = (!isNaN(count) && count > 0) 
    ? Array.from({ length: count }, (_, i) => i + 1)
    : [];

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <h2 style={{ color: '#333' }}>Print N Natural Numbers</h2>
      
      {/* Passing state and event handler via props */}
      <InputForm n={num} onInputChange={setNum} />
      
      {/* Passing generated numbers via props for conditional rendering */}
      <NumberList numbers={numbers} />
    </div>
  );
}

export default App;
