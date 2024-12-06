import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'

function App() {


  return (
    <div className='h-full w-full'>
      <div className="flex flex-col gap-20">
        <Hero/>
      </div>
      
    </div>
  )
}

export default App
