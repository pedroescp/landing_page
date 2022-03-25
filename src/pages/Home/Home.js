import '../../App.css';
import React from 'react'; 
import HeroSection from '../../components/heroComponents/HeroSection';
import Cards from '../../components/cardItem/Cards';
import Footer from '../../components/footer/Footer';

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