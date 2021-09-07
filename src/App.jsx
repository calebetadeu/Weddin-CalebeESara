import React, { Component } from 'react'
import Navigation from './components/Navigation';
import Header from './components/Header/Header';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import JsonData from './data/data.json';
import Cards from './components/Cards/Cards';



export class App extends Component {
  state = {
    landingPageData: {},
  }
  getlandingPageData() {
    this.setState({landingPageData : JsonData})
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      <div>
        <Navigation />
        <Header data={this.state.landingPageData.Header} />
        
        <About  data={this.state.landingPageData.About} />
       <Cards data={this.state.landingPageData.Features}  />
        
        <Gallery />
        <Contact data={this.state.landingPageData.Contact} />
      </div>
    )
  }
}

export default App;
