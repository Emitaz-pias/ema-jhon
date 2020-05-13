import React from 'react';
import'./Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Products = (props) => {
    const { name, img, seller, price ,stock ,key} =props.product
   
    
    return (
        <div className="products">
            <div className="product-image">
                <img src={img} alt="" />
            </div>
            <div>
                <h4  className="product-name"><Link to={"/product"+key}>{name}</Link></h4>
                <br />
                <p> <small>  by:{seller}</small></p>
                <br />
                <p>${price}</p>
                <p><small>Only {stock}left in stock -Order soon</small></p>
                {props.showAddToCart && <button className ="main-button" onClick={() =>props.handleAddProduct(props.product)}
                > <FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>}
            </div>
        </div>
    );
};

export default Products;