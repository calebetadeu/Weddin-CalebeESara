import React, { Component } from 'react'
import Navigation from './components/navigation';
import Header from './components/header';
import About from './components/about';
import Gallery from './components/gallery';
import Contact from './components/contact';
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
