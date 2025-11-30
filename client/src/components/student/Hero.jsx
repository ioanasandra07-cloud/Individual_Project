import React from 'react'
import { assets } from '../../assets/assets'
import SearchBar from './SearchBar'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-orange-100/70'>
      <h1 className='md:text-home-heading-large text-home-heading-small relative font-bold text-gray-800 max-w-3x1 mx-auto'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae lorem nisi.<span className='text-red-600'> Morbi ultricies leo.</span>
      <img src={assets.sketch} alt="sketch" className='md:block hidden absolute -bottom-7 right-0' /></h1>
      <p className='md:block hidden text-gray-500 max-w-2x1 mx-auto'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Ut sagittis tristique dolor. Sed in finibus arcu. Mauris mattis lorem ut nibh efficitur luctus.
         Vestibulum ut ex facilisis, feugiat ligula dapibus.
      </p>
      <p className='md:hidden text-gray-500 max-w-sm mx-auto'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Ut sagittis tristique dolor. Sed in finibus arcu. 
        Mauris mattis lorem ut nibh efficitur luctus.
      </p>
      <SearchBar />
    </div>
  )
}

export default Hero
