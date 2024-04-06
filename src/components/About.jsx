import React from 'react'
import emoji from '../assets/working-emoji.png'
import img from '../assets/about-img.webp'
import text from '../assets/text.svg'
import './About.css'
const About = () => {
  return (
    <div>
      <div
        id='about'
        className='max-w-[950px] w-full h-[90vh] min-h-[600px] flex flex-col justify-center items-center mx-auto pt-[10rem] lg:pt-0 '>
        <div className='flex flex-col lg:flex-row items-center justify-start lg:justify-between relative'>
          <div className='w-[90%] sm:w-[70%] lg:w-[40%] container  '>
            <img className='mainimg rounded-xl ' src={img} alt='/' />
            <span className='spanimg drop-shadow-2xl hidden md:block'>
              <img className='textimg' src={text} alt='/' />
              <img className='emoji' src={emoji} alt='/' />
            </span>
          </div>
          <div className='text-center w-[90%] lg:w-[45%] pt-7 lg:pt-0'>
            <h3 className='text-lg text-secondary font-Poppins7 uppercase'>About me</h3>
            <h4 className='text-2xl text-primary font-Poppins7 pt-1 lg:pt-0'>
              Front-end Developer <br /> based in Zanjan, Iran 📍
            </h4>
            <p className='text-s text-primaryVa font-Poppins4 pt-4'>
              Hey, my name is Ali, and I'm a Frontend Developer. My passion is to create and develop
              a clean UI/UX for my users.
              <br />
              My main stack currently is React/Next.js in combination with Tailwind CSS and
              TypeScript.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
