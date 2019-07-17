import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@bit/grommet.grommet.button";
import PaystackButton from "./PaystackButton";
import Input from "@bit/ans.base-ui.input";

export default function CartTotals({ value, history }) {
  const { cartSubTotal, cartTotal, clearCart } = value;

  return (
    <React.Fragment>
      <div className="container" style={{ textAlign: "center" }}>
        <div className="row" style={{ textAlign: "center" }}>
          <div className="col-12 mt-2  text-capitalize text-center">
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
            <h5 style={{ textAlign: "center" }}>
              <span className="text-title">total :</span>
              <strong>N{cartTotal}</strong>
            </h5>

            <PaystackButton
              total={cartTotal * 100}
              clearCart={clearCart}
              history={history}
              style={{ textAlign: "center" }}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
