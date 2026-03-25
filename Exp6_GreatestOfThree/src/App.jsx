import React, { useState } from 'react';

function App() {
  const [nums, setNums] = useState({ num1: '', num2: '', num3: '' });

  const handleChange = (e) => setNums({ ...nums, [e.target.name]: e.target.value });

  const getGreatest = () => {
    const { num1, num2, num3 } = nums;
    if (num1 === '' || num2 === '' || num3 === '') return 'Please enter all three numbers.';
    return `Greatest is: ${Math.max(Number(num1), Number(num2), Number(num3))}`;
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <h2>Greatest of Three Numbers</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '20px' }}>
        <input name="num1" type="number" value={nums.num1} onChange={handleChange} placeholder="Num 1" />
        <input name="num2" type="number" value={nums.num2} onChange={handleChange} placeholder="Num 2" />
        <input name="num3" type="number" value={nums.num3} onChange={handleChange} placeholder="Num 3" />
      </div>
      <h3>{getGreatest()}</h3>
    </div>
  );
}

export default App;
