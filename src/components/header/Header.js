/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Logo from '../../assets/Logo.png';
import menuBtn from '../../assets/menu.svg';
import Home from '../../pages/home/Home';

const Header = () => {
  return (
    <div className="h-3/6 bg-blue-400 flex flex-col items-center px-16">
        <nav className='flex justify-between items-center py-4  w-full'>
            <div>
                <img src={Logo} alt="logo" />
            </div>
            <div className='w-1/3'>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="What do you want to watch?"
                        className="bg-transparent border border-white rounded-md pl-4 pr-10 py-2 w-full text-white placeholder-white focus:outline-none focus:border-blue-300"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <svg
                        className="h-5 w-5 text-white"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        <path d="M21 21l-4.35-4.35M15 10a5 5 0 11-10 0 5 5 0 0110 0z"></path>
                        </svg>
                    </div>
                </div>
            </div>
            <div className='flex gap-7 items-center'>
                <div>
                    <li className='list-none'><a className="text-white font-bold text-base" href="#">Sign In</a></li>
                </div>
                <div className='bg-red-800 rounded-full p-2 cursor-pointer'>
                    <img src={menuBtn} alt="menu-btn" />
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Header