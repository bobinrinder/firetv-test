import React from 'react';
import logo from './logo.svg';
import './App.css';
import useKeyboardInput from './useKeyboardInput';
// import './Buttons.js';

function App () {
  const { currentKeyCode } = useKeyboardInput();
  const { currentKeyName } = useKeyboardInput();
  const { keyCodeHistory } = useKeyboardInput();
  
  return (
    <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <h1>{currentKeyCode}</h1>
          <h1>{currentKeyName}</h1>
          {/* <h1>{currentKeyCode2}</h1> */}
          <h6>{ keyCodeHistory.map( item => item + ", ")}</h6>
        </header>
      </div>
  )
}

export default App;
