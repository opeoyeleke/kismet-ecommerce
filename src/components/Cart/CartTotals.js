import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@bit/grommet.grommet.button";
import PaystackButton from "./PaystackButton";

export default function CartTotals({ value, history }) {
  const { cartSubTotal, cartTotal, clearCart } = value;
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <Link to="/">
              <Button
                primary={false}
                style={{
                  borderColor: "red",
                  fontSize: "16px"
                }}
                label="Clear Cart"
                onClick={() => {
                  clearCart();
                }}
              >
                {}
              </Button>
            </Link>

            <h5>
              <span className="text-title">subtotal :</span>
              <strong>N{cartSubTotal}</strong>
            </h5>
            <h5>
              <span className="text-title">total :</span>
              <strong>N{cartTotal}</strong>
            </h5>
            <PaystackButton
              total={cartTotal}
              clearCart={clearCart}
              history={history}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
