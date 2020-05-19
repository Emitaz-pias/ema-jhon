import React from 'react';
import './ProductDetails.css'
import { useParams } from 'react-router-dom';
<<<<<<< HEAD
import Products from '../Products/Products';
import { useState } from 'react';
import { useEffect } from 'react';
=======
import fakeData from '../../fakeData';
import Products from '../Products/Products';
>>>>>>> c22591d1a09d951eb600fca80b75f20703f72c79


const ProductDetails = () => {
    const {productKey} =useParams();
<<<<<<< HEAD
    const [product , setProduct] = useState(null);
    useEffect(() => {
        fetch('http://localhost:4200/product/' + productKey)
        .then(res => res.json())
        .then(data =>setProduct(data))
    },[ ]);

    return (
        <div>
            <h1 >product details coming soon</h1>
        {
        
        product&&    <Products showAddToCart ={false} product ={product}></Products>
            }
=======
    const product = fakeData.find(pd=>pd.key ===productKey);
    
    return (
        <div>
            <h1 >product details coming soon</h1>
            <Products showAddToCart ={false} product ={product}></Products>
>>>>>>> c22591d1a09d951eb600fca80b75f20703f72c79
        </div>
    );
};

export default ProductDetails;