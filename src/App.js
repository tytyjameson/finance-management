
import { useState } from 'react';
import './App.css';
import WageCalculator from './components/wage-calculator.js';

function App() {

  

  return (
    <div className="App">
      <header className="App-header">
        <h1>Wage Calculator</h1>
      <WageCalculator />
      </header>
    </div>
  );
}

export default App;
