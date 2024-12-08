import React from 'react'
import { features } from '../data/data'

const Feature = () => {
  return (
    <div className='bg-slate-900 min-h-screen text-gray-200'>
        <div className="text-center">
           <h1 className='text-3xl mt-10 sm:text-5xl lg:text-6xl lg:mt-20 tracking-wide'> Easily build 
            <span className='bg-gradient-to-r from-slate-600 via-teal-600 to-teal-400 text-transparent bg-clip-text'> your MVP</span></h1>
        </div>
        <div className="flex flex-wrap mt-10 lg:mt-20">
            {features.map((feature,index)=>(
                <div key={index} className='w-full sm:w-1/2 lg:w-1/3'>
                    <div className="flex">
                        <div className="flex mx-6 h-10 w-10 p-2 bg-slate-800 text-teal-500 justify-center items-center rounded-full">
                            {feature.icon}
                        </div>
                        <div>
                            <h5 className='mt-1 mb-6 text-lg'>{feature.text}</h5>
                            <p className='text-md p-2 mb-20 text-neutral-500'>{feature.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Feature