import React, { useState } from 'react';

function App() {
  const [num, setNum] = useState('');
  const [result, setResult] = useState('');

  const checkArmstrong = () => {
    let sum = 0;
    const digits = num.split('');
    const pow = digits.length;
    digits.forEach(digit => { sum += Math.pow(Number(digit), pow); });

    if (sum === Number(num) && num !== '') {
      setResult(`${num} is an Armstrong Number!`);
    } else {
      setResult(`${num} is NOT an Armstrong Number.`);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <h2>Armstrong Number Checker</h2>
      <input type="number" value={num} onChange={(e) => setNum(e.target.value)} placeholder="Enter a number" style={{ padding: '8px' }} />
      <button onClick={checkArmstrong} style={{ padding: '8px 15px', marginLeft: '10px' }}>Check</button>
      <h3 style={{ marginTop: '20px', color: '#333' }}>{result}</h3>
    </div>
  );
}

export default App;
