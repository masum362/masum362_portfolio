import React, { useEffect, useState } from 'react';
// import Typical from 'react-typical'
import './profile.css'
import img from "../../assets/passport size photo.jpg"
import { FaFacebook, FaSquareInstagram, FaSquareTwitter, FaYoutube } from 'react-icons/fa6'

const Profile = () => {

    const [text, setText] = useState("Freelancer")


    // const TextArray = [
    //     "Youtuber",
    //     "Designer",
    //     "Developer",
    // ]

    useEffect(() => {
        animationText();
        setInterval(() => {
            animationText()
        }, 8000);
    }, [])



    const animationText = () => {

        setTimeout(() => {
            setText("Youtuber");
        }, 2000);
        setTimeout(() => {
            setText("Designer");
        }, 4000);
        setTimeout(() => {
            setText("Developer");
        }, 6000);
        setTimeout(() => {
            setText("Freelancer");
        }, 8000);


    }


    return (
        <div className='flex flex-col  mt-24 md:mt-0 md:flex-row  md:justify-between items-center w-full lg:mt-24  md:h-[80%] '>
            <div className='w-full sm:w-2/3 flex flex-col justify-center items-center '>
                <div className='flex justify-start items-center gap-1 text-white py-2 sm:py0 '>
                    <FaFacebook className='cursor-pointer hover:border border-[#ff5823] rounded-full text-xl transition-all hover:scale-110' />
                    <FaSquareInstagram className='cursor-pointer hover:border border-[#ff5823] rounded-full text-xl transition-all hover:scale-110' />
                    <FaYoutube className='cursor-pointer hover:border border-[#ff5823] rounded-full text-xl transition-all hover:scale-110' />
                    <FaSquareTwitter className='cursor-pointer hover:border border-[#ff5823] rounded-full text-xl transition-all hover:scale-110' />
                </div>
                <div className='text-white flex flex-col items-center justify-center gap-3 '>
                    <span className='font-bold text-2xl'>Hello, I'M <span className='text-[#ff5823]'>Masum</span></span>

                    <div className="container flex justify-center items-center ">

                        <span className='text first-text text-3xl lg:text-5xl font-medium z-20'>I'm a  <span className='text second-text'>{text}</span></span>

                    </div>

                    <p className='lg:text-xl text-center'>Knack of of building applications with front and back end operations</p>
                    <div className='flex justify-between items-center gap-3 '>
                        <button className='bg-transparent px-4 sm:px-8 border hover:border-[#ff5823] py-3 rounded-3xl font-medium transition-all delay-75'>Hire Me</button>
                        <button className='bg-transparent px-4 lg:px-8 py-3 rounded-3xl text-[#ff5823] font-medium hover:bg-[#ff5823] hover:text-white transition-all delay-75 '>Get Resume</button>
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