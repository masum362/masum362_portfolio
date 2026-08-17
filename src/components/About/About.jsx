import React from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCode,
  FaBriefcase,
  FaCheck,
} from "react-icons/fa6";

const About = () => {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "GitHub Actions",
    "Docker",
    "Deployment",
  ];

  const experiences = [
    {
      role: "Frontend Developer",
      company: "Laara Group",
      location: "Nairobi, Kenya",
      duration: "Aug 2024 — Feb 2025",
      current: false,
    },
    {
      role: "Full Stack Developer",
      company: "Mastrus IT",
      location: "Moulvibazar, Sylhet",
      duration: "July 2025 — Present",
      current: true,
    },
  ];

  return (
    <section
      id="about"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#25263b]
        px-4
        py-20
        text-white
        sm:px-6
        md:px-8
        lg:px-10
        xl:px-12
      "
    >
      {/* ================================
          BACKGROUND GLOW
      ================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-20
          h-72
          w-72
          rounded-full
          bg-orange-500/10
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-20
          h-72
          w-72
          rounded-full
          bg-orange-500/10
          blur-[120px]
        "
      />

      <div className="relative mx-auto w-full max-w-6xl">

        {/* =================================
            SECTION HEADING
        ================================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 w-full max-w-3xl text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-orange-500 sm:text-sm">
            About Me
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Get To Know{" "}
            <span className="text-orange-500">
              Me
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            A passionate developer focused on building modern,
            scalable and user-friendly web applications.
          </p>
        </motion.div>

        {/* =================================
            ABOUT + TECHNOLOGIES
        ================================= */}

        <div className="grid w-full min-w-0 grid-cols-1 gap-6 lg:grid-cols-2">

          {/* =================================
              WHO I AM
          ================================= */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              relative
              min-w-0
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-white/[0.04]
              p-5
              backdrop-blur-md
              sm:p-7
              lg:p-8
            "
          >
            <div
              className="
                pointer-events-none
                absolute
                -right-16
                -top-16
                h-32
                w-32
                rounded-full
                bg-orange-500/10
                blur-3xl
              "
            />

            <div
              className="
                mb-5
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                border
                border-orange-500/20
                bg-orange-500/10
                text-orange-500
              "
            >
              <FaCode />
            </div>

            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
              Who I Am
            </p>

            <h3 className="text-2xl font-bold sm:text-3xl">
              I'm a Full Stack{" "}
              <span className="text-orange-500">
                Web Developer
              </span>
            </h3>

            <div className="mt-5 space-y-4 text-sm leading-7 text-gray-400 sm:text-base">
              <p>
                Hello, I'm{" "}
                <span className="font-semibold text-white">
                  Md. Masum Ahmed
                </span>
                , a passionate web developer from Bangladesh.
                I enjoy turning ideas into functional and
                engaging digital experiences.
              </p>

              <p>
                I work with modern frontend and backend
                technologies to build responsive, scalable and
                user-friendly web applications.
              </p>

              <p>
                I enjoy solving problems, learning new
                technologies and creating applications that are
                reliable and easy to maintain.
              </p>
            </div>

            {/* Stats */}

            <div className="mt-7 grid grid-cols-2 gap-3 sm:gap-4">

              <div
                className="
                  rounded-xl
                  border
                  border-white/10
                  bg-black/10
                  p-4
                  transition
                  hover:border-orange-500/30
                "
              >
                <h4 className="text-xl font-bold text-orange-500 sm:text-2xl">
                  MERN
                </h4>

                <p className="mt-1 text-xs leading-5 text-gray-500 sm:text-sm">
                  Full Stack Development
                </p>
              </div>

              <div
                className="
                  rounded-xl
                  border
                  border-white/10
                  bg-black/10
                  p-4
                  transition
                  hover:border-orange-500/30
                "
              >
                <h4 className="text-xl font-bold text-orange-500 sm:text-2xl">
                  10+
                </h4>

                <p className="mt-1 text-xs leading-5 text-gray-500 sm:text-sm">
                  Technologies
                </p>
              </div>

            </div>
          </motion.div>

          {/* =================================
              TECHNOLOGIES + EDUCATION
          ================================= */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="min-w-0 space-y-6"
          >

            {/* Technologies */}

            <div
              className="
                min-w-0
                rounded-2xl
                border
                border-white/10
                bg-white/[0.04]
                p-5
                backdrop-blur-md
                sm:p-7
                lg:p-8
              "
            >
              <div className="mb-6 flex items-start gap-4">

                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-orange-500/10
                    text-orange-500
                  "
                >
                  <FaCode />
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
                    Tech Stack
                  </p>

                  <h3 className="mt-1 text-xl font-bold sm:text-2xl">
                    Technologies I Work With
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    Tools and technologies I use to build modern
                    web applications.
                  </p>
                </div>

              </div>

              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">

                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.25,
                      delay: index * 0.03,
                    }}
                    className="
                      group
                      min-w-0
                      rounded-lg
                      border
                      border-white/10
                      bg-white/[0.03]
                      px-2
                      py-3
                      text-center
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-orange-500/30
                      hover:bg-orange-500/10
                    "
                  >
                    <span
                      className="
                        block
                        truncate
                        text-xs
                        font-medium
                        text-gray-300
                        transition-colors
                        group-hover:text-orange-500
                        sm:text-sm
                      "
                    >
                      {skill}
                    </span>
                  </motion.div>
                ))}

              </div>
            </div>

            {/* Education */}

            <div
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/[0.04]
                p-5
                backdrop-blur-md
                sm:p-7
                lg:p-8
              "
            >
              <div className="flex gap-4">

                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-orange-500/10
                    text-orange-500
                  "
                >
                  <FaGraduationCap />
                </div>

                <div className="min-w-0 flex-1">

                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
                    Education
                  </p>

                  <h3 className="mt-1 text-lg font-bold sm:text-xl">
                    Diploma in Engineering (CSE)
                  </h3>

                  <p className="mt-2 text-sm text-gray-400">
                    Moulvibazar Polytechnic Institute
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    Computer Science & Engineering
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-2">

                    <span
                      className="
                        rounded-full
                        border
                        border-orange-500/20
                        bg-orange-500/10
                        px-3
                        py-1
                        text-xs
                        font-medium
                        text-orange-500
                      "
                    >
                      2019 — 2023
                    </span>

                    <span
                      className="
                        flex
                        items-center
                        gap-1.5
                        text-xs
                        text-gray-500
                      "
                    >
                      <FaCheck className="text-green-500" />
                      Completed
                    </span>

                  </div>

                </div>

              </div>
            </div>

          </motion.div>
        </div>

        {/* =================================
            WORK EXPERIENCE
        ================================= */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            mt-6
            rounded-2xl
            border
            border-white/10
            bg-white/[0.04]
            p-5
            backdrop-blur-md
            sm:p-7
            lg:p-8
          "
        >
          {/* Experience Header */}

          <div className="mb-8 flex items-center gap-4">

            <div
              className="
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-orange-500/10
                text-orange-500
              "
            >
              <FaBriefcase />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
                Career
              </p>

              <h3 className="mt-1 text-2xl font-bold sm:text-3xl">
                Work Experience
              </h3>
            </div>

          </div>

          {/* Timeline */}

          <div className="relative">

            {/* Vertical Line */}

            <div
              className="
                absolute
                bottom-4
                left-[19px]
                top-4
                w-px
                bg-gradient-to-b
                from-orange-500
                via-orange-500/40
                to-transparent
              "
            />

            <div className="space-y-8">

              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.company}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15,
                  }}
                  className="relative flex gap-5"
                >

                  {/* Timeline Dot */}

                  <div
                    className="
                      relative
                      z-10
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-orange-500/30
                      bg-[#25263b]
                      text-orange-500
                    "
                  >
                    <FaBriefcase className="text-sm" />
                  </div>

                  {/* Experience Card */}

                  <div
                    className="
                      min-w-0
                      flex-1
                      rounded-xl
                      border
                      border-white/10
                      bg-black/10
                      p-4
                      transition-all
                      duration-300
                      hover:border-orange-500/30
                      hover:bg-orange-500/[0.03]
                      sm:p-5
                    "
                  >

                    <div
                      className="
                        flex
                        flex-col
                        gap-3
                        sm:flex-row
                        sm:items-start
                        sm:justify-between
                      "
                    >

                      <div className="min-w-0">

                        <h4 className="text-lg font-bold sm:text-xl">
                          {experience.role}
                        </h4>

                        <p className="mt-1 text-sm font-medium text-orange-500">
                          {experience.company}
                        </p>

                        <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                          {experience.location}
                        </p>

                      </div>

                      <div className="flex shrink-0 flex-wrap items-center gap-2">

                        <span
                          className="
                            rounded-full
                            border
                            border-white/10
                            bg-white/[0.04]
                            px-3
                            py-1.5
                            text-xs
                            font-medium
                            text-gray-400
                          "
                        >
                          {experience.duration}
                        </span>

                        {experience.current && (
                          <span
                            className="
                              flex
                              items-center
                              gap-1.5
                              rounded-full
                              border
                              border-green-500/20
                              bg-green-500/10
                              px-3
                              py-1.5
                              text-xs
                              font-medium
                              text-green-400
                            "
                          >
                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
                            Current
                          </span>
                        )}

                      </div>

                    </div>

                  </div>

                </motion.div>
              ))}

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;