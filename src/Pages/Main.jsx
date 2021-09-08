import React, { Component } from 'react'
import Navigation from '../components/Navigation';
import Header from '../components/Header/Header';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Cards from '../components/Cards/Cards';
import { Timer } from '../components/CountDown/Timer';

export class App extends Component {


  render() {
    return (
      <div>
        <Navigation />
        <Header/>
        <Timer />
        <Cards />
        <Gallery />
        <Contact  />
      </div>
    )
  }
}

export default App
