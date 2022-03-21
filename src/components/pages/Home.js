import '../../App.css';
import React from 'react'; 
import HeroSection from '../heroComponents/HeroSection';
import Cards from '../cardItem/Cards'

function Home(){
    return (
        <>
        <HeroSection/>
        <Cards/>
        </>
    )
}

export default Home;