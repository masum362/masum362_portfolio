import React from "react";
import { FaPencil, FaGlobe, FaGear, FaArrowRight } from "react-icons/fa6";

const Work = () => {
  const services = [
    {
      id: 1,
      icon: <FaPencil />,
      title: "Design",
      description:
        "I create clean, modern, and user-friendly interfaces where every element has a purpose. My focus is on creating seamless user journeys that combine aesthetics with usability.",
      technologies: ["UI/UX", "Figma", "Responsive Design"],
    },
    {
      id: 2,
      icon: <FaGlobe />,
      title: "Development",
      description:
        "I transform ideas and designs into fast, responsive, and scalable web applications using modern frontend and backend technologies.",
      technologies: ["React", "Node.js", "MongoDB"],
    },
    {
      id: 3,
      icon: <FaGear />,
      title: "Maintenance",
      description:
        "I keep websites and applications reliable, secure, and up to date. From fixing bugs to improving performance, I make sure your project keeps running smoothly.",
      technologies: ["Bug Fixing", "Optimization", "Updates"],
    },
  ];

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#25263b] px-5 py-24 text-white md:px-10 lg:px-16"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-orange-500/10 blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-orange-500/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
            What I Do
          </p>

          <h2 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
            Services I Can{" "}
            <span className="text-orange-500">Provide</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 md:text-base">
            From creating beautiful interfaces to developing powerful web
            applications, I help turn ideas into reliable digital
            experiences.
          </p>
        </div>

        {/* Services */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-white/[0.04]
                p-7
                backdrop-blur-md
                transition-all
                duration-500
                hover:-translate-y-3
                hover:border-orange-500/40
                hover:bg-white/[0.06]
                hover:shadow-[0_25px_70px_rgba(249,115,22,0.12)]
              "
            >
              {/* Card Glow */}
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
                  transition-all
                  duration-500
                  group-hover:bg-orange-500/20
                "
              />

              {/* Number */}
              <span className="absolute right-6 top-5 text-5xl font-bold text-white/[0.04]">
                0{service.id}
              </span>

              {/* Icon */}
              <div
                className="
                  relative
                  mb-7
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-orange-500/20
                  bg-orange-500/10
                  text-xl
                  text-orange-500
                  transition-all
                  duration-300
                  group-hover:border-orange-500
                  group-hover:bg-orange-500
                  group-hover:text-white
                "
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="relative mb-4 text-2xl font-bold transition-colors duration-300 group-hover:text-orange-500">
                {service.title}
              </h3>

              {/* Description */}
              <p className="relative min-h-[125px] text-sm leading-7 text-gray-400">
                {service.description}
              </p>

              {/* Technologies */}
              <div className="relative mt-6 flex flex-wrap gap-2">
                {service.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.04]
                      px-3
                      py-1.5
                      text-xs
                      text-gray-400
                      transition-colors
                      duration-300
                      group-hover:border-orange-500/20
                    "
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Bottom Link */}
              <div className="relative mt-7 border-t border-white/10 pt-5">
                <button
                  className="
                    flex
                    items-center
                    gap-2
                    text-sm
                    font-semibold
                    text-gray-300
                    transition-all
                    duration-300
                    group-hover:gap-3
                    group-hover:text-orange-500
                  "
                >
                  Learn More
                  <FaArrowRight className="text-xs" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;