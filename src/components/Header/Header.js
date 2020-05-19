import React, {} from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import {useAuth} from '../Login/UseAuth'
const Header = () => {
    const auth = useAuth()
    
    

    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
                <a href="shop">Shop</a>
                <a href="review">Order Review</a>
                <a href="inventory">Manage Inventory</a>

                {
                   auth.user &&
                   <span style={{color:"cyan"}}>Welcome { auth.user.name}</span>            
                }
                {
                    auth.user ?
                       <a href="LogIn">Sign Out</a>:
                       <a href="LogIn">Sign In</a>
                }
                      
            </nav>
        </div>
    );
};

export default Header;