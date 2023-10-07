import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Login from './components/Login';
import ContactForm from './components/ContactForm'
// import SingleProducts from './components/VegChicken'
// import AboutUs from './components/AboutUs'
// import Footer from './components/Footer'
// import ProductList from './components/ProductList'
// import { CartProvider } from './components/CartContext'


function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <Home />
      {/* <SingleProducts /> */}
      {/* <AboutUs/> */}
      {/* <ContactForm/> */}
      {/* <ProductList/> */}
      {/* <Footer/> */}
      {/* <CartProvider/> */}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        {/* <Route path='aboutus' element={<AboutUs />} /> */}
        <Route path='contactus' element={<ContactForm />} />
      </Routes>
    </BrowserRouter >

  );
}
export default App;
