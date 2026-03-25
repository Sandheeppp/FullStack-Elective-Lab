import React from 'react';

function NumberList({ numbers }) {
  if (!numbers || numbers.length === 0) {
    return <div className="result-box"><p className="result-error">Please enter a valid positive number.</p></div>;
  }
  return (
    <div className="result-box">
      <h3>First {numbers.length} Natural Numbers</h3>
      <div className="number-grid">
        {numbers.map((num, i) => (
          <span key={num} className="number-pill" style={{ animationDelay: `${i * 0.05}s` }}>
            {num}
          </span>
        ))}
      </div>
    </div>
  );
}
export default NumberList;
