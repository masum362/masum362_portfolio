import img from "../../assets/masum-profile.png";
import pdf from "../../assets/masum-resume.pdf";

import {
  FaFacebook,
  FaSquareInstagram,
  FaYoutube,
  FaSquareTwitter,
} from "react-icons/fa6";

import {
  FaGithub,
  FaLinkedinIn,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiTypescript,
} from "react-icons/si";

import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Send,
  Code2,
} from "lucide-react";

import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Particls from "../../particles/Particles";

const Profile = () => {
  const socialLinks = [

    {
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/masum362",
    },
    
    {
      icon: <FaFacebook />,
      link: "https://www.facebook.com/md.masum.ahmed.mk",
    },
    {
      icon: <FaSquareInstagram />,
      link: "https://www.instagram.com/masum362ig",
    },
    {
      icon: <FaYoutube />,
      link: "https://www.youtube.com/@HappyEnding360",
    },
    {
      icon: <FaSquareTwitter />,
      link: "https://twitter.com/masum362",
    },
    {
      icon: <FaGithub />,
      link: "https://github.com/masum362",
    },
  ];

  const technologies = [
    {
      name: "React",
      icon: <FaReact />,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
    },
    {
      name: "Express",
      icon: <SiExpress />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
    },
  ];

  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#25263b]
        px-5
        text-white
        md:px-10
        lg:px-16
      "
    >
      {/* =========================================
          BACKGROUND
      ========================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Particle Background */}
        {/* <div className="absolute inset-0 z-0 opacity-50">
          <Particls />
        </div> */}

        {/* Main Glow */}
        <div
          className="
            absolute
            left-[-200px]
            top-[15%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-orange-500/10
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            right-[-150px]
            top-[20%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-orange-500/10
            blur-[150px]
          "
        />

        {/* Grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
            [background-size:70px_70px]
          "
        />
      </div>

      {/* =========================================
          HERO CONTENT
      ========================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          max-w-7xl
          items-center
          py-24
          lg:py-20
        "
      >
        <div
          className="
            grid
            w-full
            items-center
            gap-16
            lg:grid-cols-[1.1fr_0.9fr]
            lg:gap-10
          "
        >
          {/* =====================================
              LEFT CONTENT
          ====================================== */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            {/* Available Badge */}
            <div
              className="
                mb-6
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-green-400/20
                bg-green-400/5
                px-4
                py-2
                text-xs
                font-medium
                text-gray-300
                backdrop-blur-md
              "
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
              </span>

              Available for work
            </div>

            {/* Greeting */}
            <p className="mb-4 text-lg font-medium text-gray-300 md:text-xl">
              Hello, I'm{" "}
              <span className="font-bold text-orange-500">
                Masum Ahmed
              </span>{" "}
              👋
            </p>

            {/* Main Heading */}
            <h1
              className="
                max-w-4xl
                text-4xl
                font-extrabold
                leading-[1.1]
                tracking-tight
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
              "
            >
              Building
              <span className="text-orange-500"> Digital </span>
              Experiences That
              <span className="text-orange-500"> Matter.</span>
            </h1>

            {/* Typewriter */}
            <div className="mt-6 flex flex-wrap items-center gap-2 text-xl font-medium text-gray-300 md:text-2xl">
              <span>I'm a</span>

              <span className="text-orange-500">
                <Typewriter
                  words={[
                    "Full Stack Developer",
                    "MERN Stack Developer",
                    "Frontend Developer",
                    "JavaScript Developer",
                  ]}
                  loop={Infinity}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={45}
                  delaySpeed={1600}
                />
              </span>
            </div>

            {/* Description */}
            <p
              className="
                mt-6
                max-w-2xl
                text-sm
                leading-7
                text-gray-400
                md:text-base
                lg:text-lg
              "
            >
              I build modern, responsive and scalable web applications
              using modern frontend and backend technologies, turning ideas
              into powerful digital products.
            </p>

            {/* Social Icons */}
            <div className="mt-7 flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.04]
                    text-gray-400
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-orange-500/50
                    hover:bg-orange-500
                    hover:text-white
                  "
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:masumahmed64077@gmail.com"
                className="
                  group
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-orange-500
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  shadow-[0_10px_35px_rgba(249,115,22,0.25)]
                  transition-all
                  duration-300
                  hover:bg-orange-600
                  hover:shadow-[0_15px_45px_rgba(249,115,22,0.35)]
                "
              >
                <Send size={17} />

                Let's Talk

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href={pdf}
                download
                className="
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-gray-200
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:border-orange-500/40
                  hover:bg-white/[0.08]
                "
              >
                <Download size={17} />

                Download Resume
              </a>
            </div>

            {/* Technologies */}
            <div className="mt-10">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
                Technologies I Work With
              </p>

              <div className="flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <div
                    key={technology.name}
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-lg
                      border
                      border-white/10
                      bg-white/[0.03]
                      px-3
                      py-2
                      text-xs
                      text-gray-400
                      transition-all
                      duration-300
                      hover:border-orange-500/30
                      hover:bg-orange-500/5
                      hover:text-orange-500
                    "
                  >
                    <span className="text-sm">
                      {technology.icon}
                    </span>

                    {technology.name}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* =====================================
              RIGHT PROFILE IMAGE
          ====================================== */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.9,
              delay: 0.2,
            }}
            className="order-1 flex justify-center lg:order-2"
          >
            <div className="relative">
              {/* Large Glow */}
              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[300px]
                  w-[300px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-orange-500/20
                  blur-[100px]
                  md:h-[420px]
                  md:w-[420px]
                "
              />

              {/* Outer Ring */}
              <div
                className="
                  absolute
                  inset-[-20px]
                  rounded-full
                  border
                  border-orange-500/10
                  md:inset-[-30px]
                "
              />

              {/* Animated Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  inset-[-12px]
                  rounded-full
                  border
                  border-dashed
                  border-orange-500/40
                  md:inset-[-18px]
                "
              />

              {/* Profile Container */}
              <div
                className="
                  relative
                  h-64
                  w-64
                  rounded-full
                  border
                  border-white/20
                  bg-white/5
                  p-2
                  shadow-[0_0_80px_rgba(249,115,22,0.15)]
                  backdrop-blur-sm
                  sm:h-72
                  sm:w-72
                  md:h-80
                  md:w-80
                "
              >
                <img
                  src={img}
                  alt="Md. Masum Ahmed"
                  className="
                    h-full
                    w-full
                    rounded-full
                    object-cover
                  "
                />
              </div>

              {/* Floating Developer Badge */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  -bottom-3
                  left-1/2
                  flex
                  -translate-x-1/2
                  items-center
                  gap-2
                  whitespace-nowrap
                  rounded-full
                  border
                  border-white/10
                  bg-[#25263b]/80
                  px-4
                  py-2.5
                  text-xs
                  font-semibold
                  text-gray-200
                  shadow-xl
                  backdrop-blur-xl
                "
              >
                <Code2 className="text-orange-500" size={17} />

                Full Stack Developer
              </motion.div>

              {/* Floating Code Icon */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  -right-4
                  top-10
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-orange-500/20
                  bg-[#25263b]/80
                  text-orange-500
                  shadow-xl
                  backdrop-blur-xl
                "
              >
                <FaReact size={22} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* =========================================
          BOTTOM STATS
      ========================================== */}

      <div
        className="
          absolute
          bottom-8
          hidden
          items-center
          gap-10
          lg:flex
          
        "
      >
        <div className="text-center">
          <h3 className="text-xl font-bold text-orange-500">
            15+
          </h3>
          <p className="text-xs text-gray-500">
            Projects
          </p>
        </div>

        <div className="h-8 w-px bg-white/10" />

        <div className="text-center">
          <h3 className="text-xl font-bold text-orange-500">
            10+
          </h3>
          <p className="text-xs text-gray-500">
            Technologies
          </p>
        </div>

        <div className="h-8 w-px bg-white/10" />

        <div className="text-center">
          <h3 className="text-xl font-bold text-orange-500">
            100%
          </h3>
          <p className="text-xs text-gray-500">
            Passion
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-6
          right-8
          hidden
          flex-col
          items-center
          gap-2
          text-gray-500
          lg:flex
        "
      >
        <ArrowDown size={16} />

        <span className="text-[10px] uppercase tracking-[0.2em]">
          Scroll
        </span>
      </motion.div>
    </section>
  );
};

export default Profile;