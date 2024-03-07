import React from 'react';
import Header from './Component/Header';
import Footer from './Component/Footer';
import {Routes, Route} from "react-router-dom";
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import NotFound from './Pages/NotFound';
import ProductDetail from './Pages/ProductDetail';

function App() {

  return (
    <>
<Header />
<Routes>
<Route exact path="/" element={<Home />} />
<Route exact path="/contact" element={<Contact />} />
<Route exact path="/about" element={<About />} />
<Route exact path="/products/:id" element={<ProductDetail />} />
<Route exact path="*" element={<NotFound />} />
</Routes>  
<Footer />
    </>
  )
}

export default App
