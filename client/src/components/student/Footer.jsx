import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className='bg-orange-900 md:px-36 text-left w-full mt-10'>
      <div className='flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-32 py-10 border-b border-white/30'>
        <div className='flex flex-col md:items-start items-center w-full'>
          <img src={assets.logo_dark} alt="logo" />
          <p className='mt-6 text-center md:text-left text-sm text-white/80'>alt scris pe care il inlocuiesti tu caca maca</p>
        </div>
        <div className='flex flex-col md:items-start items-center w-full'>
          <h2 className='font-semibold text-white mb-5'>Company</h2>
          <ul className='flex md:flex-col w-full justify-between text-sm text-white/80 md:space-y-2'>
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <p className='py-4 text-center text-xs md:text-sm text-white/60'>
        Copyright 2025 © The Ashbourne Institute. All Rights Reserved.
      </p>
    </footer>
  )
}

export default Footer
