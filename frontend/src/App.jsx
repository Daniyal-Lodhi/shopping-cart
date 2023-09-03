import React from 'react'
import Productgallery from './components/Productgallery'
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import ProductView from './components/ProductView';
import Cart from './components/Cart';
import Checkoutsuccess from './components/Checkoutsuccess';
import Home from './components/Home';

const App = () => {
  return (
    <>
    <Router>
      <Routes>
      <Route exact path = "/" element = {<Home/>} />      
      <Route path = "/productgallery" element = {<Productgallery/>} />
      <Route exact path = "/overview" element = {<ProductView/>} />
      <Route exact path = "/cart" element = {<Cart/>} />
      <Route exact path = "/checkoutsuccess" element = {<Checkoutsuccess/>} />
      
      </Routes>
    </Router>
    </>
  )
}

export default App
