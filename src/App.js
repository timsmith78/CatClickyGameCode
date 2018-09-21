import React, { Component } from 'react'
import TileCollection from './components/TileCollection'
import './App.css'

class App extends Component {
  state = {
    score: 0,
    hiScore: 0
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tuxedo Cat Clicky Game</h1>
        </header>
        <div>
          <h2>Click kitties to score points.</h2>
          <h2>Just don't click the same kitty twice, or you lose!</h2>
        </div>
        <TileCollection />
      </div>
    );
  }
}

export default App
