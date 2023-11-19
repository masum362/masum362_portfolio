import React from 'react'

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
    <div className=' mt-24 text-white flex flex-col md:flex-row md:justify-center items-center w-[90%]  m-auto py-3 '>
      <div className="text w-full lg:w-1/2 p-4 ">
        <h1 className='text-center text-3xl font-bold '>About Myself</h1>
        <hr className=' lg:w-[40%] text-center m-auto mt-2' />

        <p className='w-[90%] lg:w-[80%] m-auto text-start line-clamp-10 mt-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, itaque consectetur porro illum dolor magni numquam quidem doloremque odio eum recusandae veniam nihil id nemo quisquam corporis necessitatibus sunt voluptatibus quae assumenda molestiae ex. Alias architecto, accusantium quo natus consectetur a beatae ratione sapiente ipsam aliquid quam consequuntur animi saepe dolorum quibusdam ea amet aliquam id sunt sed reiciendis. Vitae, enim! Iure fuga</p>
      </div>

      <div className="progress-bar w-full lg:w-1/2 grid grid-cols-2  gap-4 mt-5 md:mt-0 ">


        {Myskill.map(skill => {

          return <div key={skill.name} className='container  w-full'>
            <div className='flex  items-center justify-center w-full  gap-1 py-1'>
              <h3>{skill.name}</h3>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-[#ff5823] h-2.5 rounded-full" style={{ width: `${skill.Percentage}` }}></div>
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