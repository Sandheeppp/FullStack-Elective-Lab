import React, { useState } from 'react';

function InputGroup({ onCompare }) {
  const [nums, setNums] = useState({ num1: '', num2: '', num3: '' });
  const handleChange = (e) => setNums({ ...nums, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); onCompare(nums.num1, nums.num2, nums.num3); };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input name="num1" type="number" className="input-field" value={nums.num1} onChange={handleChange} placeholder="First" />
        <input name="num2" type="number" className="input-field" value={nums.num2} onChange={handleChange} placeholder="Second" />
        <input name="num3" type="number" className="input-field" value={nums.num3} onChange={handleChange} placeholder="Third" />
      </div>
      <button type="submit" className="btn-primary" style={{width: '100%'}}>Evaluate Greatest</button>
    </form>
  );
}
export default InputGroup;
