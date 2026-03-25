import React from 'react';

function Result({ resultData }) {
  if (!resultData) return null;
  if (!resultData.isValid) return <div className="result-box"><h3 className="result-error">{resultData.message}</h3></div>;
  return (
    <div className="result-box">
      <h3 className="result-success">
        The Greatest Number is: <br/><span style={{fontSize:'36px', color:'#000', display:'block', marginTop:'10px'}}>{resultData.result}</span>
      </h3>
    </div>
  );
}
export default Result;
