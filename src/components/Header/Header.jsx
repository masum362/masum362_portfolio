import React, { useState } from 'react'
import { FaBars,FaXmark } from "react-icons/fa6";

const Header = () => {

    const [open, setOpen] = useState(false)

    return (
        <div className='relative flex items-center m-auto justify-between px-3 lg:py-3 bg-[#25263A] text-white transition-all ease-in delay-500'>
            <div className="logo w-1/4px-3">
                <h1 className='font-bold text-2xl cursor-pointer text-[#ff5823] '>PortFolio</h1>
            </div>
            {/* it showing the mobile menu icon only mobile screen device */}
            <div className="  sm:hidden">
                <FaBars onClick={()=>setOpen(!open)} />
            </div>
            {open && <div className='absolute top-0 right-0 w-32 h-screen  bg-[#25263A] border border-white text-white px-2 flex flex-col justify-start items-end sm:hidden '>
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
                    <li className='p-3 font-medium hover:text-[#ff5823] cursor-pointer '>Home</li>
                    <li className='p-3 font-medium hover:text-[#ff5823] cursor-pointer '>About</li>
                    <li className='p-3 font-medium hover:text-[#ff5823] cursor-pointer '>Contact</li>
                    <li className='p-3 font-medium hover:text-[#ff5823] cursor-pointer '>Services</li>
                </ul>
                <button type='button' className='md:mr-3 bg-[#ff5823] hover:bg-[#ff8c56] text-white cursor-pointer p-2 rounded font-medium'>Get Started</button>
            </div>
        </div>

    )
}

export default Header