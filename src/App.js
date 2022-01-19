import React, { useState } from "react"
import logo from './logo.svg';
import './App.css';
import MoleContainer from './components/MoleContainer';

function App() {
  let [score, setScore] = useState(0)
  const createMoleHill = () => {
    let hills = []
    for (let i = 0; i < 9; i++){
      hills.push(
        <MoleContainer 
        key={i}
        setScore={setScore}
        score={score} />
      )
    }
    return (
      <div>
        {hills}
      </div>
    )
    
  }

  return (
    <div className="App">
      <h1>React-a-Mole!</h1>
      <p>Score: {score}</p>
      {createMoleHill()}
    </div>
  );
}

export default App;
