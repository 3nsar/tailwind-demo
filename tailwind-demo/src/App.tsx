import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Feature from './components/Feature'
import Workflow from './components/Workflow'

function App() {


  return (
    
    <>
        <Navbar/>
        <Hero/>
        <Feature/>
        <Workflow/>
    </>
      
  )
}

export default App
