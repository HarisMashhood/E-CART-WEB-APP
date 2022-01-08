/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react'
import { db } from './firebase';
import Order from './Order';
import './Orders.css';
import {Link} from "react-router-dom";
import { useStateValue } from './StateProvider';
function Orders() {
    const [{basket, user}, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(() =>{
        if(user){
            db.collection('users').doc(user?.uid)
            .collection('orders')
            .orderBy('created', 'desc')
            .onSnapshot(snapshot =>(
                setOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            ))
        }
        else{
            setOrders([])
        }
    }, [user])
  
    return (
        <div className='orders'>
            <h1>Your Orders placed successfully !!!</h1>
            <button type='button' onClick={<Link to="/"></Link>}> Continue Shopping!!</button>
            <div className='orders__order'>
                {orders?.map(order =>{
                   <Order order={order} />
                })}
            </div>
        </div>
    )
}

export default Orders
