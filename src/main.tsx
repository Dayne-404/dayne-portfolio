import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='portfolio dark-mode' data-theme="light">
      <Navbar />
      <Hero />
      <About />
    </div>
  </React.StrictMode>,
)
