import React, { useState } from 'react';

function InputGroup({ onCompare }) {
  const [nums, setNums] = useState({ num1: '', num2: '', num3: '' });

  const handleChange = (e) => {
    setNums({ 
      ...nums, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCompare(nums.num1, nums.num2, nums.num3);
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '20px 0' }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '15px' }}>
        <input 
          name="num1" 
          type="number" 
          value={nums.num1} 
          onChange={handleChange} 
          placeholder="Num 1" 
          style={{ padding: '8px', fontSize: '16px', width: '100px' }}
        />
        <input 
          name="num2" 
          type="number" 
          value={nums.num2} 
          onChange={handleChange} 
          placeholder="Num 2" 
          style={{ padding: '8px', fontSize: '16px', width: '100px' }}
        />
        <input 
          name="num3" 
          type="number" 
          value={nums.num3} 
          onChange={handleChange} 
          placeholder="Num 3" 
          style={{ padding: '8px', fontSize: '16px', width: '100px' }}
        />
      </div>
      <button type="submit" style={{ padding: '8px 15px', fontSize: '16px', cursor: 'pointer', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>
        Find Greatest
      </button>
    </form>
  );
}

export default InputGroup;
