import React from "react";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    // <div className="banner d-flex justify-content-center align-items-center">
    //   <div className="container">
    //     <div className="col-md-6">
    //       <h1 className="fw-bold">
    //         We serve Organic food or authentic products or Hill traditional
    //         item.
    //       </h1>
    //       <Link to="/all-products">
    //         <button className="btn btn-success text-white">Shop Now</button>
    //       </Link>
    //     </div>
    //   </div>
    // </div>
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={require("../../../img/banner.jpg").default}
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Our Motto</h5>
            <p>
              We serve Organic food or authentic products or Hill traditional"
              item.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={require("../../../img/banner2.jpg").default}
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Our Motto</h5>
            <p>
              We serve Organic food or authentic products or Hill traditional"
              item.
            </p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
