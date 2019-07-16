import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter
      style={{ background: "white" }}
      color="green"
      className="font-small pt-4 mt-4"
    >
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">KISMET INTERNATIONAL</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </MDBCol>
          <MDBCol md="6">
            {/* <h5 className="title">Quick Links</h5> */}
            <ul>
              <li className="list-unstyled">
                <a href="/cart">My Cart</a>
              </li>
              <li className="list-unstyled">
                <a href="/products">Products</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.kismetinternational.com">
            {" "}
            KISMET INTERNATIONAL{" "}
          </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
