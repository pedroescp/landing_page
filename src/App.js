
import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home.js';
import SignUp from './pages/SignIn/SignIn.js';
import Products from './pages/Products/Products.js';
import Services from './pages/Services/Services.js';

function App() {
  return (
    <>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />


      </Routes>
      
      </Router> 
    </>
  );
}

export default App;
