import React from 'react'
import logo from '../assets/react.svg'

const Navbar = () => {
  return (
    <nav className=' sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 '>
        <div className=' text-gray-100 container px-4 mx-auto relative text-sm'>
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                    <img className='h-10 w-10 mx-3' src={logo} alt="logo" />
                    <span className='text-xl tracking-tight'>Flexlab</span>
                </div>
                <ul className='hidden lg:flex ml-14 space-x-12'>
                  <li> <a href="#">Home</a></li>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">Pricing</a></li>
                </ul>
                <div className=" hidden lg:flex justify-center items-center space-x-5 mx-3">
                  <a href="#" className='py-2 px-3 border rounded-md bg-gradient-to-r from-teal-600 via-teal-500 to-teal-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300'>Sign In</a>
                  <a href="#" className='py-2 px-3 border rounded-md bg-slate-900 border border-gray-100  hover:border-slate-900 hover:bg-teal-600'>Create an account</a>
                </div>
            </div>

        </div>
    </nav>
  )
}

export default Navbar