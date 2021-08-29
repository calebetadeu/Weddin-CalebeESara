import React, { Component } from "react";

export class Gallery extends Component {
  render() {
    return (
      <div id="portfolio" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Galeria</h2>
            <p>
              Aqui vai um Pouco sobre nós, sobre nossa historia
            </p>
          </div>
          <div className="row">
            <div className="portfolio-items">
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/nos/nos9.jpg"
                      title="She Said Yes"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>She Said Yes</h4>
                      </div>
                      <img
                        src="img/nos/nos10.jpg"
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
                      href="img/nos/nos11.jpg"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Trip, Socorro-Sp</h4>
                      </div>
                      <img
                        src="img/nos/nos12.jpg"
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
                      href="img/nos/johnnywicklow.jpeg"
                      title="Wicklow Trip"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Wicklow Trip</h4>
                      </div>
                      <img
                        src="img/nos/nos13.jpg"
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
                      href="img/nos/nos14.jpg"
                      title="Viagem Alemanha"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Viagem Alemanha</h4>
                      </div>
                      <img
                        src="img/nos/nos15.jpg"
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
                      href="img/nos/nos16.jpg"
                      title="Tops Restaurantes"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Comemos muito?</h4>
                      </div>
                      <img
                        src="img/nos/nos17.jpg"
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
                      href="img/nos/nos1.jpg"
                      title="Nois dois"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4> Nois dois</h4>
                      </div>
                      <img
                        src="img/nos/nos2.jpg"
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
                      href="img/nos/nos3.jpg"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Travelling to Hollyhead</h4>
                      </div>
                      <img
                        src="img/nos/nos4.jpg"
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
                      href="img/nos/nos5.jpg"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Paris</h4>
                      </div>
                      <img
                        src="img/nos/nos6.jpg"
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
                      href="img/nos/nos7.jpg"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Primeira flor</h4>
                      </div>
                      <img
                        src="img/nos/nos8.jpg"
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
