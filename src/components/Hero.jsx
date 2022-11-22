import React from 'react'

const Hero = () => {
  return (
    <div className='bg-hero w-screen min-h-[50vh] object-cover flex flex-row items-center justify-center '>
        <h1 className='text-3xl bg-clip-text text-transparent bg-gradient-to-r from-gray-100 font-bold to-sky-700  font-sans z-10'>welcome to modern <b>GYM</b></h1>
        <p className='bg-gray-800 opacity-50 absolute w-full h-[50vh]'></p>
    </div>
  )
}

export default Hero