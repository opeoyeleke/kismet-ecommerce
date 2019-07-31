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
                      <h1>kismet organics</h1>
                      <h1>lueur </h1>
                      <h2>
                        cruelty-free, skin glow guaranteed, affordable and
                        effective
                      </h2>
                      <h3>skincare products</h3>
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

        <div className="categorie-product-section section">
          <div className="container-fluid pl-0 pr-0">
            <div className="row no-gutters">
              <div className="col-lg-4 col-md-4">
                {/* Single Categorie Product Start */}
                <div className="single-categorie">
                  <div className="categorie-image">
                    <img src="assets/images/categorie/cate-1.png" alt="" />
                  </div>
                  <div className="categorie-content">
                    <h1>Cruelty Free</h1>
                  </div>
                </div>
                {/* Single Categorie Product End */}
              </div>
              <div className="col-lg-4 col-md-4">
                {/* Single Categorie Product Start */}
                <div className="single-categorie">
                  <div className="categorie-image">
                    <img src="assets/images/categorie/cate-2.png" alt="" />
                  </div>
                  <div className="categorie-content">
                    <h1>Skin Glow Guaranteed</h1>
                  </div>
                </div>
                {/* Single Categorie Product End */}
              </div>
              <div className="col-lg-4 col-md-4">
                {/* Single Categorie Product Start */}
                <div className="single-categorie">
                  <div className="categorie-image">
                    <img src="assets/images/categorie/cate-3.png" alt="" />
                  </div>
                  <div className="categorie-content">
                    <h1>Affordable and Effective</h1>
                  </div>
                </div>
                {/* Single Categorie Product End */}
              </div>
            </div>
          </div>
        </div>

        {/*Product section start*/}
        <div className="product-section section pt-100 pt-lg-80 pt-md-70 pt-sm-50 pt-xs-40 pb-70 pb-lg-50 pb-md-40 pb-sm-30 pb-xs-20">
          <div className="container-fluid pl-75 pr-75 pl-lg-15 pr-lg-15 pl-md-15 pr-md-15 pl-sm-15 pr-sm-15 pl-xs-15 pr-xs-15 text-center">
            <div className="row">
              <div className="col-lg-3 col-xl-2">
                {/* Section Title Start */}
                <div className="section-title-two mb-40 mb-xs-20">
                  <span>our</span>
                  <h2>Featured</h2>
                  <span>products</span>
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
                  <h2>Check Out</h2>
                  <h1> kismet Couture</h1>
                  <h3>BESPOKE COLLECTION</h3>
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
                <div className="section-title mb-40 mb-xs-20" />
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
              <div className="blog col-6">
                <div className="blog-inner">
                  <span className="sticker">Bertha (N3000)</span>

                  <div className="media single-product">
                    <span className="image">
                      <img src="assets/images/blog/blog1.png" alt />
                    </span>
                  </div>
                  <div className="content" />
                </div>
              </div>
              {/* Single Blog End */}
              {/* Single Blog Start */}
              <div className="blog col-6">
                <div className="blog-inner">
                  <span className="sticker">Kismet (N3000)</span>

                  <div className="media">
                    <span className="image">
                      <img src="assets/images/blog/blog2.png" alt />
                    </span>
                  </div>
                  <div className="content" />
                </div>
              </div>
              {/* Single Blog End */}
              {/* Single Blog Start */}
              <div className="blog col col-6">
                <div className="blog-inner">
                  <span className="sticker">Bella (N3000)</span>

                  <div className="media">
                    <span className="image">
                      <img src="assets/images/blog/blog3.png" alt />
                    </span>
                  </div>
                  <div className="content">
                    <p />
                  </div>
                </div>
              </div>
              {/* Single Blog End */}
              {/* Single Blog Start */}
              <div className="blog col-6">
                <div className="blog-inner">
                  <span className="sticker text-center">Nini (N3000) </span>

                  <div className="media">
                    <span className="image">
                      <img src="assets/images/blog/blog4.png" alt />
                    </span>
                  </div>
                  <div className="content">
                    <p> </p>
                  </div>
                </div>
              </div>
              {/* Single Blog End */}
              {/* Single Blog Start */}
              <div className="blog col-6">
                <div className="blog-inner">
                  <span className="sticker text-center">Sharon (N3000)</span>

                  <div className="media">
                    <span className="image">
                      <img src="assets/images/blog/blog5.png" alt />
                    </span>
                  </div>
                  <div className="content">
                    <p> </p>
                  </div>
                </div>
              </div>
              {/* Single Blog End */}
              {/* Single Blog Start */}
              <div className="blog col-6">
                <div className="blog-inner">
                  <span className="sticker text-center">Sharon (N3000)</span>

                  <div className="media">
                    <span className="image">
                      <img src="assets/images/blog/blog6.png" alt />
                    </span>
                  </div>
                  <div className="content">
                    <p> </p>
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
