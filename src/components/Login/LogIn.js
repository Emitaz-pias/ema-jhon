import React from 'react';
import Auth from './UseAuth';
import { } from 'react-router-dom';
 

const LogIn = () => {
    const auth =Auth();
    const handleSignIn = () =>{
            auth.signInWithGoogle ()
            .then(res =>{
                window.location.pathname = '/Review'
            })
    }
    
    const handleSignOut = () =>{
                auth.signOut()
                .then(res =>{
                    window.location.pathname='/'
                })
    }
    return (
        <div>
            
            {
              auth.user? <div> <button onClick={handleSignOut}>Sign Out</button> <h1>hi from login</h1> </div> :
               <button onClick={handleSignIn}>Sign In whith google</button>
            }
        </div>
    );
};

export default LogIn;