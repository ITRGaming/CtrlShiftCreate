import './App.css';
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import { GlobalStyle } from './GlobalStyle'
// import Login from './components/Login'
import NavBar from './components/NavBar'
// import Home from './pages/Home'
import SellerPage from './pages/SellerPage';
// import CartPage from './pages/CartPage';

function App() {

  return (
    <>
      <NavBar/>
      {/* <Home /> */}
      {/* <Login/> */}
      <SellerPage />
{/* <CartPage /> */}




 
   {/* <Router>
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
   </Router>  */}
    </>
  );
}

export default App;
