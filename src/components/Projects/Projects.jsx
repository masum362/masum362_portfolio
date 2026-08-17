import { useState } from "react";
import item1 from "../../assets/amazon-clone-website.png";
import item2 from "../../assets/amar-cokh-website.png";
import item3 from "../../assets/nexcent-website.png";
import item4 from "../../assets/mindlinker thumbnail.png";
import item5 from "../../assets/academy-cloud-thumbnail.png";
import item6 from "../../assets/favtech-thumbnail.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowUpRight, GitBranchPlus } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  // const responsive = {
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3,
  //     slidesToSlide: 3, // optional, default to 1.
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2,
  //     slidesToSlide: 2, // optional, default to 1.
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //     slidesToSlide: 1, // optional, default to 1.
  //   },
  // };

  const Projects = [
    {
      id: 4,
      name: "MindLinker Social Media",
      desc: "MindLinker Social Media is your go-to platform for connecting with friends, sharing life's moments, and discovering new trends. With a user-friendly interface and intuitive features,like and comment on posts. MindLinker Social Media is where your digital social life comes to life!",
      img: item4,
      category: "e commerce",
      gihubLink: "https://github.com/masum362/MINDLINKER_social_media",
      liveLink: "https://mindlinker.netlify.app/",
    },
    {
      id: 5,
      name: "AcademyCloud Your Library",
      desc: "Our platform boasts an extensive collection of books spanning various genres, subjects, and age groups.Our intuitive book borrowing process ensures that you can find, reserve, and check out your desired books with just a few clicks. anyone can add a book and also borrow a book ",
      img: item5,
      category: "education",
      gihubLink: "https://github.com/masum362/academyCloud",
      liveLink: "https://academycloud-6112d.web.app/",
    },
    {
      id: 6,
      name: "FavTech Product Hunt",
      desc: "Join our vibrant community of innovators and early adopters. Explore, upvote, and support the latest products and groundbreaking ideas shaping the future.add your product in our website and promote it freely. Your next favorite discovery is just a click away!",
      img: item6,
      category: "technology",
      gihubLink: "https://github.com/masum362/favtech-client",
      liveLink: "https://producthunt-lite.web.app/",
    },
    {
      id: 1,
      name: "Amazon Clone",
      desc: "It includes user authentication for registration and login, product listings with details and categorization, a robust search function, and individual product pages displaying comprehensive information and customer reviews.awesome user interface that can attract users. ",
      img: item1,
      gihubLink: "https://github.com/masum362/E_Commerce_Website_Amazon_clone",
      liveLink: "https://amazon-clone-by-msquare.netlify.app",
      category: "e commerce",
    },

    {
      id: 2,
      name: "Amar Cokh",
      desc: "Our platform delivers a curated selection of the latest news, offering a blend of local and global perspectives. From politics and technology to entertainment and health, we keep you up-to-date with insightful articles, expert analyses, and engaging multimedia content.",
      img: item2,
      gihubLink: "https://github.com/masum362/News_blog",
      liveLink: "https://news-paper-client.netlify.app",
      category: "e commerce",
    },
    {
      id: 3,
      name: "Nexcent Agency",
      desc: "  Our team of dedicated professionals is committed to delivering innovative solutions tailored to your unique needs. From concept to execution, we fuse creativity with strategic insight to elevate your brand and achieve extraordinary results",
      img: item3,
      gihubLink: "https://github.com/masum362/NEXCENT-agency-website",
      liveLink: "https://nexcent-agency-web.netlify.app",

      category: "e commerce",
    },
  ];

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#25263b] px-5 py-24 text-white md:px-10 lg:px-16"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-[-150px] top-[20%] h-[350px] w-[350px] rounded-full bg-orange-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-[-150px] right-[-100px] h-[350px] w-[350px] rounded-full bg-orange-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
            My Work
          </p>

          <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            Featured <span className="text-orange-500">Projects</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 md:text-base">
            A collection of projects I've built using modern web technologies,
            focusing on performance, usability and clean user experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {Projects.map((project) => (
            <article
              key={project.id}
              className="
                group
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-white/[0.045]
                backdrop-blur-md
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-orange-500/40
                hover:shadow-[0_25px_70px_rgba(249,115,22,0.12)]
              "
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.name}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />

                {/* Image Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    bg-black/60
                    opacity-0
                    transition-all
                    duration-300
                    group-hover:opacity-100
                  "
                >
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-full
                      bg-orange-500
                      px-5
                      py-2.5
                      text-sm
                      font-semibold
                      text-white
                      transition
                      hover:bg-orange-600
                    "
                  >
                    View Project
                    <ArrowUpRight size={17} />
                  </a>
                </div>

                {/* Category */}
                <span
                  className="
                    absolute
                    left-4
                    top-4
                    rounded-full
                    border
                    border-white/10
                    bg-black/50
                    px-3
                    py-1.5
                    text-xs
                    font-medium
                    capitalize
                    text-white
                    backdrop-blur-md
                  "
                >
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-3 flex items-start justify-between gap-3">
                  <h3 className="text-xl font-bold leading-tight text-white transition-colors duration-300 group-hover:text-orange-500">
                    {project.name}
                  </h3>

                  <ArrowUpRight
                    size={20}
                    className="
                      shrink-0
                      text-gray-500
                      transition-all
                      duration-300
                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                      group-hover:text-orange-500
                    "
                  />
                </div>

                <p className="line-clamp-4 text-sm leading-6 text-gray-400">
                  {project.desc}
                </p>

                {/* Divider */}
                <div className="my-5 h-px bg-white/10" />

                {/* Buttons */}
                <div className="flex items-center gap-3">
                  <a
                    href={project.gihubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-lg
                      border
                      border-white/10
                      bg-white/[0.04]
                      px-4
                      py-2.5
                      text-sm
                      font-medium
                      text-gray-300
                      transition-all
                      duration-300
                      hover:border-orange-500/40
                      hover:bg-white/10
                      hover:text-white
                    "
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      flex-1
                      items-center
                      justify-center
                      gap-2
                      rounded-lg
                      bg-orange-500
                      px-4
                      py-2.5
                      text-sm
                      font-semibold
                      text-white
                      transition-all
                      duration-300
                      hover:bg-orange-600
                      hover:shadow-[0_8px_25px_rgba(249,115,22,0.3)]
                    "
                  >
                    Live Demo
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

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

export default Projects;
