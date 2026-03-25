import React from 'react';

function NumberList({ numbers }) {
  // Conditional rendering
  if (!numbers || numbers.length === 0) {
    return <p style={{ fontSize: '18px', color: '#666', marginTop: '20px' }}>Please enter a valid positive number.</p>;
  }

  return (
    <div style={{ marginTop: '20px' }}>
      <h3 style={{ marginBottom: '15px' }}>First {numbers.length} Natural Numbers:</h3>
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'center', 
        gap: '10px',
        maxWidth: '600px',
        margin: '0 auto'
      }}>
        {numbers.map(num => (
          <span 
            key={num} 
            style={{
              padding: '10px 15px',
              backgroundColor: '#007bff',
              color: 'white',
              borderRadius: '5px',
              fontWeight: 'bold'
            }}
          >
            {num}
          </span>
        ))}
      </div>
    </div>
  );
}

export default NumberList;
