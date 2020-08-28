import React from 'react';
import './App.css';
import Sidebar from './Sidebar';


function App() {
  // BEM naming convention
  return (
    <div className="App">
      <h1>WhatsApp Clone</h1>

      <div className="app__body">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
