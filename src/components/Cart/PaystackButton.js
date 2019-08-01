import React, { Component } from "react";
//import the library
import PaystackButton from "react-paystack";

class App extends Component {
  state = {
    key: process.env.REACT_APP_APP_ID
  };

  callback = response => {
    console.log(response); // card charged successfully, get reference here
    this.props.clearCart();
    this.props.history.push("/");
  };

  close = () => {
    console.log("Payment closed");
  };

  getReference = () => {
    //you can put any unique reference implementation code here
    let text = "";
    let possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";

    for (let i = 0; i < 15; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  };

  render() {
    return (
      <div>
        <p>
          <PaystackButton
            text="Make Payment"
            class="payButton"
            callback={this.callback}
            close={this.close}
            disabled={true}
            embed={true}
            reference={this.getReference()}
            email={this.props.email}
            amount={this.props.total}
            paystackkey={this.state.key}
            tag="button"
            firstname={this.props.name}
          />
        </p>
      </div>
    );
  }
}

export default App;
