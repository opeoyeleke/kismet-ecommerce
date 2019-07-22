import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@bit/grommet.grommet.button";
import PaystackButton from "./PaystackButton";

export default function CartTotals({ value, history }) {
  const {
    cartSubTotal,
    cartTotal,
    key,
    email,
    clearCart,
    shippingFee,
    handleSubmit,
    handleChangeName,
    handleChangeAddress,
    handleChangePhone,
    handleChangeEmail,
    name,
    address,
    phone
  } = value;

  return (
    <React.Fragment>
      <div className="container" style={{ textAlign: "center" }}>
        <div className="row" style={{ textAlign: "center" }}>
          <div className="col-12 mt-2  text-capitalize text-center">
            <div className="cart-section section pt-100 pt-lg-80 pt-md-70 pt-sm-60 pt-xs-50  pb-70 pb-lg-50 pb-md-40 pb-sm-30 pb-xs-20">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="row">
                      <div className="col-lg-6 col-12 mb-5">
                        {/* Client Details */}
                        <div className="calculate-shipping">
                          <h4>Enter Details</h4>
                          <form onSubmit={handleSubmit}>
                            <div className="row">
                              <div className="col-md-6 col-12 mb-25">
                                <input
                                  type="text"
                                  placeholder="Name"
                                  name="name"
                                  name={name}
                                  onChange={handleChangeName}
                                />
                              </div>
                              <div className="col-md-6 col-12 mb-25">
                                <input
                                  type="text"
                                  placeholder="Email"
                                  name="email"
                                  email={email}
                                  onChange={handleChangeEmail}
                                />
                              </div>
                              <div className="col-md-6 col-12 mb-25">
                                <input
                                  type="text"
                                  placeholder="Address"
                                  name="address"
                                  address={address}
                                  onChange={handleChangeAddress}
                                />
                              </div>
                              <div className="col-md-6 col-12 mb-25">
                                <input
                                  type="text"
                                  placeholder="Phone Number"
                                  name="phone"
                                  phone={phone}
                                  onChange={handleChangePhone}
                                />
                              </div>
                              <div className="col-md-6 col-12 mb-25">
                                <Button
                                  primary={false}
                                  style={{
                                    background: "#CEA679",
                                    color: "#ffffff",
                                    borderColor: "#CEA679",
                                    marginBottom: "10px"
                                  }}
                                  label="Submit"
                                  type="Submit"
                                >
                                  {}
                                </Button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      {/* Cart Summary */}
                      <div className="col-lg-6 col-12 mb-30 d-flex">
                        <div className="cart-summary">
                          <div className="cart-summary-wrap">
                            <h4>Cart Summary</h4>
                            <p>
                              Sub Total <span>N{cartSubTotal}</span>
                            </p>
                            <p>
                              Shipping Cost <span>N{shippingFee}</span>
                            </p>
                            <h2>
                              Total <span>N{cartTotal}</span>
                            </h2>
                          </div>
                          <div>
                            <Link to="/">
                              <Button
                                primary={false}
                                style={{
                                  background: "#CEA679",
                                  color: "#ffffff",
                                  borderColor: "#CEA679",
                                  marginBottom: "10px"
                                }}
                                label="Clear Cart"
                                onClick={() => {
                                  clearCart();
                                }}
                              >
                                {}
                              </Button>
                            </Link>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h5>Enter Card Details</h5>

            <PaystackButton
              total={cartTotal * 100}
              clearCart={clearCart}
              history={history}
              paystackkey={key}
              email={email}
              style={{ textAlign: "center" }}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
