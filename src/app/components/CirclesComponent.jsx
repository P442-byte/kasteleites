import React from 'react';

const CirclesComponent = () => {
  const circleStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    backgroundColor: 'lightblue',
    margin: '0 20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  return (
    <div style={containerStyle}>
      <div style={circleStyle}>
        <div style={{ textAlign: 'center' }}>
          <h2>Circle 1</h2>
          <p>Sample text for Circle 1</p>
        </div>
      </div>
      <div style={circleStyle}>
        <div style={{ textAlign: 'center' }}>
          <h2>Circle 2</h2>
          <p>Sample text for Circle 2</p>
        </div>
      </div>
      <div style={circleStyle}>
        <div style={{ textAlign: 'center' }}>
          <h2>Circle 3</h2>
          <p>Sample text for Circle 3</p>
        </div>
      </div>
    </div>
  );
};

export default CirclesComponent;
