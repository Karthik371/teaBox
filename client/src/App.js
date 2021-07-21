/** @format */
import React, { Fragment, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import store from "./redux/Store";
import { loadUser } from "./redux/user/user.actions";
import setAuthToken from "./utils/setAuthToken";

import Navbar from "./components/navbar/navbar.component";
import Footer from "./components/footer/footer.component";
import PrivateRoute from "./components/privateRoute/PrivateRoute";

import HomePage from "./pages/homepage/homepage.component";
import LooseLeaf from "./pages/loose-leaf/loose-leaf.component";
import Contact from "./pages/contact/contact.component";
import Login from "./pages/auth/login.component";
import Register from "./pages/auth/register.component";
import Productslooseleaf from "./pages/productslooseleaf/Productslooseleaf";
import TeaBox from "./pages/my_tea_box/TeaBox.component";
import TeaWare from "./pages/teaware/TeaWare";
import Orders from "./pages/my_tea_box/orders/Orders";
import SingleProduct from "./pages/singleproduct/SingleProduct";
import Cart from "./pages/my_tea_box/cart/Cart";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/looseleaf" component={LooseLeaf} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/looseleaf/products" component={Productslooseleaf} />
        <Route exact path="/teaware" component={TeaWare}></Route>
        <Route exact path="/myorders" component={Orders}></Route>
        <Route exact path="/cart" component={Cart}></Route>
        <Route
          exact
          path="/single/product/:id"
          component={SingleProduct}></Route>
        <PrivateRoute exact path="/my_teabox" component={TeaBox} />
      </Switch>
      <Footer />
    </Fragment>
  );
};

export default App;
