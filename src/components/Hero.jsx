import React from 'react'
import waving from '../assets/waving.png'
import './hero.css'
const Hero = () => {
    return (
        <div className='h-screen w-full bg-white flex justify-center text-center '>

            <div className="content w-[90%] ">
                <div className="hero-main">
                    <div className="hero-text">
                        <h1 className='font-bold text-6xl text-primary'>Front-End React Developer👋🏼</h1>
                        <p>Hi, I'm Ali Mianaji. A passionate Front-end React Developer based in Zanjan, Iran. 📍</p>
                    </div>
                    <div class="hero-img"></div>
                </div>
            </div>
        </div>
    )
}

export default Hero