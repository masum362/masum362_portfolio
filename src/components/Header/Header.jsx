import React, { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import logo from "../../assets/msquare-logo.png";

const Header = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "/#" },
    { name: "About", link: "#about" },
    { name: "Services", link: "#services" },
    { name: "Projects", link: "#projects" },
    { name: "FAQs", link: "#faq" },
    { name: "Contact", link: "#contact" },
  ];

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header className="fixed left-0 right-0 top-0 z-50 px-3 py-3 md:px-6">
        <nav
          className="
            mx-auto
            flex
            h-16
            max-w-7xl
            items-center
            justify-between
            rounded-2xl
            border
            border-white/10
            bg-[#25263b]/80
            px-4
            shadow-xl
            backdrop-blur-xl
            md:px-6
          "
        >
          {/* Logo */}
          <HashLink
            smooth
            to="/#"
            className="text-2xl font-bold text-white mx-2"
          >
            Masum<span className="text-orange-500">.</span>
          </HashLink>

          {/* ================= DESKTOP NAV ================= */}
          <div className="hidden items-center gap-2 md:flex ">
            <ul className="flex items-center gap-1 ">
              {navItems.map((item) => (
                <li key={item.name}>
                  <HashLink
                    smooth
                    to={item.link}
                    className="
                      relative
                      block
                      rounded-lg
                      px-3
                      py-2
                      text-sm
                      font-medium
                      text-gray-300
                      transition-all
                      duration-300
                      hover:bg-white/5
                      hover:text-orange-500
                    "
                  >
                    {item.name}
                  </HashLink>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Link
              to="mailto:masumahmed64077@gmail.com"
              className="
                group
                ml-3
                flex
                items-center
                gap-2
                rounded-xl
                bg-orange-500
                px-4
                py-2.5
                text-sm
                font-semibold
                text-white
                shadow-[0_8px_25px_rgba(249,115,22,0.18)]
                transition-all
                duration-300
                hover:bg-orange-600
                hover:shadow-[0_10px_35px_rgba(249,115,22,0.3)]
              "
            >
              Let's Talk
              <ArrowUpRight
                size={16}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </Link>
          </div>

          {/* ================= MOBILE BUTTON ================= */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-lg
              border
              border-white/10
              bg-white/5
              text-gray-200
              transition-all
              hover:border-orange-500/30
              hover:bg-orange-500/10
              hover:text-orange-500
              md:hidden
            "
            aria-label="Open menu"
          >
            <FaBars />
          </button>
        </nav>
      </header>

      {/* ================= MOBILE OVERLAY ================= */}
      {open && (
        <div
          onClick={closeMenu}
          className="
            fixed
            inset-0
            z-[60]
            bg-black/60
            backdrop-blur-sm
            md:hidden
          "
        />
      )}

      {/* ================= MOBILE MENU ================= */}
      <aside
        className={`
          fixed
          right-0
          top-0
          z-[70]
          flex
          h-screen
          w-[280px]
          flex-col
          border-l
          border-white/10
          bg-[#25263b]
          px-6
          py-6
          shadow-2xl
          transition-transform
          duration-300
          md:hidden
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Mobile Header */}
        <div className="flex items-center justify-between">
          <HashLink
            smooth
            to="/#"
            className="text-2xl font-bold text-white mx-2"
          >
            Masum<span className="text-orange-500">.</span>
          </HashLink>

          <button
            type="button"
            onClick={closeMenu}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-lg
              border
              border-white/10
              bg-white/5
              text-gray-300
              transition
              hover:border-orange-500/30
              hover:bg-orange-500/10
              hover:text-orange-500
            "
            aria-label="Close menu"
          >
            <FaXmark />
          </button>
        </div>

        {/* Line */}
        <div className="my-7 h-px bg-white/10" />

        {/* Mobile Navigation */}
        <ul className="flex flex-col gap-2">
          {navItems.map((item, index) => (
            <li key={item.name}>
              <HashLink
                smooth
                to={item.link}
                onClick={closeMenu}
                className="
                  flex
                  items-center
                  justify-between
                  rounded-xl
                  border
                  border-transparent
                  px-4
                  py-3.5
                  text-sm
                  font-medium
                  text-gray-300
                  transition-all
                  duration-300
                  hover:border-orange-500/20
                  hover:bg-orange-500/5
                  hover:text-orange-500
                "
              >
                <span>{item.name}</span>

                <span className="text-xs text-gray-600">0{index + 1}</span>
              </HashLink>
            </li>
          ))}
        </ul>

        {/* Mobile CTA */}
        <div className="mt-auto">
          <p className="mb-3 text-xs text-gray-500">Have a project in mind?</p>

          <Link
            to="mailto:masumahmed64077@gmail.com"
            onClick={closeMenu}
            className="
              group
              flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-orange-500
              px-5
              py-3.5
              text-sm
              font-semibold
              text-white
              shadow-[0_10px_30px_rgba(249,115,22,0.2)]
              transition-all
              hover:bg-orange-600
            "
          >
            Let's Work Together
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Header;
