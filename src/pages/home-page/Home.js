import '../../App.css';
import React from 'react'; 
import HeroSection from '../../components/heroComponents/HeroSection';
import Cards from '../../components/cardItem/Cards';
import Footer from '../../components/footer-page/Footer';
import Navbar from '../../components/navbar/Navbar';

function Home(){
    return (
        <>
        <Navbar />
        <HeroSection/>
        <Cards/>
        <Footer />
        </>
    )
}

export default Home;