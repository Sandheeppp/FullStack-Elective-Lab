import React from 'react';

function Result({ resultData }) {
  if (!resultData) return null;

  if (!resultData.isValid) {
    return (
      <div style={{ marginTop: '20px' }}>
        <h3 style={{ color: '#ff4757' }}>{resultData.message}</h3>
      </div>
    );
  }

  return (
    <div style={{ marginTop: '20px' }}>
      <h3 style={{ color: '#2ed573' }}>
        Factorial of {resultData.number} is: {resultData.result}
      </h3>
    </div>
  );
}

export default Result;
