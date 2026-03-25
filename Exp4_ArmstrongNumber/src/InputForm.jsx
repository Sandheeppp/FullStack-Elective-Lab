import React, { useState } from 'react';

function InputForm({ onCheck }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCheck(inputValue);
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '20px 0' }}>
      <input 
        type="number" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Enter a number"
        style={{ padding: '8px', fontSize: '16px', marginRight: '10px' }}
      />
      <button type="submit" style={{ padding: '8px 15px', fontSize: '16px', cursor: 'pointer', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>
        Check
      </button>
    </form>
  );
}

export default InputForm;
