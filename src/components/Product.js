import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import propTypes from "prop-types";
import { Button } from "@bit/grommet.grommet.button";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <ProductConsumer>
            {value => (
              <div
                className="img-container p-5"
                onClick={() => value.handleDetail(id)}
              >
                <Link to="/details">
                  <img src={img} alt="product" className="card-img-top" />
                </Link>
              </div>
            )}
          </ProductConsumer>
          <ProductConsumer>
            {value => (
              <div
                className="card-footer justify-content-between"
                style={{ textAlign: "center", borderTop: "0px" }}
              >
                <p className="align-self-center mb-0">{title}</p>
                <h5
                  className="mb-0"
                  style={{ color: "#D6A701", fontSize: "90%" }}
                >
                  <span className="mr-1">N</span>
                  {price}
                </h5>
                <Button
                  primary={false}
                  style={{
                    borderColor: "#D6A701",
                    fontSize: "16px"
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
            )}
          </ProductConsumer>
        </div>
      </ProductWrapper>
    );
  }
}

Product.propTypes = {
  product: propTypes.shape({
    id: propTypes.number,
    im: propTypes.string,
    title: propTypes.string,
    price: propTypes.number,
    inCart: propTypes.bool
  }).isRequired
};

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
  }
  .card-footer {
    background: transparent;
    transition: all 1s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba (0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba (0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
      border-top: 0;
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 0.5s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
`;
