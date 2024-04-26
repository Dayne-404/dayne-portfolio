import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Navbar from './components/Navbar'
import './index.css'
import Project from './components/Projects'
import Experience from './components/Experience'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='black-background'>
      <Navbar />
      <Header />
    </div>
    <body>
      <Experience />
      <Project />
    </body>
  
  </React.StrictMode>,
)
