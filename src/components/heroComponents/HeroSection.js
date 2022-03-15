import React from 'react'
import { Button } from '../buttons/Button'
import './HeroSection.css'
import '../../App.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/video-1.mp4' className='hero-video' autoPlay loop muted />
            <h1>THE BEST TRELLO EVER</h1>
            <p>This the best Trello app has in the fucking world</p>
            <div className='hero-button'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >START HERE</Button>

                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >Teste Button <i className='fa fa-play-circle' /> </Button>
            </div>
        </div>
    )
}

export default HeroSection;