import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
// import Contact from './components/Contact'
import Footer from './components/Footer'
import Notes from './components/Notes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div id='portfolio' className='portfolio' data-theme="dark">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      {/* <Contact /> */}
      <Notes />
      <Footer />
    </div>
  </React.StrictMode>,
)
