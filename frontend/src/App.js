import './App.css';

import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:8080/');
      const data = await response.json();
      console.log(data);
    })();
  }, []);

  return (
    <div className='App'>
      <div>THE ODIN BOOK</div>
    </div>
  );
}

export default App;
