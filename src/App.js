import React, {} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import ProductDetails from './components/ProductDetails/ProductDetails';
import LogIn from './components/Login/LogIn';
import { AuthContextProvider, PrivateRoute } from './components/Login/UseAuth';
import Shipment from './components/Shipment/Shipment';



function App() {
  return (
    <div >
    <AuthContextProvider>
        <Header> </Header>
      <Router>
          <Switch>
            <Route path="/shop">
            <Shop></Shop>
            </Route>
            <Route path="/review">
              <Review></Review>
            </Route>
            <Route path="/inventory">
              <Inventory></Inventory>
            </Route>
            <Route exact path="/">
              <Shop></Shop>
            </Route>
            <Route path="/product:productKey">
            < ProductDetails></ProductDetails>
            </Route>
            <Route path ="/Login">
              <LogIn></LogIn>
              </Route>
             <PrivateRoute path =  "/Shipment">
                  <Shipment></Shipment>
             </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
        </AuthContextProvider>
    </div>
  );
}

export default App;
