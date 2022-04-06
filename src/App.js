
import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home.js';
import Login from './pages/Login/Login.js';
import Products from './pages/Products/Products.js';
import Services from './pages/Services/Services.js';
import SingUp from './pages/SingUp/SingUp.js';

function App() {
  return (
    <>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/sign-up" element={<SingUp />} />


      </Routes>
      
      </Router> 
    </>
  );
}

export default App;
