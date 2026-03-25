import React, { useState } from 'react';

function InputForm({ onCheck }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCheck(inputValue);
  };

  return (
    <form className="form-group" onSubmit={handleSubmit}>
      <input 
        type="number" 
        className="input-field"
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Enter a number..."
      />
      <button type="submit" className="btn-primary">Verify Armstrong</button>
    </form>
  );
}
export default InputForm;
