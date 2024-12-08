import React from 'react'
import { FaHouse } from 'react-icons/fa6'

const Nav = () => {
  return (
    <div className='fixed h-[10vh] z-[100] w-full transition-all duration-200 bg-black'>
      <div className='flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto'>
        {/* LOGO */}
        <div className='flex items-center space-x-2'>
            <div className='w-7 h-7 md:w-10 md:h-10 rounded-full bg-rose-700 text-white flex items-center justify-center flex-col'>
              <FaHouse/>
            </div>
            <h1 className='text-white font-bold text-sm sm:text-base md:text-xl'>HomeHub</h1>
        </div>

      </div>
    </div>
  )
}

export default Nav
