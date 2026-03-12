import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/about'
import Contact from './Pages/contact' 
import Projects from './Pages/project'
import Header from './Components/Navigation'
import Skills from './Pages/skills'
import kvanzImage from './assets/kvanz.png'

function App() {


  return (
    <>
      <BrowserRouter>
        <Header/>
        {/* ensure content isn't hidden behind the fixed navbar */}
        <div className="pt-24">
          <Routes>
          <Route path="/" element={<Home image={kvanzImage} />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} /> 

          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
