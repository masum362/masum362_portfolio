import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FaGraduationCap } from "react-icons/fa";


import { motion, useScroll } from 'framer-motion'

const About = () => {
  const Myskill = [
    {
      name: 'HTML',
    },
    {
      name: 'CSS',
    },
    {
      name: 'JavaScript',
    },
    {
      name: 'Bootstrap ',
    },
    {
      name: 'Tailwind',
    },
    {
      name: 'React',
    },
    {
      name: 'NodeJs',
    },
    {
      name: 'ExpressJs',
    },
    {
      name: 'MongoDB',
    },
  ]

  const myTools = [
    {
      name: "Git"
    },
    {
      name: "Github"
    },
    {
      name: "VS Code"
    },
    {
      name: 'Illustrator',
    },
    {
      name: 'Photoshop',
    },
    {
      name: 'Canva',
    },
    {
      name: 'Figma',
    },
  ]


  return (
    <div id='about' className=' mt-24 text-white flex flex-col md:flex-row md:justify-center items-center w-[90%]  m-auto py-2  '>

      <motion.div
        initial={{ translateX: '-150px' }}
        transition={{ duration: 1 }}
        whileInView={{ translateX: '0px' }}
        className="text w-full lg:w-1/2 p-4 ">
        <h1 className='text-center text-3xl font-bold '>About Myself</h1>
        <hr className=' lg:w-[40%] text-center m-auto mt-2' />

        <p className='w-[90%] lg:w-[80%] m-auto text-start  mt-5'>Hello, I'm Md. Masum Ahmed, a dynamic and enthusiastic individual currently based in the vibrant country of Bangladesh. I am passionate about technology and thrive on building innovative solutions. As a skilled Full Stack Web Developer, I enjoy bringing ideas to life through coding and design. Excited to contribute to the world of technology and make a positive impact.</p>
      </motion.div>


      <div className="progress-bar w-full lg:w-1/2 grid grid-cols-1 gap-4 mt-5 md:mt-0 ">


        {/* {Myskill.map(skill => {

          return <div key={skill.name} className='container  w-full'>
            <div className='flex  md:flex-row  items-center justify-center w-full  gap-1 py-1'>
              <h3>{skill.name}</h3>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <motion.div 
                initial={{ width: `0px` }} 
                // animate={{ width: `${skill.Percentage}` }} 
                transition={{ duration: 0.5 }}
                whileInView={{width: `${skill.Percentage}` }}

                className="bg-[#fdded4] h-2.5 rounded-full" ></motion.div>

              </div>
              <h3>{skill.Percentage}</h3>
            </div>
          </div>
        })} */}

        <Tabs className={''}>
          <TabList className={"flex items-center justify-center gap-4 w-full"}>
            <Tab><h1 className='font-bold cursor-pointer'>Technology</h1></Tab>
            <Tab>Tools</Tab>
            <Tab>Education</Tab>
          </TabList>

          <TabPanel>
            <div>
              {Myskill.map(skill => (
                <button className='btn bg-transparent border-2 border-[#ff5823] duration-300 px-4 p-2 font-bold m-2 text-white rounded-lg hover:bg-[#ff5823] capitalize'>{skill.name}</button>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              {myTools.map(skill => (
                <button className='btn bg-transparent border-2 border-[#ff5823] duration-300 px-4 p-2 font-bold m-2 text-white rounded-lg hover:bg-[#ff5823] capitalize'>{skill.name}</button>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className='flex items-center gap-4 w-full '>
              <FaGraduationCap size={36} />
              <div className='w-full'>
                <h1 className='text-lg lg:text-3xl font-bold'>Diploma in Engineering(CSE)</h1>
                <p>Moulvibazar Polytechnic Institute</p>
                <span>2019-2023</span>
              </div>
            </div>
          </TabPanel>
        </Tabs>

      </div>
    </div>
  )
}

export default About