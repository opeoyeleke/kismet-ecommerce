import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { Button } from "@bit/grommet.grommet.button";
import { __values } from "tslib";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { id, img, info, price, title, inCart } = value.detailProduct;
          return (
            <div className="container py-5">
              {/* title */}
              <div className="row">
                <div className="col-10 mx-auto text-center my-5">
                  <h2 style={{ color: "#D6A701" }}>{title}</h2>
                </div>
              </div>
              {/* end title */}
              {/* product info */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} className="img-fluid" alt="product" />
                </div>
                <div className="col-10 mx-auto col-md-6 my-3">
                  <p>Name: {title}</p>
                  <p>
                    Price: <span>N</span>
                    {price}
                  </p>
                  <p className="text-capitalize mt-3 mb-0">
                    some info about product:
                  </p>
                  <p className="text-muted">{info}</p>
                  <div
                    style={{
                      textAlign: "center"
                    }}
                  >
                    <Link to="/products">
                      <Button
                        primary={false}
                        style={{
                          borderColor: "#D6A701"
                        }}
                        label="Back to Products"
                      />
                    </Link>

                    <Button
                      primary={false}
                      style={{
                        borderColor: "#D6A701"
                      }}
                      label="Add to Cart"
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                      }}
                    >
                      {}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
