import React from 'react';

function Result({ resultData }) {
  if (!resultData) return null;
  if (!resultData.isValid) return <div className="result-box"><h3 className="result-error">{resultData.message}</h3></div>;
  return (
    <div className="result-box">
      <h3 className="result-success">
        Factorial of {resultData.number} is <br/> <span style={{fontSize: '32px', display:'block', marginTop:'10px'}}>{resultData.result}</span>
      </h3>
    </div>
  );
}
export default Result;
