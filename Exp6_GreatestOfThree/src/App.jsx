import React, { useState } from 'react';
import InputGroup from './InputGroup';
import Result from './Result';
import { findGreatest } from './utils/greatest';
import './index.css';

function App() {
  const [resultData, setResultData] = useState(null);
  return (
    <div className="app-container">
      <div className="header">
        <h2>Greatest Finder</h2>
        <p>Input three numbers and instantly find the maximum</p>
      </div>
      <div className="card">
        <InputGroup onCompare={(n1, n2, n3) => setResultData(findGreatest(n1, n2, n3))} />
        <Result resultData={resultData} />
      </div>
    </div>
  );
}
export default App;
