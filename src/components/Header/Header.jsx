import React, { useEffect, useState } from 'react'
import { FaBars,FaXmark } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { HashLink  } from 'react-router-hash-link';
import logo from '../../assets/msquare-logo.png'

const Header = () => {

    const [open, setOpen] = useState(false)
    
   // <h1 className='font-bold text-2xl cursor-pointer text-[#ff5823] '>PortFolio</h1>

    return (
        <div className='fixed w-[95%] mx-auto z-20  flex items-center  justify-between px-3 lg:py-3 bg-[#25263A]  text-white transition-all ease-in delay-500'>
            <div className="logo w-1/4px-3">
                <img src={logo} className='w-16 object-contain cursor-pointer' />
               
            </div>
            {/* it showing the mobile menu icon only mobile screen device */}
            <div className="  sm:hidden">
                <FaBars onClick={()=>setOpen(!open)} />
            </div>
            {open && <div className='z-10 absolute top-0 right-0 w-32 h-screen  bg-[#25263A] border border-white text-white px-2 flex flex-col justify-start items-end sm:hidden '>
            <FaXmark onClick={()=>setOpen(false)}  
            className='text-xl my-2 '/>
                <ul className='flex flex-col items-end  '>
                    <li className='py-2 text-center font-medium hover:text-[#ff5823] cursor-pointer '>Home</li>
                    <li className='py-2 text-center font-medium hover:text-[#ff5823] cursor-pointer '>About</li>
                    <li className='py-2 text-center font-medium hover:text-[#ff5823] cursor-pointer '>Contact</li>
                    <li className='py-2 text-center font-medium hover:text-[#ff5823] cursor-pointer '>Services</li>
                </ul>
                <button type='button' className='bg-[#ff5823] hover:bg-[#ff8c56] text-white cursor-pointer p-2 rounded font-normal'>Get Started</button>
            </div>}

            <div className=' items-center justify-center lg:mr-5 hidden sm:flex'>
                <ul className='flex items-center justify-around gap-3   '>
                    <li className='p-3 font-medium hover:text-[#ff5823] cursor-pointer '><HashLink smooth to={'/#'}>Home</HashLink></li>
                    <li className='p-3 font-medium hover:text-[#ff5823] cursor-pointer '><HashLink smooth to={'#about'}>About</HashLink></li>
                    <li className='p-3 font-medium hover:text-[#ff5823] cursor-pointer '><HashLink smooth to={'#services'}>Services</HashLink></li>
                    <li className='p-3 font-medium hover:text-[#ff5823] cursor-pointer '><HashLink smooth to={'#projects'}>Projects</HashLink></li>
                    <li className='p-3 font-medium hover:text-[#ff5823] cursor-pointer '><HashLink smooth to={'#faq'}>FAQs</HashLink></li>
                    <li className='p-3 font-medium hover:text-[#ff5823] cursor-pointer '><HashLink smooth to={'#contact'}>Contact</HashLink></li>
                </ul>
                <Link to={'mailto:masumahmed64077@gmail.com'}><button type='button' className='md:mr-3 bg-[#ff5823] hover:bg-[#ff8c56] text-white cursor-pointer p-2 rounded font-medium'>Get Started</button></Link>
            </div>
        </div>

    )
}

export default Header