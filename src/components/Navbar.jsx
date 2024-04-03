import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
    const [nav, setNav] = useState(false)
    return (
        <>
            <div className='bg-white flex justify-between items-center py-[25px] pr-[40px] pl-[50px] w-full mx-auto px-4 '>
                <h3 className='text-primary w-full text-xl font-Poppins6'>hi.dev</h3>
                <ul className='text-primary  hidden md:flex font-Poppins6 '>
                    <li className='px-4 hover:text-secondary duration-100'>Home</li>
                    <li className='px-4 hover:text-secondary duration-100'>About</li>
                    <li className='px-4 hover:text-secondary duration-100'>Projects</li>
                    <li className='px-4 hover:text-secondary duration-100'>Contact</li>
                </ul>
                <button className='block md:hidden' onClick={() => { setNav(true) }}><AiOutlineMenu size={20} /></button>

                <div className={nav ? 'fixed left-0 top-0 w-[100%] h-full bg-white pt-4 ease-in-out duration-500' : 'fixed left-[-100%] ease-in-out duration-900'}>
                    <div className='flex justify-end px-[27px] pt-1' onClick={() => { setNav(false) }}>
                        <div><AiOutlineClose className='' size={40} /></div>
                    </div>
                    <ul className='w-full flex justify-center text-center flex-col font-Poppins6 mt-20 text-xl'>
                        <li className='p-5 hover:text-secondary duration-100'>Home</li>
                        <li className='p-5 hover:text-secondary duration-100'>About</li>
                        <li className='p-5 hover:text-secondary duration-100'>Projects</li>
                        <li className='p-5 hover:text-secondary duration-100'>Contact</li>
                    </ul>
                </div>

            </div>
        </>
    )
}

export default Navbar