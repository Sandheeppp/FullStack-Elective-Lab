import React, { useState } from 'react';

function InputForm({ onCalculate }) {
  const [inputValue, setInputValue] = useState('');
  const handleSubmit = (e) => { e.preventDefault(); onCalculate(inputValue); };
  return (
    <form className="form-group" onSubmit={handleSubmit}>
      <input type="number" className="input-field" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Compute factorial of..." />
      <button type="submit" className="btn-primary">Calculate</button>
    </form>
  );
}
export default InputForm;
