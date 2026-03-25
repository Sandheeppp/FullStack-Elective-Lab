import React, { useState } from 'react';
import './App.css';

function App() {
  const [boxes, setBoxes] = useState([
    { id: 1, color: '#ff4757', active: false },
    { id: 2, color: '#2ed573', active: false },
    { id: 3, color: '#1e90ff', active: false },
    { id: 4, color: '#ffa502', active: false }
  ]);

  const toggleBox = (id) => {
    setBoxes(boxes.map(box => 
      box.id === id ? { ...box, active: !box.active } : box
    ));
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <h2>Four-Box Interaction Game</h2>
      <p>Click a box to securely toggle its state!</p>
      
      <div className="box-container">
        {boxes.map(box => (
          <div 
            key={box.id} 
            className="box"
            style={{ 
              backgroundColor: box.active ? '#2f3542' : box.color,
              opacity: box.active ? 0.8 : 1
            }}
            onClick={() => toggleBox(box.id)}
          >
            {box.active ? 'Clicked!' : `Box ${box.id}`}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
