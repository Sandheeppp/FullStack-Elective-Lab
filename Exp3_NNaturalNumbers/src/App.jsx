import React, { useState } from 'react';

function App() {
  const [num, setNum] = useState('');
  const numbers = Array.from({ length: Number(num) || 0 }, (_, i) => i + 1);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <h2>Print N Natural Numbers</h2>
      <input 
        type="number" 
        value={num} 
        onChange={(e) => setNum(e.target.value)} 
        placeholder="Enter N"
        style={{ padding: '8px', fontSize: '16px' }}
      />
      <div style={{ marginTop: '20px' }}>
        {numbers.length > 0 ? <p>{numbers.join(', ')}</p> : <p>Please enter a positive number.</p>}
      </div>
    </div>
  );
}

export default App;
