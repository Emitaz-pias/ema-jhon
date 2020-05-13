import React, { useState, useEffect } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from './ReviewItem';
import Cart from '../Cart/Cart';
import happyImage  from '../../images/giphy.gif'
import { Link } from 'react-router-dom';
import { useAuth } from '../Login/UseAuth';

const Review = () => {
    const [cart ,setCart] = useState([]);
    const [orderPlaced ,setOrderPlaced] =useState(false);
    const auth =useAuth();

    const HandlePlaceOrder = () => {
        setCart([]);
        setOrderPlaced(true);
        processOrder();

    }
    
    const removeProduct=(productKey) =>{
        const newCart = cart.filter(pd =>pd.key !==productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    useEffect(()=> {

        const savedCart = getDatabaseCart();
        const productKeys =Object.keys(savedCart);

        const cartProducts =productKeys.map(key=>{
        const product =fakeData.find(pd =>pd.key ===key);
        product.quantity =savedCart[key];
        return product
        })
        setCart(cartProducts);  
    },[])
    let thankYou;
    if (orderPlaced){
        thankYou= <img src={happyImage} alt=""/>
    }
    return (
        <div className="twin-container">
           <div className="product-container">
           {cart.map(pd => 
            <ReviewItem product ={pd}
           key={pd.key}
           removeProduct={removeProduct}></ReviewItem>)}
           {thankYou}
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