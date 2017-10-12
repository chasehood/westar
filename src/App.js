import React, { Component } from 'react';
import './Style/App.css';
import './Style/Hero.css'
import Landing from './Components/Landing'
import Hero from './Components/Hero'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing />
        <Hero />
      </div>
    );
  }
}

export default App;
