import React, { useEffect, useState } from 'react';
// import Typical from 'react-typical'

import img from "../../assets/masum profile.jpg"
import { FaFacebook, FaSquareInstagram, FaSquareTwitter, FaYoutube } from 'react-icons/fa6'
import { Cursor, Typewriter } from 'react-simple-typewriter';
import Particls from '../../particles/Particles';
import { Link } from 'react-router-dom';
import pdf from "../../assets/masum's cv(full stack).pdf"

const Profile = () => {





    return (
        <div className='relative flex flex-col mt-12 md:mt-0 md:flex-row  md:justify-between items-center w-full lg:mt-2  md:h-screen '>

            <div className=' h-screen w-full  absolute left-0 top-0 bottom-0 right-0 flex  z-[-2]'>
                
                <Particls />
                
            </div>
            <div className='w-full sm:w-2/3 flex flex-col justify-center items-center '>
                <div className='flex justify-start items-center gap-1 text-white py-2 sm:py0 '>
                    <Link to={'https://www.facebook.com/md.masum.ahmed.mk'} target='_blank'><FaFacebook className='cursor-pointer hover:border border-[#ff5823] rounded-full text-xl transition-all hover:scale-110' /></Link>
                    <Link to={'https://www.instagram.com/masum362ig'} target='_blank'><FaSquareInstagram className='cursor-pointer hover:border border-[#ff5823] rounded-full text-xl transition-all hover:scale-110' /></Link>
                    <Link to={'https://www.youtube.com/@HappyEnding360'} target='_blank'><FaYoutube className='cursor-pointer hover:border border-[#ff5823] rounded-full text-xl transition-all hover:scale-110' /></Link>
                    <Link to={'https://twitter.com/masum362'} target='_blank'><FaSquareTwitter className='cursor-pointer hover:border border-[#ff5823] rounded-full text-xl transition-all hover:scale-110' /></Link>
                    
                </div>
                <div className='text-white flex flex-col items-center justify-center gap-3 '>
                    <span className='font-bold text-2xl'>Hello, I'M <span className='text-[#ff5823]'>Masum</span></span>

                    <div className="container flex justify-center items-center ">

                        <span className='text first-text text-3xl lg:text-5xl font-medium '>I'm a <span className='text-[#ff5823]'><Typewriter
                            words={["Youtuber", "Designer", "Developer", "Freelancer"]}
                            loop={Infinity}

                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}

                        /></span> </span>

                        <Cursor />

                    </div>

                    <p className='lg:text-xl text-center'>Knack of of building applications with front and back end operations</p>
                    <div className='flex justify-between items-center gap-3 '>
                      <Link to={'mailto:masumahmed64077@gmail.com'}>
                      <button className='bg-transparent px-4 sm:px-8 border hover:border-[#ff5823] py-3 rounded-3xl font-medium transition-all delay-75'>Hire Me</button>
                      </Link>

                      <a href={pdf}>  <button className='bg-transparent px-4 lg:px-8 py-3 rounded-3xl text-[#ff5823] font-medium hover:bg-[#ff5823] hover:text-white transition-all delay-75 '>Get Resume</button></a>
                    </div>
                </div>
            </div>

            <div className='flex items-center justify-center md:w-1/3 z-10 mt-16 md:mt-0 w-full '>
                <div className='border-2 rounded-full p-3 border-t-0 border-r-0 border-l-0'>
                    <img src={img} alt="Md. Masum Ahmed" className='w-[20rem] h-[20rem] md:w-56 md:h-56 lg:w-72 lg:h-72 object-cover rounded-full hover:transition-all duration-1000  hover:scale-110' />
                </div>

            </div>
        </div>
    )
}

export default Profile