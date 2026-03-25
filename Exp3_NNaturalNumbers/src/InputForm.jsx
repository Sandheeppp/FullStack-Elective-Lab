import React from 'react';

function InputForm({ n, onInputChange }) {
  const handleChange = (e) => {
    onInputChange(e.target.value);
  };

  return (
    <div style={{ margin: '20px 0' }}>
      <label style={{ marginRight: '10px', fontSize: '18px' }}>
        Enter N:
      </label>
      <input 
        type="number" 
        value={n} 
        onChange={handleChange} 
        placeholder="Enter a positive number"
        style={{ padding: '8px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc' }}
      />
    </div>
  );
}

export default InputForm;
