import React, { Component } from "react";

export class Gallery extends Component {
  render() {
    return (
      <div id="portfolio" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Galeria</h2>
           
          </div>
          <div className="row">
            <div className="portfolio-items">
              <div className="col-sm-2 col-md-4 col-lg-8">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="images/foto1.jpg"
                     
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                 
                      </div>
                      <img
                        src="images/foto1.jpg"
                        className="img-responsive"
                        alt="She said Yes"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="images/foto3.jpg"
                      
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                     
                      </div>
                      <img
                        src="images/foto3.jpg"
                        className="img-responsive"
                        alt="Volta por Socorro-sp"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="images/foto4.jpg"
                      
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                      
                      </div>
                      <img
                        src="images/foto4.jpg"
                        className="img-responsive"
                        alt="Wicklow Trip"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="images/foto5.jpg"
                     
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                     
                      </div>
                      <img
                        src="images/foto5.jpg"
                        className="img-responsive"
                        alt="Viagem Alemanha"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="images/foto6.jpg"
                    
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                     
                      </div>
                      <img
                        src="images/foto6.jpg"
                        className="img-responsive"
                        alt="Comemos muito"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="images/foto7.jpg"
                   
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                       
                      </div>
                      <img
                        src="images/foto7.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="images/foto8.jpg"
               
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                   
                      </div>
                      <img
                        src="images/foto8.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="images/foto9.jpg"
                   
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                
                      </div>
                      <img
                        src="images/foto9.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
