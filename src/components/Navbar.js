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
        style={{
          color: "black",
          fontWeight: "",
          background: "#ffffff"
        }}
        color="default-color"
        expand="md"
      >
        <Link to="/">
          <MDBNavbarBrand>
            <strong
              className="white-text"
              style={{ color: "#D6A701", fontFamily: "Hack" }}
            >
              KISMET
            </strong>
          </MDBNavbarBrand>
        </Link>

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
          <MDBNavbarNav left />
          <MDBNavbarNav style={{ color: "black" }} right>
            <MDBNavItem>
              <MDBNavLink
                style={{ color: "black", textAlign: "center" }}
                to="/"
              >
                Home
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                style={{ color: "black", textAlign: "center" }}
                to="/products"
              >
                Products
              </MDBNavLink>
            </MDBNavItem>

            <Link to="/cart" style={{ textAlign: "center" }}>
              <Button
                primary={false}
                style={{
                  borderColor: "#D6A701"
                }}
                label="My Cart"
              />
            </Link>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default NavbarPage;
