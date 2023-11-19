
import { useState } from 'react'
import item1 from '../../assets/_129408815_mediaitem129408814.jpg'

const Projects = () => {



  const Projects = [
    {
      id: 1,
      name: "E-commerce Wesbite",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: item1,
      category: 'e commerce',
    },

    {
      id: 2,
      name: "E-commerce Wesbite",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: item1,
      category: 'e commerce',
    },
    {
      id: 3,
      name: "E-commerce Wesbite",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: item1,
      category: 'e commerce',
    },
    {
      id: 4,
      name: "E-commerce Wesbite",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: item1,
      category: 'e commerce',
    },

    {
      id: 51,
      name: "E-commerce Wesbite",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: item1,
      category: 'e commerce',
    },

    {
      id: 6,
      name: "E-commerce Wesbite",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: item1,
      category: 'e commerce',
    },


  ]



  return (
    <div className='md:mt-[60%] lg:mt-[20%] text-white w-full flex flex-col gap-10 justify-center items-center text-center mb-2'>
      <div className='w-full p-2'>
        <h1 className='font-bold text-3xl p-2 '>Recent Projects</h1>
        <p className='p-2 font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, recusandae aspernatur. </p>
      </div>
      <div className="projects grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  w-[100%] text-center p-3">
        {Projects.map(project => {
          return <div
    
          key={project.id}
            className="item1 bg-center bg-cover bg-no-repeat  w-72 h-72 md:w-60 md:h-52 lg:w-80 lg:h-72
            rounded-xl flex justify-end flex-col items-center  border-white hover:border-2 transition-all duration-150 cursor-pointer m-auto my-3 "
            style={{ backgroundImage: `url(${project.img})` }}>
            <div className='opacity-80 hover:bg-[#25263A] h-full flex  flex-col justify-end items-center '>

              <h1 className='font-bold md:text-lg lg:text-2xl text-[#ff5823] '>{project.name}</h1>
              <p className=' pb-2 text-white md:text-sm lg:text-base font-thin'>{project.desc}</p>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default Projects