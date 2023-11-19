import React from 'react'
import Profile from '../components/Profile/Profile'
import Footer from '../components/Footer/Footer'
import About from '../components/About/About'
import Work from '../components/Work/Work'
import Projects from '../components/Projects/Projects'
import FAQs from '../components/FAQs/FAQs'
import Contact from '../components/Contact/Contact'

// import './Home.css'

const Home = () => {
  return (
    <div className='home-container flex flex-col justify-between  bg-[#25263A] w-full '>

      <Profile />
      <About />
      <Work />
      <Projects />
      <FAQs />
      <Contact />
      {/* <Footer />  */}
    </div>
  )
}

export default Home