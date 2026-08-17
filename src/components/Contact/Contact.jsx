import React, { useRef } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaArrowRight,
} from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mhlta1v",
        "template_3ud0meq",
        form.current,
        {
          publicKey: "KyO7_OmJay_Y6syw-",
        }
      )
      .then(
        () => {
          Swal.fire({
            title: "Message Sent!",
            text: "Thank you for reaching out. I'll get back to you soon.",
            icon: "success",
          });

          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error);

          Swal.fire({
            title: "Something went wrong",
            text: "Please try again later.",
            icon: "error",
          });
        }
      );
  };

  return (
    <section
      id="contact"
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
      {/* Background Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
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
          -right-40
          bottom-10
          h-72
          w-72
          rounded-full
          bg-orange-500/10
          blur-[120px]
        "
      />

      <div className="relative mx-auto w-full max-w-6xl">

        {/* =================================
            HEADING
        ================================= */}

        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-orange-500 sm:text-sm">
            Get In Touch
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Let's Talk About{" "}
            <span className="text-orange-500">
              Your Project
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Have an idea or a project in mind? Feel free to
            reach out. I'd love to hear from you and discuss
            how I can help.
          </p>
        </div>

        {/* =================================
            CONTENT
        ================================= */}

        <div className="grid w-full min-w-0 grid-cols-1 gap-6 lg:grid-cols-2">

          {/* =================================
              CONTACT INFO
          ================================= */}

          <div
            className="
              min-w-0
              rounded-2xl
              border
              border-white/10
              bg-white/[0.04]
              p-5
              sm:p-7
              lg:p-8
            "
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
              Contact Information
            </p>

            <h3 className="mt-2 text-2xl font-bold sm:text-3xl">
              Let's start a conversation.
            </h3>

            <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">
              I'm always open to discussing new projects,
              creative ideas or opportunities to be part of
              your vision.
            </p>

            {/* Contact Items */}

            <div className="mt-8 space-y-4">

              {/* Email */}

              <a
                href="mailto:masumahmed64077@gmail.com"
                className="
                  flex
                  min-w-0
                  items-center
                  gap-4
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-4
                  transition-all
                  duration-300
                  hover:border-orange-500/30
                  hover:bg-orange-500/5
                "
              >
                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-orange-500/10
                    text-orange-500
                  "
                >
                  <FaEnvelope />
                </div>

                <div className="min-w-0">
                  <p className="text-xs text-gray-500">
                    Email
                  </p>

                  <p
                    className="
                      mt-1
                      break-all
                      text-sm
                      font-medium
                      text-gray-200
                      sm:text-base
                    "
                  >
                    masumahmed64077@gmail.com
                  </p>
                </div>
              </a>

              {/* Phone */}

              <a
                href="tel:+8801775994314"
                className="
                  flex
                  min-w-0
                  items-center
                  gap-4
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-4
                  transition-all
                  duration-300
                  hover:border-orange-500/30
                  hover:bg-orange-500/5
                "
              >
                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-orange-500/10
                    text-orange-500
                  "
                >
                  <FaPhone />
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    Phone
                  </p>

                  <p className="mt-1 text-sm font-medium text-gray-200 sm:text-base">
                    +880 1775-994314
                  </p>
                </div>
              </a>

              {/* Location */}

              <div
                className="
                  flex
                  min-w-0
                  items-center
                  gap-4
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-4
                "
              >
                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-orange-500/10
                    text-orange-500
                  "
                >
                  <FaLocationDot />
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    Location
                  </p>

                  <p className="mt-1 text-sm font-medium text-gray-200 sm:text-base">
                    Sylhet, Bangladesh
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* =================================
              FORM
          ================================= */}

          <div
            className="
              min-w-0
              rounded-2xl
              border
              border-white/10
              bg-white/[0.04]
              p-5
              sm:p-7
              lg:p-8
            "
          >
            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
                Send a Message
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                Tell me about your project
              </h3>
            </div>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex w-full flex-col gap-5"
            >

              {/* Name */}

              <div className="w-full">
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Your Name
                </label>

                <input
                  type="text"
                  name="user_name"
                  placeholder="Enter your name"
                  required
                  className="
                    w-full
                    min-w-0
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    px-4
                    py-3
                    text-sm
                    text-white
                    outline-none
                    placeholder:text-gray-600
                    transition
                    focus:border-orange-500/50
                    focus:bg-white/[0.05]
                  "
                />
              </div>

              {/* Email */}

              <div className="w-full">
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Email Address
                </label>

                <input
                  type="email"
                  name="user_email"
                  placeholder="Enter your email"
                  required
                  className="
                    w-full
                    min-w-0
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    px-4
                    py-3
                    text-sm
                    text-white
                    outline-none
                    placeholder:text-gray-600
                    transition
                    focus:border-orange-500/50
                    focus:bg-white/[0.05]
                  "
                />
              </div>

              {/* Message */}

              <div className="w-full">
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Message
                </label>

                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  required
                  rows="5"
                  className="
                    w-full
                    min-w-0
                    resize-none
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    px-4
                    py-3
                    text-sm
                    text-white
                    outline-none
                    placeholder:text-gray-600
                    transition
                    focus:border-orange-500/50
                    focus:bg-white/[0.05]
                  "
                />
              </div>

              {/* Submit */}

              <button
                type="submit"
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
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-orange-600
                  hover:shadow-[0_10px_30px_rgba(249,115,22,0.2)]
                "
              >
                Send Message

                <FaArrowRight
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;