import React from 'react';

function Result({ resultData }) {
  if (!resultData) return null;
  const { number, isArmstrong } = resultData;
  return (
    <div className="result-box">
      <h3 className={isArmstrong ? "result-success" : "result-error"}>
        {isArmstrong ? `✨ ${number} is an Armstrong Number!` : `❌ ${number} is NOT an Armstrong Number`}
      </h3>
    </div>
  );
}
export default Result;
