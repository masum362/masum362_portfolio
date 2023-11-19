import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { SiGmail } from 'react-icons/si';
import { FaPhone, FaAddressBook } from 'react-icons/fa6';

const Contact = () => {
    return (
        <div className='flex flex-col md:flex-row items-center justify-between w-[90%] m-auto mt-16 lg:mt-10'>
            <div className='border-2 w-full lg:w-1/2 text-white flex flex-col justify-center items-start p-3 gap-3'>
                <h4 className='lg:p-3 md:p-0 lg:ml-8 text-lg font-medium text-[#ff5823]'>Get In Touch</h4>
                <h1 className='lg:p-3 lg:ml-8 text-3xl lg:text-4xl font-bold capitalize'>let's talk about your project.</h1>
                <Link to={'mailto:masumahmed64077@gmail.com'} className='ml-10 font-bold text-lg  rounded-xl p-2 my-3 bg-[#ff5823] hover:bg-[#ffffff] hover:text-[#ff5823] border-2  hover:border-2 hover:border-[#ff5823] transition-all duration-300 capitalize'>contact with me</Link>
            </div>
            <div className='border-2 p-3 w-full flex flex-col items-start justify-center md:w-1/2 gap-3 lg:px-14'>
                <div className='flex items-center justify-center gap-3 my-3'>
                    <div className='p-2 lg:p-3 rounded-full bg-[#ff5823] text-white'>
                        <SiGmail className='text-3xl ' />
                    </div>
                    <div className='text-white flex flex-col '>
                        <h1 className='capitalize text-lg lg:text-xl font-medium'>email me:</h1>
                        <p className='font-thin text-lg'>masumahmed64077@gmail.com</p>
                    </div>
                </div>
                <div className='flex items-center justify-center gap-3 my-3'>
                    <div className='p-2 lg:p-3 rounded-full bg-[#ff5823] text-white'>
                        <FaPhone className='text-3xl ' />
                    </div>
                    <div className='text-white'>
                        <h1 className='capitalize text-lg lg:text-xl font-medium'>Phone me:</h1>
                        <p className='font-thin text-lg'>+8801775994314</p>
                    </div>
                </div>
                <div className='flex items-center justify-center gap-3 my-3'>
                    <div className='p-2 lg:p-3 rounded-full bg-[#ff5823] text-white'>
                        <FaAddressBook className='text-3xl ' />
                    </div>
                    <div className='text-white'>
                        <h1 className='capitalize text-lg lg:text-xl font-medium'>Address:</h1>
                        <p className='font-thin text-lg'>Sylhet,Bangladesh.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact