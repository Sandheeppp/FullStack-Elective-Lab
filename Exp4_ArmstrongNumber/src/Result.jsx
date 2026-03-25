import React from 'react';

function Result({ resultData }) {
  if (!resultData) {
    return null; // Conditional rendering based on state
  }

  const { number, isArmstrong } = resultData;

  return (
    <div style={{ marginTop: '20px' }}>
      <h3 style={{ color: isArmstrong ? '#2ed573' : '#ff4757' }}>
        {number} is {isArmstrong ? '' : 'NOT '}an Armstrong Number.
      </h3>
    </div>
  );
}

export default Result;
