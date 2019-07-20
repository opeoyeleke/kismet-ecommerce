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
            <div className="single-product-section section pt-100 pt-lg-80 pt-md-70 pt-sm-60 pt-xs-50 pb-100 pb-lg-80 pb-md-70 pb-sm-30 pb-xs-20">
              <div className="container">
                <div className="row">
                  <div className="col-md-5">
                    {/* Product Details Left */}
                    <div className="product-details-left">
                      <div
                        className="product-details-images slider-lg-image-1 tf-element-carousel"
                        data-slick-options='{
                          "slidesToShow": 1,
                          "slidesToScroll": 1,
                          "infinite": true,
                          "asNavFor": ".slider-thumbs-1",
                          "arrows": false,
                          "prevArrow": {"buttonClass": "slick-btn slick-prev", "iconClass": "fa fa-angle-left" },
                          "nextArrow": {"buttonClass": "slick-btn slick-next", "iconClass": "fa fa-angle-right" }
                          }'
                      >
                        <div className="lg-image">{<img src={img} alt />}</div>
                      </div>
                      <div
                        className="product-details-thumbs slider-thumbs-1 tf-element-carousel"
                        data-slick-options='{
                          "slidesToShow": 4,
                          "slidesToScroll": 1,
                          "infinite": true,
                          "focusOnSelect": true,
                          "asNavFor": ".slider-lg-image-1",
                          "arrows": false,
                          "prevArrow": {"buttonClass": "slick-btn slick-prev", "iconClass": "fa fa-angle-left" },
                          "nextArrow": {"buttonClass": "slick-btn slick-next", "iconClass": "fa fa-angle-right" }
                          }'
                        data-slick-responsive='[
                          {"breakpoint":991, "settings": {
                              "slidesToShow": 3
                          }},
                          {"breakpoint":767, "settings": {
                              "slidesToShow": 4
                          }},
                          {"breakpoint":479, "settings": {
                              "slidesToShow": 2
                          }}
                      ]'
                      />
                    </div>
                    {/*Product Details Left */}
                  </div>
                  <div className="col-md-7">
                    {/*Product Details Content Start*/}
                    <div className="product-details-content">
                      {/*Product Nav Start*/}
                      <div className="product-nav">
                        <a href="#">
                          <i className="fa fa-angle-left" />
                        </a>
                        <a href="#">
                          <i className="fa fa-angle-right" />
                        </a>
                      </div>
                      {/*Product Nav End*/}
                      <h2>{title}</h2>
                      <div className="single-product-reviews">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-o" />
                      </div>
                      <div className="single-product-price">
                        <span className="price new-price">
                          <span>N</span>
                          {price}
                        </span>
                      </div>
                      <div className="product-description">
                        <p>{info}</p>
                      </div>
                      <div
                        className="single-product-quantity"
                        style={{
                          textAlign: "center"
                        }}
                      >
                        <Link to="/products">
                          <Button
                            primary={true}
                            style={{
                              background: "#CEA679",
                              color: "#ffffff",
                              borderColor: "#CEA679",
                              marginBottom: "10px"
                            }}
                            label="Back to Products"
                          />
                        </Link>

                        <Button
                          primary={false}
                          style={{
                            background: "#CEA679",
                            color: "#ffffff",
                            borderColor: "#CEA679"
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
                    {/*Product Details Content End*/}
                  </div>
                  <div className="product-description-review-section section">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="product-review-tab">
                            {/*Review And Description Tab Menu Start*/}
                            <ul className="nav dec-and-review-menu">
                              <li>
                                <a
                                  className="active"
                                  data-toggle="tab"
                                  href="#description"
                                >
                                  Description
                                </a>
                              </li>
                              <li>
                                <a data-toggle="tab" href="#reviews">
                                  Reviews (1)
                                </a>
                              </li>
                            </ul>
                            {/*Review And Description Tab Menu End*/}
                            {/*Review And Description Tab Content Start*/}
                            <div
                              className="tab-content product-review-content-tab"
                              id="myTabContent-4"
                            >
                              <div
                                className="tab-pane fade active show"
                                id="description"
                              >
                                <div className="single-product-description">
                                  {info}
                                </div>
                              </div>
                              <div className="tab-pane fade" id="reviews">
                                <div className="review-page-comment">
                                  <h2> review for Sit voluptatem</h2>
                                  <ul>
                                    <li>
                                      <div className="product-comment">
                                        <img
                                          src="assets/images/icons/author.png"
                                          alt
                                        />
                                        <div className="product-comment-content">
                                          <div className="product-reviews">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star-o" />
                                          </div>
                                          <p className="meta">
                                            <strong>anonymous</strong> -{" "}
                                            <span>May 22, 2019</span>
                                          </p>
                                          <div className="description">
                                            <p>Good Product</p>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                  <div className="review-form-wrapper">
                                    <div className="review-form">
                                      <span className="comment-reply-title">
                                        Add a review{" "}
                                      </span>
                                      <form action="#">
                                        <p className="comment-notes">
                                          <span id="email-notes">
                                            Your email address will not be
                                            published.
                                          </span>
                                          Required fields are marked
                                          <span className="required">*</span>
                                        </p>
                                        <div className="comment-form-rating">
                                          <label>Your rating</label>
                                          <div className="rating">
                                            <i className="fa fa-star-o" />
                                            <i className="fa fa-star-o" />
                                            <i className="fa fa-star-o" />
                                            <i className="fa fa-star-o" />
                                            <i className="fa fa-star-o" />
                                          </div>
                                        </div>
                                        <div className="input-element">
                                          <div className="comment-form-comment">
                                            <label>Comment</label>
                                            <textarea
                                              name="message"
                                              cols={40}
                                              rows={8}
                                              defaultValue={""}
                                            />
                                          </div>
                                          <div className="review-comment-form-author">
                                            <label>Name </label>
                                            <input
                                              required="required"
                                              type="text"
                                            />
                                          </div>
                                          <div className="review-comment-form-email">
                                            <label>Email </label>
                                            <input
                                              required="required"
                                              type="text"
                                            />
                                          </div>
                                          <div className="comment-submit">
                                            <button
                                              type="submit"
                                              className="form-button"
                                            >
                                              Submit
                                            </button>
                                          </div>
                                        </div>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/*Review And Description Tab Content End*/}
                          </div>
                        </div>
                      </div>
                    </div>
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
