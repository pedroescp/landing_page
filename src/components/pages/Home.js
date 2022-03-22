import '../../App.css';
import React from 'react'; 
import HeroSection from '../heroComponents/HeroSection';
import Cards from '../cardItem/Cards';
import Footer from '../footer/Footer';

function Home(){
    return (
        <>
        <HeroSection/>
        <Cards/>
        <Footer />
        </>
    )
}

export default Home;