import React from "react";

import Profile from "../components/Profile/Profile";
import About from "../components/About/About";
import Work from "../components/Work/Work";
import Projects from "../components/Projects/Projects";
import FAQs from "../components/FAQs/FAQs";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-[#25263b]">

      {/* Hero */}
      <section id="home">
        <Profile />
      </section>

      {/* About */}
      <section>
        <About />
      </section>

      {/* Services */}
      <section>
        <Work />
      </section>

      {/* Projects */}
      <section>
        <Projects />
      </section>

      {/* FAQ */}
      <section>
        <FAQs />
      </section>

      {/* Contact */}
      <section>
        <Contact />
      </section>

     
    </main>
  );
};

export default Home;