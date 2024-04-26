import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='portfolio dark-mode' data-theme="light">
      <Navbar />
      <Hero />
    </div>
  </React.StrictMode>,
)
