import React from 'react'
import Logo from '../assets/Logo.png'
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";



const Navbar = () => {
  return (
      <nav className=' flex justify-around py-[20px] items-center text-white  w-[100%]'>
          <img className=' hover:transform-gpu hover:scale-120 active:scale-80
                        transition-all duration-[0.5s] shadow-lg ' src={Logo} alt="" />
          <ul className=' flex justify-center items-center gap-[30px]'>
              <li className=' hover:text-[#ff6f16] hover:transform-gpu hover:translate-y-[-7px] hover:scale-120 transition-all duration-[0.4s] active:text-red-600 active:scale-90 active:translate-y-[7px] cursor-none'>Home </li>
              <li className=' hover:text-[#ff6f16] hover:transform-gpu hover:translate-y-[-7px] hover:scale-120 transition-all duration-[0.4s] active:text-red-600 active:scale-90 active:translate-y-[7px] cursor-none'>Shop</li>
              <li className=' hover:text-[#ff6f16] hover:transform-gpu hover:translate-y-[-7px] hover:scale-120 transition-all duration-[0.4s] active:text-red-600 active:scale-90 active:translate-y-[7px] cursor-none'>About us </li>
              <li className=' hover:text-[#ff6f16] hover:transform-gpu hover:translate-y-[-7px] hover:scale-120 transition-all duration-[0.4s] active:text-red-600 active:scale-90 active:translate-y-[7px] cursor-none'>Services</li>
              <li className=' hover:text-[#ff6f16] hover:transform-gpu hover:translate-y-[-7px] hover:scale-120 transition-all duration-[0.4s] active:text-red-600 active:scale-90 active:translate-y-[7px] cursor-none'>Blog</li>
          </ul>
          <div className=' text-white flex item-center gap-[20px] text-2xl'>
              <CiSearch className='  hover:transform-gpu hover:scale-150 active:scale-80
                        transition-all duration-[0.5s] shadow-lg hover:text-[#ff6f16]' />
              <CiUser className=' hover:transform-gpu hover:scale-150 active:scale-80
                        transition-all duration-[0.5s] shadow-lg hover:text-[#ff6f16]' />
              <CiHeart className='  hover:transform-gpu hover:scale-150 active:scale-80
                        transition-all duration-[0.5s] shadow-lg hover:text-[#ff6f16]' />
              <IoBagOutline className=' hover:transform-gpu text-[20px] hover:scale-150 active:scale-80
                        transition-all duration-[0.5s] shadow-lg hover:text-[#ff6f16]' />
          </div>
      </nav>
  )
}

export default Navbar