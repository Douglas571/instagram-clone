import './App.css';

import React, { useState } from 'react';

import logo from './logo.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Hello, this is PicSpot 📸</h1>
      <h3>This is currently on development so, be carefull 🚧</h3>
    </div>
  );
}

export default App;
