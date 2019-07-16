import React, { Component } from "react";
//import the library
import PaystackButton from "react-paystack";

class App extends Component {
  state = {
    key: "pk_test_59322c83eb3fec7011ea5d93da1590eb017f4927", //PAYSTACK PUBLIC KEY
    email: "topfemo@gmail.com", // customer email
    amount: 10000 //equals NGN100,
  };

  callback = response => {
    console.log(response); // card charged successfully, get reference here
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
            email={this.state.email}
            amount={this.state.amount}
            paystackkey={this.state.key}
            tag="button"
          />
        </p>
      </div>
    );
  }
}

export default App;
