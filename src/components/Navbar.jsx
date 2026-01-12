
import React from 'react'

const Navbar = () => {
  return (
    <nav className=' fixed top-0 w-full bg-black/60 backdrop-blur-md z-500'>
      <div  className='max-w-7xl mx-auto px-5 py-4 flex items-center justify-between gap-8'>
        <a href='#design' className='text-gray-400 hover:text-white cursor-pointer duration-[.4s]'>Design</a>
        <a href='#camera' className='text-gray-400 hover:text-white cursor-pointer duration-[.4s]'>Câmera</a>
        <a href='#performance' className='text-gray-400 hover:text-white cursor-pointer duration-[.4s]'>Performance</a>
        <a href='#cores' className='text-gray-400 hover:text-white cursor-pointer duration-[.4s]'>Cores</a>
        
        <button className='text-white bg-blue-600 hover:bg-blue-800  px-4 py-0.5 rounded-full cursor-pointer 
        transition-all duration-300'>Comprar</button>
      </div>
    </nav>
  )
}

export default Navbar