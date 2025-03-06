import Header from "./components/Header"
import NavBar from "./components/NavBar"
import About from "./components/About"
import Contact from "./components/Contact"
import Projects from "./components/Projects"

import { HashRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
