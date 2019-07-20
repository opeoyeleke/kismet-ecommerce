import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse
} from "mdbreact";
import { Button } from "@bit/grommet.grommet.button";

import { Link } from "react-router-dom";
import shop from "../shop.svg";

class NavbarPage extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <header className="header header-transparent header-sticky">
        <div className="header-bottom menu-right bg-dark">
          <div className="container-fluid pl-75 pr-75 pl-lg-15 pr-lg-15 pl-md-15 pr-md-15 pl-sm-15 pr-sm-15 pl-xs-15 pr-xs-15">
            <div className="row align-items-center">
              {/*Logo start*/}
              <div className="col-lg-3 col-md-3 col-6 order-lg-1 order-md-1 order-1">
                <div className="logo">
                  <Link to="/">
                    <img src="assets/images/logo-white.png" alt="true" />
                  </Link>
                </div>
              </div>
              {/*Logo end*/}
              {/*Menu start*/}
              <div className="col-lg-6 col-md-6 col-12 order-lg-2 order-md-2 order-3 d-flex justify-content-center">
                <nav className="main-menu color-white">
                  <ul>
                    <li>
                      <Link to="/">Home </Link>
                    </li>
                    <li>
                      <Link to="/products">Shop </Link>
                    </li>

                    <li>
                      <Link to="/about">About </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              {/*Menu end*/}
              {/*Search Cart Start*/}
              <div className="col-lg-3 col-md-3 col-6 order-lg-3 order-md-3 order-2 d-flex justify-content-end">
                <div className="header-cart color-white">
                  <Link to="/cart">
                    <i className="fa fa-shopping-cart" />
                  </Link>

                  {/*Mini Cart Dropdown Start*/}

                  {/*Mini Cart Dropdown End*/}
                </div>
              </div>
              {/*Search Cart End*/}
            </div>
            {/*Mobile Menu start*/}
            <div className="row">
              <div className="col-12 d-flex d-lg-none d-block">
                <div className="mobile-menu" />
              </div>
            </div>
            {/*Mobile Menu end*/}
          </div>
        </div>
      </header>
    );
  }
}

export default NavbarPage;
