import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBIcon
} from "mdbreact";

import { Link } from "react-router-dom";
import logo from "../logo.png";

class NavbarPage extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <MDBNavbar
        style={{ color: "black", fontWeight: "" }}
        color="default-color"
        expand="md"
      >
        <MDBNavbarBrand>
          <strong
            className="white-text"
            style={{ color: "#D6A701", fontFamily: "Hack" }}
          >
            KISMET
          </strong>
        </MDBNavbarBrand>
        {/* <Link to="/">
          <img
            src={logo}
            alt="store"
            style={{ paddingLeft: 20, paddingRight: 20, height: 20 }}
          />
        </Link> */}
        <MDBNavbarToggler
          className="navbar-light"
          onClick={this.toggleCollapse}
        />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem>
              <MDBNavLink style={{ color: "black" }} to="/">
                Home
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink style={{ color: "black" }} to="/products">
                Products
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink style={{ color: "black" }} to="#!">
                Pricing
              </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav style={{ color: "black" }} right>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-dark" to="#!">
                <MDBIcon style={{ color: "black" }} icon="search" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon style={{ color: "black" }} icon="shopping-cart" />
              </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default NavbarPage;
