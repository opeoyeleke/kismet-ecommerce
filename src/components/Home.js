import React, { Component } from "react";
import { Link } from "react-router-dom";
import Product from "./Product";
import { ProductConsumer } from "../context";

export default class Home extends Component {
  render() {
    return (
      <div id="main-wrapper">
        {/*Header section start*/}

        {/*Header section end*/}
        {/*slider section start*/}
        <div className="hero-section section position-relative">
          <div
            className="tf-element-carousel slider-nav"
            data-slick-options='{
            "slidesToShow": 1,
            "slidesToScroll": 1,
            "infinite": true,
            "arrows": true,
            "dots": true
            }'
            data-slick-responsive='[
            {"breakpoint":768, "settings": {
            "slidesToShow": 1
            }},
            {"breakpoint":575, "settings": {
            "slidesToShow": 1,
            "arrows": false,
            "autoplay": true
            }}
            ]'
          >
            {/*Hero Item start*/}
            <div className="hero-item bg-image bg-image-header">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    {/*Hero Content start*/}
                    <div className="hero-content-2 color-1 center">
                      <h2>kismet organics</h2>
                      <h1>lueur international</h1>
                      <h3>Check out our products</h3>
                      <Link to="/products">Shop Now</Link>
                    </div>
                    {/*Hero Content end*/}
                  </div>
                </div>
              </div>
            </div>
            {/*Hero Item end*/}
          </div>
        </div>
        {/*slider section end*/}
        {/*Product section start*/}
        <div className="product-section section pt-100 pt-lg-80 pt-md-70 pt-sm-50 pt-xs-40 pb-70 pb-lg-50 pb-md-40 pb-sm-30 pb-xs-20">
          <div className="container-fluid pl-75 pr-75 pl-lg-15 pr-lg-15 pl-md-15 pr-md-15 pl-sm-15 pr-sm-15 pl-xs-15 pr-xs-15 text-center">
            <div className="row">
              <div className="col-lg-3 col-xl-2">
                {/* Section Title Start */}
                <div className="section-title-two mb-40 mb-xs-20">
                  <span>our</span>
                  <h2>Featured</h2>
                  <span>proucts</span>
                </div>
                {/* Section Title End */}
              </div>
              <div className="col-xl-10 col-lg-9 ">
                <React.Fragment>
                  <div className="py-3">
                    <div className="container">
                      <div className="row">
                        <ProductConsumer>
                          {value => {
                            return value.products.slice(0, 3).map(product => {
                              return (
                                <Product key={product.id} product={product} />
                              );
                            });
                          }}
                        </ProductConsumer>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              </div>
            </div>
          </div>
        </div>
        {/*Product section end*/}

