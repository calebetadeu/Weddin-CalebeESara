import React, { Component } from 'react'
import Navigation from '../components/Navigation';
import Header from '../components/Header/Header';

import Services from './Services';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import $ from 'jquery';
import Cards from '../components/Cards/Cards';
import { Timer } from '../components/CountDown/Timer';

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
