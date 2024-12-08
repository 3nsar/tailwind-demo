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
                <div key={index} className='w-full sm:1/2 lg:1/3'>
                    <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-500 justify-center items-center roundded-full">
                        {feature.icon}
                    </div>
                    <div>
                        <h5 className='mt-1 mb-6 text-xl'>{feature.text}</h5>
                        <p>{feature.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Feature