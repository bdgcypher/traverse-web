import React from 'react';
import '../App.css';
import { Button } from './Btn';
import Video from '../videos/video-1.mp4';
import './Hero.css';

function HeroSection() {
    return (
        <div className="hero-container">
            <video src={Video} autoPlay loop muted type='Video/mp4'/>
            <h1>ADVENTURE IS OUT THERE</h1>
            <p>Let's find it together.</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline"
                buttonSize="btn--large">GET STARTED</Button>
                <Button className="btns" buttonStyle="btn--primary"
                buttonSize="btn--large">PREVIEW <i class="far fa-play-circle" /></Button>
            </div>
        </div>
    )
}

export default HeroSection
