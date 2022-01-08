import React, { useEffect, useState, } from "react";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from "./axios";
import { db } from "./firebase";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() =>{
      //generate the special stripe secret which allows us to charge a customer
      const getClientSecret = async() =>{
          const response = await axios({
              method:'post',
              //Stripe expects total in a currencies subunits
              url: `/payments/create?total=${getBasketTotal(basket) * 100 }`
          });
          setClientSecret(response.data.clientSecret)
      }

      getClientSecret();
    },[basket])

    console.log('THE SECRET IS>>>>>',clientSecret)
     console.log(' USER  YE HAI',user)

  const handleSubmit = async(event) => {
    // do all fancy stripe stuff
       event.preventDefault();
       setProcessing(true); 

       const payload = await stripe.confirmCardPayment(clientSecret, {
           payment_method:{
               card: elements.getElement(CardElement)
           }
       }).then(({paymentIntent}) =>{
           //paymentIntent = payment confirmation

           db.collection('users')
           .doc(user?.uid)
           .collection('Orders')
           .doc(paymentIntent.id)
           .set({
               basket: basket,
               amount: paymentIntent.amount,
               created: paymentIntent.created
           })

           setSucceeded(true);
           setError(null)
           setProcessing(false)

           dispatch({
               type: 'EMPTY_BASKET'
           })
        
           history.replace('/orders')
       })
  };
  const handleChange = (event) => {
    // Listen for changes in cardElement
    // and display any error as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Payment (<Link to="./checkout">{basket?.length} items</Link>)
        </h1>

        {/* Payment section  -  delivery address*/}
        <div className="payment__section">
          <div className="payment__title">
            <h2>Delivery Address</h2>
          </div>
          <div className="payment__address">
            <h4>{user?.email}</h4>
            <h4>123 React Lane</h4>
            <h4>Los Angeles,CA</h4>
          </div>
        </div>

        {/*Payment section - review items */}
        <div className="payment__section">
          <div className="payment__title">
            <h2>Review item and Delivery</h2>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/*Payment section - payment method */}
        <div className="payment__section">
          <div className="payment__title">
            <h2>Payment Method</h2>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparation={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                    <span>{processing? <p>Processing</p> : "Buy Now"}
                    </span>
                </button>
              </div>
              {/*Errors */}
           {error && <div>{error}</div>}
            </form> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
