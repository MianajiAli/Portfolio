import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
    const [nav, setNav] = useState(false)
    return (
        <>
            <div className='bg-white drop-shadow-xl fixed flex justify-between items-center py-[25px] pr-[40px] pl-[50px] w-full mx-auto px-4' style={{ zIndex: 200 }}>
                <h3 className='text-primary w-full text-xl font-Poppins7'>Mianaji.dev</h3>
                <ul className='text-primary  hidden md:flex font-Poppins6 '>
                    <a href="#home"><li className='px-4 hover:text-secondary duration-100'>Home</li></a>
                    <a href="#about"><li className='px-4 hover:text-secondary duration-100'>About</li></a>
                    <a href="#projects"><li className='px-4 hover:text-secondary duration-100'>Projects</li></a>
                    <a href="#contact"><li className='px-4 hover:text-secondary duration-100'>Contact</li></a>
                </ul>
                <button className='block md:hidden' onClick={() => { setNav(true) }}><AiOutlineMenu size={20} /></button>

                <div style={{ zIndex: 300 }} className={nav ? 'bg-white fixed left-0 top-0 w-screen h-[1000%] pt-4 ease-in-out duration-500' : 'bg-white fixed left-[-100%] ease-in-out duration-500'}>
                    <div className='flex justify-end px-[27px] pt-1' onClick={() => { setNav(false) }}>
                        <div><AiOutlineClose className='' size={40} /></div>
                    </div>
                    <ul className='w-full flex justify-center text-center flex-col font-Poppins6 mt-20 text-xl bg-white'>
                        <a onClick={() => { setNav(false) }} href="#home"><li className='p-5 hover:text-secondary duration-100'>Home</li></a>
                        <a onClick={() => { setNav(false) }} href="#about"><li className='p-5 hover:text-secondary duration-100'>About</li></a>
                        <a onClick={() => { setNav(false) }} href="#projects"><li className='p-5 hover:text-secondary duration-100'>Projects</li></a>
                        <a onClick={() => { setNav(false) }} href="#contact"><li className='p-5 hover:text-secondary duration-100'>Contact</li></a>
                    </ul>
                </div>


            </div>
        </>
    )
}

export default Navbar