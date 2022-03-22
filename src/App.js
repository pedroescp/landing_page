
import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';
import Products from './components/pages/Products';
import Services from './components/pages/Services';

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
