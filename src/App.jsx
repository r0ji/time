import React, { useState, useEffect } from 'react';

function App() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const fetchTime = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/time');
        const data = await response.json();
        setTime(data.time);
      } catch (error) {
        console.error('Error fetching time:', error);
      }
    };

    fetchTime();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Current Time: {time}</p>
      </header>
    </div>
  );
}

export default App;