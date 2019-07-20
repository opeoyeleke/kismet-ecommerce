import React from "react";
import { Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import "./bootstrap.min.css";
import "./helper.css";
import "./plugins.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";
import MyNavbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Home from "./components/Home";
import Footer from "./components/Footer";
function App() {
  return (
    <React.Fragment>
      <MyNavbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
