import React from 'react';
import './ProductDetails.css'
import { useParams } from 'react-router-dom';
import Products from '../Products/Products';
import { useState } from 'react';
import { useEffect } from 'react';


const ProductDetails = () => {
    const {productKey} =useParams();
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
        </div>
    );
};

export default ProductDetails;