import React, { useState } from 'react';

function InputForm({ onInputChange }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onInputChange(inputValue);
  };

  return (
    <form className="form-group" onSubmit={handleSubmit}>
      <input 
        type="number" 
        className="input-field"
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Enter N..."
      />
      <button type="submit" className="btn-primary">Generate</button>
    </form>
  );
}
export default InputForm;
