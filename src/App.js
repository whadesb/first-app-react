import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import Listecar from './Listecar';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Navbar />
       <div className="navbar">
       </div>
      <Home />

       <div className="content">

       </div>
    
      <Listecar />
      <div className="listcar">
      </div>
    </div>
  );
}

export default App;
