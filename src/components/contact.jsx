import React, { Component } from "react";

import './contact.css'

export class Contact extends Component {


  render() {
 
    return (
      <div>
        
        <div id="contact">
      
          <div className="container">
           
            <div className="col-md-8">
                <img src="images/renovo.png" alt="renovo" />
              <div className="row">
          
              </div>
            </div>
            <div className="col-md-3 col-md-offset-1 contact-info">
              
              <div className="contact-item">
               
                <iframe className='renovo-map' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15943.745099873126!2d-44.2397944!3d-2.5277062!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd8367395f9c58d8d!2sIgreja%20Evang%C3%A9lica%20Renovo!5e0!3m2!1spt-BR!2sbr!4v1630268612558!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy"></iframe>
            
              </div>
              <div className="contact-item">
                <p>
                  
                </p>
              </div>
              <div className="contact-item">
                <p>
                 
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="social">
                  <ul>
                    <li>
                      <a
                        href={this.props.data ? this.props.data.facebook : "/"}
                      >
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href={this.props.data ? this.props.data.twitter : "/"}>
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href={this.props.data ? this.props.data.youtube : "/"}>
                        <i className="fa fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="footer">
          <div className="container text-center">
            <p>
              &copy; 2020 Issaaf Kattan React Land Page Template. Design by{" "}
              <a href="http://www.templatewire.com" rel="nofollow">
                TemplateWire
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
