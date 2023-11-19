import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6'

const FAQs = () => {

    const [faq1, setFaq1] = useState(false)
    const [faq2, setFaq2] = useState(false)
    const [faq3, setFaq3] = useState(false)

    return (
        <div className=' w-full flex flex-col md:flex-row justify-center items-center text-white mt-64 md:mt-20 lg:mt-32 '>
            <div className='flex flex-col justify-center items-center w-full md:w-1/2 m-auto p-3'>
                <div>
                    <img src="https://images.pexels.com/photos/285814/pexels-photo-285814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Why Choose Us Image" className='w-full lg:w-[70%] p-4 rounded-md object-contain m-auto blur-[1px]' />
                </div>
                <div className='w-full lg:w-[70%] p-3'>
                    <h1 className='text-center font-bold text-xl md:text-2xl py-3'>Why Choose Me For Your Next Project?</h1>
                    <div className='py-2 p-3 md:p-3'>
                        <h1 className='font-medium text-lg '>Responsive and Scalable Solutions</h1>
                        <p className='font-thin'>I excel in delivering responsive solutions through React and CSS media queries. Leveraging Node.js, Express.js, and MongoDB, I ensure scalability, enabling applications to seamlessly accommodate increased traffic, data, and features without compromising performance or user experience.
                        </p>
                    </div>
                    <div className='py-2 p-3 md:p-3'>
                        <h1 className='font-medium text-lg '>Custom Solutions</h1>
                        <p className='font-thin'> I craft software precisely tailored to your unique needs, ensuring maximum efficiency and productivity. By customizing every aspect, I create software that optimally aligns with your objectives, enhancing your operations and delivering targeted results. </p>
                    </div>
                </div>
            </div>



            <div className='w-full p-3 text-center  md:w-1/2 flex flex-col items-start justify-center  '>
                <h1 className='font-bold text-2xl md:text-3xl m-auto pt-4 md:py-2'>Frequently Asked Question</h1>
                <div className='py-2 w-[90%] m-auto '>
                    <div className='flex text-start justify-between items-center hover:bg-gray-700 500 cursor-pointer p-2 m-auto' onClick={() => setFaq1(!faq1)}>
                        <h1 className='border-b-2 font-bold text-lg border-[#ff5823]'>What is a MERN developer, and what services do you offer?</h1>
                        {faq1 ? <FaAngleUp /> : <FaAngleDown className='text-lg' />}
                    </div>
                    {faq1 && <p className='font-thin text-start p-2 '>A MERN developer specializes in creating web applications using the MERN stack, which includes MongoDB, Express.js, React, and Node.js. I offer full-stack development services, from database design to front-end development and everything in between.</p>}
                </div>
                <div className='py-2 w-[90%] m-auto'>
                    <div className='flex text-start  justify-between items-center hover:bg-gray-700 500 cursor-pointer p-2 m-auto' onClick={() => setFaq2(!faq2)}>
                        <h1 className='border-b-2 font-bold text-lg border-[#ff5823]'>What makes your MERN development services unique?</h1>
                        {faq2 ? <FaAngleUp /> : <FaAngleDown className='text-lg' />}
                    </div>
                    {faq2 && <p className='font-thin text-start p-2 '>What sets me apart is my extensive experience and expertise in the MERN stack. I focus on creating custom, responsive, and scalable web applications that align with each client's specific needs.</p>}
                </div>
                <div className='py-2 w-[90%] m-auto'>
                    <div className='flex text-start justify-between items-center hover:bg-gray-700 500 cursor-pointer p-2 m-auto' onClick={() => setFaq3(!faq3)}>
                        <h1 className='border-b-2 font-bold text-lg border-[#ff5823]'>How do you ensure the security of web applications you develop?</h1>
                        {faq3 ? <FaAngleUp /> : <FaAngleDown className='text-lg' />}
                    </div>
                    {faq3 && <p className='font-thin text-start p-2'>Security is a top priority. I follow industry best practices and implement robust security measures, including data encryption, authentication, and authorization, to protect against vulnerabilities and breaches.</p>}
                </div>

                {/* <div className='py-2 w-[90%]'>
                    <div className='flex justify-between items-center hover:bg-gray-700 500 cursor-pointer p-2' onClick={()=> setFaq2(!faq2)}>
                        <h1 className='border-b-2 font-bold text-lg border-[#ff5823]'></h1>
                        {faq2 ? <FaAngleUp /> : <FaAngleDown className='text-lg'/>}
                    </div>
                    {faq2 && <p></p>}
                </div>
                <div className='py-2 w-[90%]'>
                    <div className='flex justify-between items-center hover:bg-gray-700 500 cursor-pointer p-2' onClick={()=> setFaq3(!faq3)}>
                        <h1 className='border-b-2 font-bold text-lg border-[#ff5823]'></h1>
                        {faq3 ? <FaAngleUp /> : <FaAngleDown className='text-lg'/>}
                    </div>
                    {faq3 && <p></p>}
                </div> */}

            </div>
        </div>
    )
}

export default FAQs