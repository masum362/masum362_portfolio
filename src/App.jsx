import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header"
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <div className="m-auto w-[95%]">
      <Header />
        <Routes>
          
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
