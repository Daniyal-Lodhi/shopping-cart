import React from 'react'
import Productgallery from './components/Productgallery'
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import ProductView from './components/ProductView';
import Cart from './components/Cart';

const App = () => {
  return (
    <>
    <Router>
      <Routes>
      <Route path = "/" element = {<Productgallery/>} />
      <Route exact path = "/overview" element = {<ProductView/>} />
      <Route exact path = "/cart" element = {<Cart/>} />
      
      </Routes>
    </Router>
    </>
  )
}

export default App
