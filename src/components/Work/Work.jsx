import React from 'react'
import {FaPencil,FaGlobe,FaGear} from 'react-icons/fa6'
const Work = () => {
    return (
        <div className='w-full mt-10 py-10 relative animate-fade-left'>
            <img className='w-[90%] object-cover m-auto h-96 drop-shadow-md blur-[5px] rounded-lg' src="https://images.unsplash.com/photo-1519074002996-a69e7ac46a42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80 " alt="What can i do for you" />
            <h1 className='text-xl absolute top-[15%] left-[15%] sm:top-[14%] sm:left-[25%] md:top-[40%] md:left-[35%] w-full font-bold text-white sm:text-3xl drop-shadow-md'>This Is What Can I Do For You</h1>
            <div className="works grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  w-[70%] m-auto gap-5 relative md:absolute md:top-[60%] md:left-[15%] md:mb-20">

                <div className='bg-white p-2 m-2 rounded-lg flex flex-col items-center justify-center text-center'>
                    <h1 className='p-2 font-bold text-xl text-[#ff5823]'>Design</h1>
                    <p className='p-2 font-thin text-lg '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores fuga itaque cumque nam dolore voluptate quae deserunt aliquam, possimus similique ab ullam rerum corporis dicta?</p>
                </div>
                <div className='bg-white p-2 m-2 rounded-lg flex flex-col items-center justify-center text-center'>
                    <h1 className='p-2 font-bold text-xl text-[#ff5823]'>Development</h1>
                    <p className='p-2 font-thin text-lg '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores fuga itaque cumque nam dolore voluptate quae deserunt aliquam, possimus similique ab ullam rerum corporis dicta?</p>
                </div>
                <div className='bg-white p-2 m-2 rounded-lg flex flex-col items-center justify-center text-center'>
                    <h1 className='p-2 font-bold text-xl text-[#ff5823]'>Maintainance</h1>
                    <p className='p-2 font-thin text-lg '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores fuga itaque cumque nam dolore voluptate quae deserunt aliquam, possimus similique ab ullam rerum corporis dicta?</p>
                </div>
            </div>
        </div>
    )
}

export default Work