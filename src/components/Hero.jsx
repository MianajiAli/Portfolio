import React from 'react'
import waving from '../assets/waving.png'
import { TbBrandGithub, TbBrandInstagram } from "react-icons/tb";
import './hero.css'
import photo from '../assets/mianaji.jpg';

const Hero = () => {
    return (
        <div id='home' className='max-w-[950px] w-full h-screen items-center mx-auto  bg-white
         flex flex-col-reverse lg:flex-row
        justify-end lg:justify-between
        pt-[7rem] lg:pt-0 
        '>
            <div className='w-[90%] lg:w-[55%] items-center text-center lg:text-left'>
                <h1 className='font-bold text-4xl lg:text-6xl pt-8 lg:pt-0 text-primary'>Front-End React Developer👋🏼</h1>
                <p className='font-Poppins4 text-xl text-primary mt-6 '>Hi, I'm Ali Mianaji. A passionate Front-end React Developer based in Zanjan, Iran. 📍</p>
                <div className='my-5 flex justify-center lg:justify-start '>
                    <div className='px-1'><TbBrandInstagram size={32} className='hover:text-pink-600 hover:scale-150 duration-200 ease-in-out' /></div>
                    <div className='px-1'><TbBrandGithub size={32} className='hover:text-blue-900 hover:scale-150 duration-200 ease-in-out' /></div>
                </div>
            </div>
            <div className='w-[20rem] sm: lg:w-[37%] font-Poppins5 text-xl text-primary'>
                <img className='hero-img' src={photo} alt="/" />

            </div>
        </div>
    )
}

export default Hero