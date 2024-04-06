import React from 'react'
import {HiOutlineMail, HiOutlineMap} from 'react-icons/hi'
import {TbBrandTelegram} from 'react-icons/tb'
const Contact = () => {
  return (
    <div>
      <div
        id='contact'
        className='max-w-[950px] w-full h-auto min-h-[450px] flex flex-col justify-center items-center lg:items-left mx-auto pt-[10rem] lg:pt-0 '>
        <div className='text-center md:text-left w-[90%] md:w-[70 %] pt-7 lg:pt-0'>
          <h3 className='text-lg text-secondary font-Poppins7 uppercase'>contact</h3>
          <h4 className='text-2xl text-primary font-Poppins7 pt-1 lg:pt-0'>
            Don't be shy! Hit me up! 👇
          </h4>

          <div className='flex flex-col items-center md:flex-row pt-10 gap-10 pb-10'>
            <div className='flex flex-col md:flex-row items-center gap-3'>
              <div className=' bg-white  w-[3.2rem] h-[3.2rem] rounded-full drop-shadow-lg flex justify-center items-center text-secondary border-solid border-[1px]  '>
                <HiOutlineMap size='32' />
              </div>
              <div className='md:pl-3 md:pr-[3rem] px-0 '>
                <p className='font-Poppins6 text-primary '>Location</p>
                <p className='font-Poppins5 text-primaryVa hover:text-secondary duration-[.3s]'>
                  Zanjan,Iran
                </p>
              </div>
            </div>
            <div className='flex flex-col md:flex-row items-center gap-3'>
              <div className=' bg-white  w-[3.2rem] h-[3.2rem] rounded-full drop-shadow-lg flex justify-center items-center text-secondary border-solid border-[1px]  '>
                <TbBrandTelegram size='32' />
              </div>
              <div className='md:pl-3 md:pr-[3rem] px-0 '>
                <p className='font-Poppins6 text-primary '>Telegram</p>
                <p className='font-Poppins5 text-primaryVa hover:text-secondary duration-[.3s] '>
                  <a href='https://t.me/mnha21'>@mnha21</a>
                </p>
              </div>
            </div>
            <div className='flex flex-col md:flex-row items-center gap-3'>
              <div className=' bg-white  w-[3.2rem] h-[3.2rem] rounded-full drop-shadow-lg flex justify-center items-center text-secondary border-solid border-[1px]  '>
                <HiOutlineMail size='32' />
              </div>
              <div className='md:pl-3 md:pr-[3rem] px-0 '>
                <p className='font-Poppins6 text-primary '>Email</p>
                <p className='font-Poppins5 text-primaryVa hover:text-secondary duration-[.3s]'>
                  me3hki@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
