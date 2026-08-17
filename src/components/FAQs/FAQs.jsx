import React, { useState } from "react";
import {
  FaAngleDown,
  FaCode,
  FaShieldHalved,
  FaRocket,
} from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question:
        "What is a MERN developer, and what services do you offer?",
      answer:
        "A MERN developer specializes in creating web applications using MongoDB, Express.js, React, and Node.js. I offer full-stack development services, from database design and API development to responsive frontend development and deployment.",
      icon: <FaCode />,
    },
    {
      question:
        "What makes your development services unique?",
      answer:
        "I focus on building custom, responsive, scalable and maintainable applications based on each project's specific requirements. I care about both user experience and clean, reliable code.",
      icon: <FaRocket />,
    },
    {
      question:
        "How do you ensure the security of web applications?",
      answer:
        "Security is an important part of development. I follow best practices for authentication, authorization, data validation, secure API design and proper handling of sensitive information.",
      icon: <FaShieldHalved />,
    },
    {
      question:
        "Can you develop a website from an existing design?",
      answer:
        "Yes. I can convert designs from Figma, Adobe XD or other design tools into responsive and functional web applications while maintaining the original visual experience.",
      icon: <FaCode />,
    },
    {
      question:
        "Do you provide website maintenance after development?",
      answer:
        "Yes. I can help with bug fixing, performance optimization, feature updates, deployment issues and ongoing maintenance after the initial development is completed.",
      icon: <FaRocket />,
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="
        relative
        overflow-hidden
        bg-[#25263b]
        px-5
        py-24
        text-white
        md:px-10
        lg:px-16
      "
    >
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-96
          w-96
          rounded-full
          bg-orange-500/10
          blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-96
          w-96
          rounded-full
          bg-orange-500/10
          blur-[130px]
        "
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
            FAQ
          </p>

          <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            Frequently Asked{" "}
            <span className="text-orange-500">
              Questions
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 md:text-base">
            Here are some common questions about my development services,
            workflow and the technologies I work with.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          {/* =================================
              LEFT SIDE
          ================================== */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-white/[0.04]
              p-7
              backdrop-blur-md
              md:p-8
            "
          >
            {/* Image */}
            <div className="relative overflow-hidden rounded-xl">
              <img
                src="https://images.pexels.com/photos/285814/pexels-photo-285814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Why choose me"
                className="
                  h-64
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-105
                  md:h-72
                "
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#25263b] via-transparent to-transparent" />

              {/* Badge */}
              <div
                className="
                  absolute
                  bottom-4
                  left-4
                  rounded-full
                  border
                  border-white/10
                  bg-[#25263b]/70
                  px-4
                  py-2
                  text-xs
                  font-medium
                  text-white
                  backdrop-blur-md
                "
              >
                Let's build something great
              </div>
            </div>

            {/* Content */}
            <div className="mt-7">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
                Why Choose Me
              </p>

              <h3 className="text-2xl font-bold md:text-3xl">
                Let's Build Your Next{" "}
                <span className="text-orange-500">
                  Digital Product
                </span>
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-400">
                I focus on creating solutions that are not only visually
                appealing but also responsive, scalable and easy to maintain.
              </p>

              {/* Features */}
              <div className="mt-7 space-y-4">
                <div className="flex gap-4">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500">
                    <FaRocket size={14} />
                  </div>

                  <div>
                    <h4 className="font-semibold">
                      Responsive & Scalable
                    </h4>

                    <p className="mt-1 text-sm leading-6 text-gray-500">
                      Applications designed to work smoothly across devices
                      and scale with your business.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500">
                    <FaCode size={14} />
                  </div>

                  <div>
                    <h4 className="font-semibold">
                      Custom Solutions
                    </h4>

                    <p className="mt-1 text-sm leading-6 text-gray-500">
                      Every project is built around your specific requirements
                      instead of using a one-size-fits-all approach.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500">
                    <FaShieldHalved size={14} />
                  </div>

                  <div>
                    <h4 className="font-semibold">
                      Reliable & Secure
                    </h4>

                    <p className="mt-1 text-sm leading-6 text-gray-500">
                      Clean architecture and development practices focused on
                      reliability and security.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* =================================
              RIGHT SIDE FAQ
          ================================== */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-3"
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`
                    overflow-hidden
                    rounded-xl
                    border
                    transition-all
                    duration-300
                    ${
                      isOpen
                        ? "border-orange-500/40 bg-orange-500/[0.05] shadow-[0_15px_40px_rgba(249,115,22,0.07)]"
                        : "border-white/10 bg-white/[0.03] hover:border-white/20"
                    }
                  `}
                >
                  {/* Question */}
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-center gap-4 p-5 text-left"
                  >
                    {/* Icon */}
                    <div
                      className={`
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        transition-all
                        duration-300
                        ${
                          isOpen
                            ? "bg-orange-500 text-white"
                            : "bg-orange-500/10 text-orange-500"
                        }
                      `}
                    >
                      {faq.icon}
                    </div>

                    {/* Question */}
                    <span
                      className={`
                        flex-1
                        text-sm
                        font-semibold
                        md:text-base
                        ${
                          isOpen
                            ? "text-orange-500"
                            : "text-gray-200"
                        }
                      `}
                    >
                      {faq.question}
                    </span>

                    {/* Arrow */}
                    <div
                      className={`
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        transition-all
                        duration-300
                        ${
                          isOpen
                            ? "rotate-180 border-orange-500 bg-orange-500 text-white"
                            : "border-white/10 text-gray-400"
                        }
                      `}
                    >
                      <FaAngleDown size={13} />
                    </div>
                  </button>

                  {/* Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                      >
                        <div className="border-t border-white/10 px-5 pb-5 pt-4 pl-[76px]">
                          <p className="text-sm leading-7 text-gray-400">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;