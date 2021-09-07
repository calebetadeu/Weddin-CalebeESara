import React, { Component } from "react";
import { Timer } from "../CountDown/Timer";
import './Header.css'


export class Header extends Component {
  render() {
    return (
     
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
             
           

              <div className="row">

                 
               </div>
                <div className="col-md-8 col-md-offset-2 intro-text">
                  <div className="date-main" >
                   <div className="sign" >
                     <div className="border" >
          <span className="fast-flicker" > SAVE DATE </span>
        <span className="flicker" >  11/DEZ</span> </div>
              </div>
                
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
