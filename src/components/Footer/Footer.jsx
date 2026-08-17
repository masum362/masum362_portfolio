import React from "react";
import { FaGithub, FaLinkedinIn, FaArrowUp } from "react-icons/fa6";
import { HashLink } from "react-router-hash-link";

import img from "../../assets/shape-bg.png";

const Footer = () => {
  return (
    <footer className="relative mt-20 overflow-hidden border-t border-white/10 bg-[#25263b] text-white">
      
      {/* Background Shape */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <img
          src={img}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      {/* Orange Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-40
          w-72
          -translate-x-1/2
          rounded-full
          bg-orange-500/10
          blur-[100px]
        "
      />

      <div className="relative mx-auto max-w-7xl px-5 py-12 md:px-10 lg:px-16">

        {/* =================================
            TOP
        ================================== */}

        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

          {/* Brand */}
          <div className="text-center md:text-left">
            <HashLink
              smooth
              to="/#"
              className="text-2xl font-bold"
            >
              Masum<span className="text-orange-500">.</span>
            </HashLink>

            <p className="mt-2 max-w-sm text-sm leading-6 text-gray-500">
              Full Stack Developer passionate about building modern,
              scalable and user-friendly web applications.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 md:text-right">
              Quick Links
            </p>

            <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 md:justify-end">
              <HashLink
                smooth
                to="/#"
                className="text-sm text-gray-400 transition hover:text-orange-500"
              >
                Home
              </HashLink>

              <HashLink
                smooth
                to="#about"
                className="text-sm text-gray-400 transition hover:text-orange-500"
              >
                About
              </HashLink>

              <HashLink
                smooth
                to="#services"
                className="text-sm text-gray-400 transition hover:text-orange-500"
              >
                Services
              </HashLink>

              <HashLink
                smooth
                to="#projects"
                className="text-sm text-gray-400 transition hover:text-orange-500"
              >
                Projects
              </HashLink>

              <HashLink
                smooth
                to="#contact"
                className="text-sm text-gray-400 transition hover:text-orange-500"
              >
                Contact
              </HashLink>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-white/10" />

        {/* =================================
            BOTTOM
        ================================== */}

        <div className="flex flex-col items-center justify-between gap-5 md:flex-row">

          {/* Copyright */}
          <p className="text-center text-xs text-gray-500 md:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="font-medium text-gray-300">
              Md. Masum Ahmed
            </span>{" "}
            <span className="mx-1 text-orange-500">•</span>
            All Rights Reserved.
          </p>

          {/* Social */}
          <div className="flex items-center gap-3">

            <a
              href="https://github.com/masum362"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-lg
                border
                border-white/10
                bg-white/[0.03]
                text-gray-400
                transition-all
                duration-300
                hover:border-orange-500/30
                hover:bg-orange-500
                hover:text-white
              "
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/masum362"
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-lg
                border
                border-white/10
                bg-white/[0.03]
                text-gray-400
                transition-all
                duration-300
                hover:border-orange-500/30
                hover:bg-orange-500
                hover:text-white
              "
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            {/* Back to Top */}
            <HashLink
              smooth
              to="/#"
              className="
                ml-2
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-lg
                bg-orange-500
                text-white
                shadow-[0_8px_25px_rgba(249,115,22,0.2)]
                transition-all
                duration-300
                hover:bg-orange-600
                hover:shadow-[0_10px_30px_rgba(249,115,22,0.3)]
              "
              aria-label="Back to top"
            >
              <FaArrowUp />
            </HashLink>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;