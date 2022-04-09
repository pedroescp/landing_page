import React from 'react'
import { Button } from '../buttons/login/Button'
import './HeroSection.css'
import '../../App.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/video-1.mp4' className='hero-video' autoPlay loop muted />
            <h1>Trevollo</h1>
            <p>This the best task manager app in the world</p>
            <div className='hero-button'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >Start Here
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;