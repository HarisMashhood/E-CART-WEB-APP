import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Chechout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe(
  //"pk_test_51K7CyvSBgM4M9kamFV93JKjVFXZFO9ZdwoUW2fZFPN8KE1uGvWF0MomqyCm9Qoy5k57jkUnBvPgaHQkjxMl74uzr004nsn4otn"
  "pk_test_51K92PbFjq4578bewnCkB7Nxmp5COR3G99RfdDJ9blZuh3pMALbzpRlYbGF0zhWaYWKY1Itw20jBmO45y03MkpyWT00n6Ez1Ti9"
);
function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run when app component loads...//kind of if statement in react
    auth.onAuthStateChanged((authUser) => {
      console.log("The User is now ", authUser);

      if (authUser) {
        //the user just logged in / user was log in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="app">
        <Switch>
        <Route path="/Orders">
        <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
