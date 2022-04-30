
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';    
import Home from './pages/home-page/Home';
import Login from './pages/Login/Login.js';
import Products from './pages/Products/Products.js';
import Services from './pages/Services/Services.js';
import SingUp from './pages/SingUp/SingUp.js';
import HomePage from './pages/Home/HomePage';

function App() {
  return (
    <>
      <Router>  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/sign-up" element={<SingUp />} />
        <Route path="/homepage" element={<HomePage />} />


      </Routes>
      
      </Router> 
    </>
  );
}

export default App;
