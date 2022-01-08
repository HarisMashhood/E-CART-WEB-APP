import React from 'react'
import "./Checkout.css"
import Subtotal from './Subtotal'
import {useStateValue} from "./StateProvider";
import CheckoutProduct from './CheckoutProduct';
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
function Chechout() {
    const [{basket, user},dispatch]= useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad"
                src="https://media.istockphoto.com/photos/ecommerce-internet-online-shopping-and-delivery-concept-household-picture-id867810472"
                alt="" 
                />
                <div>
                    <h2> Hello, {user?.email}</h2>
                    <h2 className="checkout__title">Your Shopping Basket {<ShoppingBasketIcon />}
                    </h2>

                    {basket.map(item =>(
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
            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Chechout
