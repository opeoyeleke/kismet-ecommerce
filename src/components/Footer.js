import React from "react";
import { Link } from "react-router-dom";

const FooterPage = () => {
  return (
    <footer className="footer-section section bg-dark">
      {/*Footer Top start*/}
      <div className="footer-top section pt-100 pt-lg-80 pt-md-70 pt-sm-60 pt-xs-50 pb-45 pb-lg-25 pb-md-15 pb-sm-5 pb-xs-0">
        <div className="container">
          <div className="row row-25">
            {/*Footer Widget start*/}
            <div className="footer-widget col-lg-3 col-md-6 col-sm-6 col-12 mb-40 mb-xs-35">
              <h4 className="title">
                <span className="text">About KISMET</span>
              </h4>
              <p>
                Kismet international is a sophisticated brand that creates and
                gives happiness through our skincare and fashion line without
                any form of elitist.
              </p>
            </div>
            {/*Footer Widget end*/}
            {/*Footer Widget start*/}
            <div className="footer-widget col-lg-3 col-md-6 col-sm-6 col-12 mb-40 mb-xs-35">
              <h4 className="title">
                <span className="text">Information</span>
              </h4>
              <ul className="ft-menu">
                <li>
                  <a href="#">Returns</a>
                </li>
                <li>
                  <a href="#">Delivery</a>
                </li>
                <li>
                  <a href="#">Service</a>
                </li>
              </ul>
            </div>
            {/*Footer Widget end*/}
            {/*Footer Widget start*/}
            <div className="footer-widget col-lg-3 col-md-6 col-sm-6 col-12 mb-40 mb-xs-35">
              <h4 className="title">
                <span className="text">Our Products</span>
              </h4>
              <ul className="ft-menu">
                <li>
                  <Link to="/products">Lueur Body Milk</Link>
                </li>
                <li>
                  <Link to="/products">Face & Body Scrub</Link>
                </li>
                <li>
                  <Link to="/products">Hydrating Face Cream</Link>
                </li>
                <li>
                  <Link to="/products">Face Mask (Powder)</Link>
                </li>
                <li>
                  <Link to="/products">Anti-aging Serum</Link>
                </li>
                <li>
                  <Link to="/products">Lueur Oil</Link>
                </li>
              </ul>
            </div>
            {/*Footer Widget end*/}
            {/*Footer Widget start*/}
            <div className="footer-widget col-lg-3 col-md-6 col-sm-6 col-12 mb-40 mb-xs-35">
              <h4 className="title">
                <span className="text">Contact us</span>
              </h4>
              <ul className="address">
                <li>
                  <i className="fab fa-instagram" />
                  <span>kismetlueur</span>
                </li>
                <li>
                  <i className="fa fa-phone" />
                  <span>0902 343 1431, 0817 911 9011</span>
                </li>
                <li>
                  <i className="fa fa-envelope-o" />
                  <span>kismetlueur@gmail.com</span>
                </li>
              </ul>
            </div>
            {/*Footer Widget end*/}
          </div>
        </div>
      </div>
      {/*Footer Top end*/}
      {/*Footer bottom start*/}
      <div className="footer-bottom section">
        <div className="container ft-border pt-40 pb-40 pt-xs-20 pb-xs-20">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-8">
              <div className="copyright text-left">
                <p>
                  Copyright ©2019. KISMET International, All rights reserved.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-4">
              <div className="footer-logo text-right">
                <a href="index.html">
                  <img src="assets/images/logofoo.png" alt="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Footer bottom end*/}
    </footer>
  );
};

export default FooterPage;
