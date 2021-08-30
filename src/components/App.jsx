import React, { Component } from 'react'
import Navigation from './Navigation';
import Header from './Header';

import Services from './Services';
import Gallery from './Gallery';
import Contact from './Contact';
import $ from 'jquery';
import Cards from './Cards/Cards';
import { Timer } from './CountDown/Timer';

export class App extends Component {
  state = {
    resumeData : {},
  }
  getResumeData(){
    $.ajax({
      url:'/data.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <div>
        <Navigation />
        <Header data={this.state.resumeData.Header}/>
        <Timer />
        <Cards data={this.state.resumeData.Features}/>
        <Services  data={this.state.resumeData.Services}/>
        <Gallery />
        <Contact  data={this.state.resumeData.Contact}/>
      </div>
    )
  }
}

export default App
