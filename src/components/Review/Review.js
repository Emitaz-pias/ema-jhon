import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import { getDatabaseCart, removeFromDatabaseCart} from '../../utilities/databaseManager';
import ReviewItem from './ReviewItem';
import Cart from '../Cart/Cart';
=======
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from './ReviewItem';
import Cart from '../Cart/Cart';
import happyImage  from '../../images/giphy.gif'
>>>>>>> c22591d1a09d951eb600fca80b75f20703f72c79
import { Link } from 'react-router-dom';
import { useAuth } from '../Login/UseAuth';

const Review = () => {
    const [cart ,setCart] = useState([]);
<<<<<<< HEAD
    const auth =useAuth();

=======
    const [orderPlaced ,setOrderPlaced] =useState(false);
    const auth =useAuth();

    const HandlePlaceOrder = () => {
        setCart([]);
        setOrderPlaced(true);
        processOrder();

    }
    
>>>>>>> c22591d1a09d951eb600fca80b75f20703f72c79
    const removeProduct=(productKey) =>{
        const newCart = cart.filter(pd =>pd.key !==productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    useEffect(()=> {

        const savedCart = getDatabaseCart();
<<<<<<< HEAD
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
    
=======
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
>>>>>>> c22591d1a09d951eb600fca80b75f20703f72c79
    return (
        <div className="twin-container">
           <div className="product-container">
           {cart.map(pd => 
            <ReviewItem product ={pd}
           key={pd.key}
<<<<<<< HEAD
           removeProduct={removeProduct}></ReviewItem>)}      
=======
           removeProduct={removeProduct}></ReviewItem>)}
           {thankYou}
>>>>>>> c22591d1a09d951eb600fca80b75f20703f72c79
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