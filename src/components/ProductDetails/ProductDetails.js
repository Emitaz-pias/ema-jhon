import React from 'react';
import './ProductDetails.css'
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Products from '../Products/Products';


const ProductDetails = () => {
    const {productKey} =useParams();
    const product = fakeData.find(pd=>pd.key ===productKey);
    
    return (
        <div>
            <h1 >product details coming soon</h1>
            <Products showAddToCart ={false} product ={product}></Products>
        </div>
    );
};

export default ProductDetails;