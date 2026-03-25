import React, { useState } from 'react';

function App() {
  const [num, setNum] = useState('');

  const calculateFactorial = (n) => {
    if (n < 0) return 'Invalid (Negative Number)';
    if (n === 0 || n === 1) return 1;
    let fact = 1;
    for (let i = 2; i <= n; i++) fact *= i;
    return fact;
  };

  const result = num !== '' ? calculateFactorial(Number(num)) : '';

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <h2>Factorial Calculator</h2>
      <input type="number" value={num} onChange={(e) => setNum(e.target.value)} placeholder="Enter a number" style={{ padding: '8px' }} />
      <h3 style={{ marginTop: '20px' }}>{num !== '' && `Factorial of ${num} is: ${result}`}</h3>
    </div>
  );
}

export default App;
