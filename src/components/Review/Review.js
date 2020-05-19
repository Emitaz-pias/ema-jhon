import React, { useState, useEffect } from 'react';
import { getDatabaseCart, removeFromDatabaseCart} from '../../utilities/databaseManager';
import ReviewItem from './ReviewItem';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';
import { useAuth } from '../Login/UseAuth';

const Review = () => {
    const [cart ,setCart] = useState([]);
    const auth =useAuth();

    const removeProduct=(productKey) =>{
        const newCart = cart.filter(pd =>pd.key !==productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    useEffect(()=> {

        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);

        fetch('http://localhost:4200/getProductKey',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },   
            body: JSON.stringify(productKeys) 
          })
        .then(res =>res.json())
        .then( data =>{
            const cartProducts =productKeys.map(key=>{
            const product =data.find(pd =>pd.key ===key);
            product.quantity =savedCart[key];
            return product
            })
            setCart(cartProducts);  })

    },[])
    
    return (
        <div className="twin-container">
           <div className="product-container">
           {cart.map(pd => 
            <ReviewItem product ={pd}
           key={pd.key}
           removeProduct={removeProduct}></ReviewItem>)}      
           {
               !cart.length && <h1>your cart is empty.<a href="/shop">keep shopping</a> </h1>
           }
           </div>
           <div className="cart-container">
               <Cart cart ={cart}>
               <Link to ="/Shipment">
                  {
                      auth.user?
                   <button className="main-button">Proceed Shipment</button>
                   :<button className="main-button">Login to Proceed</button>
                   
                   }
                </Link>    
               </Cart>
               
           </div>
        </div>
    );
};

export default Review;