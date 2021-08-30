import React, { Component } from "react";
import { Timer } from "./CountDown/Timer";


export class Header extends Component {
  render() {
    return (
     
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 intro-text">
                  <h1>
                   Calebe e Sara
                    <span></span>
                  </h1>
                  <p>
                   
                  </p>
                
                </div>
              </div>
            </div>
          

          </div>
        </div> 
      <Timer />   
      </header>
    
    
    );
  }
}

export default Header;
