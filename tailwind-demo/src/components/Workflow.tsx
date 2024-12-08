import React from 'react'
import picture from "../assets/code.jpg"
import { checklistItems } from '../data/data'
import { CheckCircle2 } from 'lucide-react'

const Workflow = () => {
  return (
    <div className='mt-20 min-h-screen text-gray-200'>
        <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide'>
            The Process starts with You
        </h2>
        <div className="flex flex-wrap justify-center">
            <div className='mt-10 p-2 w-full lg:w-1/3'>
              <img src={picture} alt="pic" />
            </div>
            <div className="pt-12 w-full lg:w-1/2">
            {checklistItems.map((item,index)=>(
                <div key={index} className='flex mb-12'>
                    <div className="text-green-400 mx-6 h-10 w-10 p-2 justify-center items-center rounded-full">
                        <CheckCircle2/>
                    </div>
                    <div>
                        <h5 className='mt-1 mb-2 text-xl'>{item.title}</h5>
                        <p className='text-md text-neutral-500'>{item.description}</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
    </div>

  )
}

export default Workflow