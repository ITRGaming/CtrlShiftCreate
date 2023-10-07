import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
// import AboutUs from './components/AboutUs'
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Home />

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
