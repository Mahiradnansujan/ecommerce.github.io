import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-light py-5 footer">
      <div className=" container">
        <div className="row">
          <div className="col-md-4 ">
            <div className="m-2">
              <h4>Contact</h4>
              <img src="/logo.png" className="w-75" />
              <p className="mt-3">
                We the first platfrom in Rangamati,Khagrachori and Bandarban
                Hill districts,Connecting Hill women entrepreneurs.
              </p>
              <small>Address: Rangamati Sadar </small>
              <br></br>
              <small>Call to: 0178 8376 689</small>
              <br></br>
              <small>Mail to: sabangee@gmail.com </small>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="m-2">
              <h4>Pages</h4>
              <Link to="/all-products">
                <small>Shop Now</small>
              </Link>
              <br></br>
              <Link to="/store">
                <small>Store</small>
              </Link>
              <br></br>
              <Link to="/contact">
                <small>Contact</small>
              </Link>
              <h5 className="mt-3">
                <h4 className="fw-bold">Moto</h4>
                <i>
                  "We serve Organic food or authentic products or Hill
                  traditional" item."
                </i>
              </h5>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="m-2">
              <h4>Newsletter</h4>
              <p>
                Get E-mail updates about our latest shop and special offers.
              </p>
              <input
                placeholder="Enter Your Mail"
                className="form-control mt-2"
              />
              <button className="btn btn-danger text-white mt-3">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
