
import { useState } from 'react'
import item1 from '../../assets/amazon-clone-website.png'
import item2 from '../../assets/amar-cokh-website.png'
import item3 from '../../assets/nexcent-website.png'
import item4 from '../../assets/mindlinker thumbnail.png'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';


const Projects = () => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };


  const Projects = [
    {
      id: 4,
      name: "MindLinker Social Media",
      desc: "MindLinker Social Media is your go-to platform for connecting with friends, sharing life's moments, and discovering new trends. With a user-friendly interface and intuitive features,like and comment on posts. MindLinker Social Media is where your digital social life comes to life!",
      img: item4,
      category: 'e commerce',
      gihubLink:"https://github.com/masum362/MINDLINKER_social_media",
      liveLink:"https://mindlinker.netlify.app/",
    },
    {
      id: 1,
      name: "Amazon Clone",
      desc: 'It includes user authentication for registration and login, product listings with details and categorization, a robust search function, and individual product pages displaying comprehensive information and customer reviews.awesome user interface that can attract users. ',
      img: item1,
      gihubLink:"https://github.com/masum362/E_Commerce_Website_Amazon_clone",
      liveLink:"https://amazon-clone-by-msquare.netlify.app",
      category: 'e commerce',
    },

    {
      id: 2,
      name: "Amar Cokh",
      desc: 'Our platform delivers a curated selection of the latest news, offering a blend of local and global perspectives. From politics and technology to entertainment and health, we keep you up-to-date with insightful articles, expert analyses, and engaging multimedia content.',
      img: item2,
      gihubLink:"https://github.com/masum362/News_blog",
      liveLink:"https://news-paper-client.netlify.app",
      category: 'e commerce',
    },
    {
      id: 3,
      name: "Nexcent Agency",
      desc: '  Our team of dedicated professionals is committed to delivering innovative solutions tailored to your unique needs. From concept to execution, we fuse creativity with strategic insight to elevate your brand and achieve extraordinary results',
      img: item3,
      gihubLink:"https://github.com/masum362/NEXCENT-agency-website",
      liveLink:"https://nexcent-agency-web.netlify.app",

      category: 'e commerce',
    },
   

  ]



  return (
    <div id='projects' className='md:mt-[60%] lg:mt-[20%] text-white w-full flex flex-col gap-10 justify-center items-center text-center mb-2'>
      <div className='w-full p-2'>
        <h1 className='font-bold text-3xl p-2 '>Recent Projects</h1>
        <p className='p-2 font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, recusandae aspernatur. </p>
      </div>
      <div className="projects mx-auto  gap-3 w-[100%] lg:w-[90%] text-center p-3 transition-all duration-300 ">

        <Carousel
          swipeable={true}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all 2"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
        
          {
            Projects.map(project => {
              return <div>
                <div key={project.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-[95%]">
                  <a >
                    <img className="rounded-t-lg" src={project.img} alt="" />
                  </a>
                  <div className="p-3">
                    <a >
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.name}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">{project.desc}</p>
                    <div className='flex justify-between items-center gap-3 '>
                        <a href={project.gihubLink} target='_blank' className='bg-[#25263A] px-4 sm:px-8 border hover:bg-[#ff5823] py-3 rounded-3xl font-medium transition-all delay-75'>Github</a>
                        <a href={project.liveLink} target='_blank' className='bg-[#ff5823] px-4 lg:px-8 py-3 rounded-3xl text-white font-medium hover:bg-[#25263A] hover:text-white transition-all delay-75 '>Preview</a>
                    </div>
                  </div>
                </div>
              </div>
            })
          }
        </Carousel>

      </div>
    </div>
  )
}



// {
//   Projects.map(project => {
//     return <div>
//       <div key={project.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-full">
//         <a >
//           <img className="rounded-t-lg" src={item1} alt="" />
//         </a>
//         <div className="p-5">
//           <a >
//             <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.name}</h5>
//           </a>
//           <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{project.desc}</p>
//           <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#ff5823] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-[#ff5823] dark:focus:ring-blue-800">
//             Read more

//           </button>
//         </div>
//       </div>
//     </div>
//   })
// }

export default Projects