        {/* Banner Section Start */}
        <div className="banner-section section bg-image bg-image-down pt-95 pt-lg-75 pt-md-65 pt-sm-55 pt-xs-45 pb-95 pb-lg-75 pb-md-65 pb-sm-55 pb-xs-45">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="banner-content">
                  <h2>A Single Step Skin Perfector!</h2>
                  <h1>With Kismetlueur</h1>
                  <h3>organic products</h3>
                  <Link to="/products">Shop Collection Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Banner Section End */}

        {/*Blog section start*/}
        <div className="blog-section section bg-gray pt-100 pt-lg-80 pt-md-70 pt-sm-60 pt-xs-50 pb-75 pb-lg-55 pb-md-45 pb-sm-35 pb-xs-30">
          <div className="container">
            <div className="row">
              {/* Section Title Start */}
              <div className="col">
                <div className="section-title mb-40 mb-xs-20">
                  <h2>From the blog</h2>
                </div>
              </div>
              {/* Section Title End */}
            </div>
            <div
              className="row tf-element-carousel"
              data-slick-options='{
                        "slidesToShow": 3,
                        "slidesToScroll": 1,
                        "infinite": true,
                        "arrows": true,
                        "prevArrow": {"buttonClass": "slick-btn slick-prev", "iconClass": "fa fa-angle-left" },
                        "nextArrow": {"buttonClass": "slick-btn slick-next", "iconClass": "fa fa-angle-right" }
                        }'
              data-slick-responsive='[
                        {"breakpoint":1199, "settings": {
                        "slidesToShow": 3
                        }},
                        {"breakpoint":992, "settings": {
                        "slidesToShow": 2
                        }},
                        {"breakpoint":768, "settings": {
                        "slidesToShow": 2,
                        "arrows": false,
                        "autoplay": true
                        }},
                        {"breakpoint":575, "settings": {
                        "slidesToShow": 1,
                        "arrows": false,
                        "autoplay": true
                        }}
                        ]'
            >
              {/* Single Blog Start */}
              <div className="blog col">
                <div className="blog-inner">
                  <div className="media">
                    <span className="image">
                      <img src="assets/images/blog/blog1.png" alt />
                    </span>
                  </div>
                  <div className="content">
                    <h3 className="title">Cool boy with tattoo</h3>
                    <ul className="meta">
                      <li>
                        <i className="fa fa-calendar" />
                        <span className="date-time">
                          <span className="date">20</span>
                          <span className="separator">-</span>
                          <span className="month">Jul</span>
                        </span>
                      </li>
                    </ul>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat{" "}
                    </p>
                  </div>
                </div>
              </div>
              {/* Single Blog End */}
              {/* Single Blog Start */}
              <div className="blog col">
                <div className="blog-inner">
                  <div className="media">
                    <span className="image">
                      <img src="assets/images/blog/blog2.png" alt />
                    </span>
                  </div>
                  <div className="content">
                    <h3 className="title">Blog image post</h3>
                    <ul className="meta">
                      <li>
                        <i className="fa fa-calendar" />
                        <span className="date-time">
                          <span className="date">20</span>
                          <span className="separator">-</span>
                          <span className="month">Jul</span>
                        </span>
                      </li>
                    </ul>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat{" "}
                    </p>
                  </div>
                </div>
              </div>
              {/* Single Blog End */}
              {/* Single Blog Start */}
              <div className="blog col">
                <div className="blog-inner">
                  <div className="media">
                    <span className="image">
                      <img src="assets/images/blog/blog3.png" alt />
                    </span>
                  </div>
                  <div className="content">
                    <h3 className="title">Blog image post </h3>
                    <ul className="meta">
                      <li>
                        <i className="fa fa-calendar" />
                        <span className="date-time">
                          <span className="date">20</span>
                          <span className="separator">-</span>
                          <span className="month">Jul</span>
                        </span>
                      </li>
                    </ul>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat{" "}
                    </p>
                  </div>
                </div>
              </div>
              {/* Single Blog End */}
              {/* Single Blog Start */}
              <div className="blog col">
                <div className="blog-inner">
                  <div className="media">
                    <span className="image">
                      <img src="assets/images/blog/blog1.png" alt />
                    </span>
                  </div>
                  <div className="content">
                    <h3 className="title">Blog image post </h3>
                    <ul className="meta">
                      <li>
                        <i className="fa fa-calendar" />
                        <span className="date-time">
                          <span className="date">20</span>
                          <span className="separator">-</span>
                          <span className="month">Jul</span>
                        </span>
                      </li>
                    </ul>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat{" "}
                    </p>
                  </div>
                </div>
              </div>
              {/* Single Blog End */}
            </div>
          </div>
        </div>
        {/*Blog section end*/}

        {/*Footer section start*/}

        {/*Footer section end*/}
        {/* Modal Area Strat */}
        <div
          className="modal fade quick-view-modal-container"
          id="quick-view-modal-container"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="col-xl-12 col-lg-12">
                  <div className="row">
                    <div className="col-xl-5 col-lg-6 col-md-6 mb-xxs-25 mb-xs-25 mb-sm-25">
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
                          <div className="lg-image">
                            <img
                              src="assets/images/product/large-product/l-product-1.jpg"
                              alt
                            />
                          </div>
                          <div className="lg-image">
                            <img
                              src="assets/images/product/large-product/l-product-2.jpg"
                              alt
                            />
                          </div>
                          <div className="lg-image">
                            <img
                              src="assets/images/product/large-product/l-product-3.jpg"
                              alt
                            />
                          </div>
                          <div className="lg-image">
                            <img
                              src="assets/images/product/large-product/l-product-4.jpg"
                              alt
                            />
                          </div>
                          <div className="lg-image">
                            <img
                              src="assets/images/product/large-product/l-product-5.jpg"
                              alt
                            />
                          </div>
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
                        >
                          <div className="sm-image">
                            <img
                              src="assets/images/product/small-product/s-product-1.jpg"
                              alt="product image thumb"
                            />
                          </div>
                          <div className="sm-image">
                            <img
                              src="assets/images/product/small-product/s-product-2.jpg"
                              alt="product image thumb"
                            />
                          </div>
                          <div className="sm-image">
                            <img
                              src="assets/images/product/small-product/s-product-3.jpg"
                              alt="product image thumb"
                            />
                          </div>
                          <div className="sm-image">
                            <img
                              src="assets/images/product/small-product/s-product-4.jpg"
                              alt="product image thumb"
                            />
                          </div>
                          <div className="sm-image">
                            <img
                              src="assets/images/product/small-product/s-product-5.jpg"
                              alt="product image thumb"
                            />
                          </div>
                        </div>
                      </div>
                      {/*Product Details Left */}
                    </div>
                    <div className="col-xl-7 col-lg-6 col-md-6">
                      {/* product detail content */}
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
                        <h2>White Shave Brux</h2>
                        <div className="single-product-reviews">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o" />
                          <a className="review-link" href="#">
                            (1 customer review)
                          </a>
                        </div>
                        <div className="single-product-price">
                          <span className="price new-price">$66.00</span>
                          <span className="regular-price">$77.00</span>
                        </div>
                        <div className="product-description">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco,Proin lectus ipsum,
                            gravida et mattis vulputate, tristique ut lectus
                          </p>
                        </div>
                        <div className="single-product-quantity">
                          <form className="add-quantity" action="#">
                            <div className="product-quantity">
                              <input defaultValue={1} type="number" />
                            </div>
                            <div className="add-to-link">
                              <button
                                className="product-add-btn"
                                data-text="add to cart"
                              >
                                add to cart
                              </button>
                            </div>
                          </form>
                        </div>
                        <div className="wishlist-compare-btn">
                          <a
                            href="#"
                            className="wishlist-btn mb-md-10 mb-sm-10"
                          >
                            Add to Wishlist
                          </a>
                          <a href="#" className="add-compare">
                            Compare
                          </a>
                        </div>
                        <div className="product-meta">
                          <span className="posted-in">
                            Categories:
                            <a href="#">Accessories</a>,
                            <a href="#">Electronics</a>
                          </span>
                        </div>
                        <div className="single-product-sharing">
                          <h3>Share this product</h3>
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fa fa-twitter" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-facebook" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-google-plus" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-pinterest" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-instagram" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-vimeo" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/*Product Details Content End*/}
                      {/* End of product detail content */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Modal Area End */}
      </div>
    );
  }
}
