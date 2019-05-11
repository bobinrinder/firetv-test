import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'Buttons';

class App extends React.Component {
  UP = 38;
  DOWN = 40;
  LEFT = 37;
  RIGHT = 39;
  SELECT = 13;
  BACK = 8;
  REWIND = 227;
  PLAY_PAUSE = 179;
  FAST_FORWARD = 228;

  keysArray = [];

  state = {
    selectedElementIndex: 1,
    lastAction: ''
  }

  constructor() {
    super();
    this.keysArray[38] = 'UP';
    this.keysArray[40] = 'DOWN';
    this.keysArray[37] = 'LEFT';
    this.keysArray[39] = 'RIGHT';
  }

  componentDidMount() {
    window.addEventListener('keyUp', (e) => { 
      this.handleButtons(e.detail.keyCode);
    }
      , false);
    window.addEventListener('keyDown', function (e) { console.log('key down', e.detail.keyCode); }, false);
    // console.log(Buttons);
  }

  handleButtons = (keyCode) => {
    this.setState({ lastAction: this.keysArray[keyCode]});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <h1>{this.state.lastAction}</h1>
        </header>
      </div>
    );
  }
  
}

export default App;
