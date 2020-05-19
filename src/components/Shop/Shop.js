import React, { useEffect } from 'react'
<<<<<<< HEAD
=======
import fakedata from '../../fakeData';
>>>>>>> c22591d1a09d951eb600fca80b75f20703f72c79
import { useState } from 'react';   
import  './Shop.css'
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
<<<<<<< HEAD
=======
import fakeData from '../../fakeData';
>>>>>>> c22591d1a09d951eb600fca80b75f20703f72c79
import { Link } from 'react-router-dom';

const Shop = () => {
  //const first10 = fakedata.slice(0, 10);
  const [products ,setProducts] = useState ([]);
  const [cart,setCart] = useState([]);

<<<<<<< HEAD
useEffect(()=>{
    fetch('http://localhost:4200/Products')
    .then(res => res.json())
    .then(data =>{setProducts(data)} )
} 
,[])

  useEffect(()=>{
      const savedCart =getDatabaseCart();
      const productKeys =Object.keys(savedCart);
      if(products.length){
        const previousCart =productKeys.map(existingKey=>{
            const product =products.find(pd=>pd.key ===existingKey);
            product.quantity = savedCart[existingKey];
            return product
        })
        setCart(previousCart);
      }
     
  },[products]) 
=======
  useEffect(()=>{
      const savedCart =getDatabaseCart();
      const productKeys =Object.keys(savedCart);
      const previousCart =productKeys.map(existingKey=>{
          const product =fakeData.find(pd=>pd.key ===existingKey);
          product.quantity = savedCart[existingKey];
          return product
      })
      setCart(previousCart);
  },[]) 
>>>>>>> c22591d1a09d951eb600fca80b75f20703f72c79

  const  handleAddProduct = (product) =>{
      const toBeAddedKey =product.key
     const sameProduct =cart.find(pd=>pd.key !==toBeAddedKey);
     let count =1;
     let newCart;
     if(sameProduct){
         count = sameProduct.quantity +1;
         sameProduct.quantity =count;
         const others =cart.filter(pd=>pd.key !==toBeAddedKey);
         newCart =[...others ,sameProduct]
     }
     else{
         product.quantity =1;
         newCart = [...cart ,product]
     }
      setCart(newCart);
      addToDatabaseCart(product.key ,count)
  }
    return (
        <div className="twin-container">
            <div className="product-container">
            {
            products.map(pd =>
            <Products
            key ={pd.key} 
            showAddToCart ={true}
            handleAddProduct = {handleAddProduct}
            product={pd}
            >
            </Products>)
            }
            </div>
            <div className="cart-container">
                <Cart cart ={cart}>
                    <Link to="/review"><button className="main-button">Review</button></Link>
                </Cart>
            </div>
        </div> 
    );
};

export default Shop;