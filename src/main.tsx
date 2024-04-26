import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Navbar from './components/Navbar'
import './index.css'
import About from './components/About'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='content-container'>
      <Navbar />
      <Header />
      <About />
    </div>
  </React.StrictMode>,
)
