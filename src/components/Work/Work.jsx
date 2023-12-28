import React from 'react'
import {FaPencil,FaGlobe,FaGear} from 'react-icons/fa6'
const Work = () => {
    return (
        <div id='services' className='w-full mt-10 py-10 relative animate-fade-left  mx-auto '>
            <img className='w-[90%] object-cover m-auto h-96 drop-shadow-md blur-[5px] rounded-lg' src="https://images.unsplash.com/photo-1519074002996-a69e7ac46a42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80 " alt="What can i do for you" />
            <h1 className='text-xl absolute top-[15%] left-[15%] sm:top-[14%] sm:left-[25%] md:top-[40%] md:left-[35%] w-full font-bold text-white sm:text-3xl drop-shadow-md'>This Is What Can I Do For You</h1>
            <div className="works grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full  md:w-[80%] mx-auto gap-5 relative md:absolute md:top-[60%] md:left-[15%] md:mb-20 ">

                <div className='bg-white p-2 m-2 rounded-lg flex flex-col items-center justify-center text-center'>
                    <h1 className='p-2 font-bold text-xl text-[#ff5823]'>Design</h1>
                    <p className='p-2 font-thin text-lg  '>Welcome to my digital canvas.Explore seamless user journeys, where every pixel tells a story. Join me in crafting experiences where innovation meets elegance. Let the design speak, and let's embark on a journey where form and function coalesce seamlessly.</p>
                </div>
                <div className='bg-white p-2 m-2 rounded-lg flex flex-col items-center justify-center text-center'>
                    <h1 className='p-2 font-bold text-xl text-[#ff5823]'>Development</h1>
                    <p className='p-2 font-thin text-lg  '>sculpting lines of code into dynamic experiences. Here, innovation meets functionality, and every keystroke shapes a seamless user journey,where the virtual world comes to life with purpose and precision.</p>
                </div>
                <div className='bg-white p-2 m-2 rounded-lg flex flex-col items-center justify-center text-center'>
                    <h1 className='p-2 font-bold text-xl text-[#ff5823]'>Maintainance</h1>
                    <p className='p-2 font-thin text-lg  '>Explore worry-free online experiences with my commitment to keeping every pixel pristine and every line of code robust. Let's elevate your web presence together, ensuring it thrives with reliability and longevity.</p>
                </div>
            </div>
        </div>
    )
}

export default Work