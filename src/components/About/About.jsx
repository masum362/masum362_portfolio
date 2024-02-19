import React from 'react'

import { motion, useScroll } from 'framer-motion'

const About = () => {
  const Myskill = [
    {
      name: 'HTML',
      Percentage: '99%'
    },
    {
      name: 'CSS',
      Percentage: '95%'
    },
    {
      name: 'JavaScript',
      Percentage: '90%'
    },
    {
      name: 'Bootstrap ',
      Percentage: '75%'
    },
    {
      name: 'Tailwind',
      Percentage: '95%'
    },
    {
      name: 'React',
      Percentage: '90%'
    },
    {
      name: 'NodeJs',
      Percentage: '85%'
    },
    {
      name: 'ExpressJs',
      Percentage: '80%'
    },
    {
      name: 'MongoDB',
      Percentage: '90%'
    },
    {
      name: 'Illustrator',
      Percentage: '70%'
    },
    {
      name: 'Photoshop',
      Percentage: '65%'
    },
    {
      name: 'Canva',
      Percentage: '90%'
    },
    {
      name: 'Figma',
      Percentage: '65%'
    },
  ]


  return (
    <div id='about' className=' mt-24 text-white flex flex-col md:flex-row md:justify-center items-center w-[90%]  m-auto py-3 '>

      <motion.div
      initial={{translateX:'-150px'}}
      transition={{ duration: 1 }}
      whileInView={{translateX:'0px' }}
      className="text w-full lg:w-1/2 p-4 ">
        <h1 className='text-center text-3xl font-bold '>About Myself</h1>
        <hr className=' lg:w-[40%] text-center m-auto mt-2' />

        <p className='w-[90%] lg:w-[80%] m-auto text-start  mt-5'>Hello, I'm Md. Masum Ahmed, a dynamic and enthusiastic individual currently based in the vibrant country of Bangladesh. I am passionate about technology and thrive on building innovative solutions. As a skilled Full Stack Web Developer, I enjoy bringing ideas to life through coding and design. Excited to contribute to the world of technology and make a positive impact.</p>
      </motion.div>


      <div className="progress-bar w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2  gap-4 mt-5 md:mt-0 ">


        {Myskill.map(skill => {

          return <div key={skill.name} className='container  w-full'>
            <div className='flex  md:flex-row  items-center justify-center w-full  gap-1 py-1'>
              <h3>{skill.name}</h3>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <motion.div 
                initial={{ width: `0px` }} 
                // animate={{ width: `${skill.Percentage}` }} 
                transition={{ duration: 0.5 }}
                whileInView={{width: `${skill.Percentage}` }}

                className="bg-[#ff5823] h-2.5 rounded-full" ></motion.div>

              </div>
              <h3>{skill.Percentage}</h3>
            </div>
          </div>
        })}

      </div>
    </div>
  )
}

export default About