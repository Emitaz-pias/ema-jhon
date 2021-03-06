import React, { }from 'react';




const Cart = (props) => {
    const cart =props.cart;
    //const user = useContext(UserContext);
    //const total = cart.reduce((total ,prd) => total + prd.price ,0); this is standard way to add total..
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price *product.quantity
    }
    let shipping = 0;
    if(total>35){
        shipping = 0;
    }
    else if(total >15) {
        shipping = 4.99 
    }
    else if(total>0){
        shipping = 12.99
    }
    const tax = (total / 10).toFixed(2);
    const grandTotal =(total + shipping +Number (tax)).toFixed(2);
    const formatNumber =num =>{
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h4>Order Summary:</h4>
            <p>Items Ordered : {cart.length}</p>
            <p>Product:{formatNumber(total)}</p>
            <p>Shipping :{shipping}</p>
            <p>Tax:{tax}</p>
            <p>Total: {grandTotal} </p>
            <br/>
            {props.children}
            <p> {}</p>
        </div>
    );
};
export default Cart;