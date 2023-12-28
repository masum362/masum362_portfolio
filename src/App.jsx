import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import FAQs from "./components/FAQs/FAQs";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header"
import Work from "./components/Work/Work";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  return (
    <Router>

      <div className="w-[95%] mx-auto">
        <Header />
        <Routes>
          <Route  path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>


    </Router>
  )
}

export default App
