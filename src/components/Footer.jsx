import React from 'react'

const Footer = () => {
    return (
        <div className='w-full bg-primary  text-s sm:text-xl items-center flex flex-col lg:flex-row lg:justify-between p-[4rem]'>
            <p className='text-white font-Poppins5 '>Copyright © 2024. All rights are reserved</p>
            <div className='text-white font-Poppins5 flex pt-10 lg:pt-0'>
                <p className='px-3'>Github</p>
                <p className='px-3'>Linkdin</p>
            </div>
        </div>
    )
}

export default Footer