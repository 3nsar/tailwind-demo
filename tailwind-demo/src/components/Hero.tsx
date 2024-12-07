import React from 'react' 

const Hero = () => {
  return (
      <div className="h-screen flex items-center  text-gray-100">
        <div className ='text-center mx-auto'>
            <h1 className='text-7xl text-left font-medium'>Build MVP in six weeks<br></br>Within your budget</h1>
            <p className='text-xl text-left mt-5 font-light'>Struggling to hire the right team? Or finding agencies too costly?<br></br>
                                         We deliver your first product within six weeks, efficiently and affordably.
            </p>
            <div className="flex">
                <button className='mt-5 mr-2 p-2 pr-5 pl-5 rounded bg-gradient-to-r from-teal-600 via-teal-500 to-teal-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300'>Build your first MVP!</button>
                <button className=' mt-5 ml-2 p-2 pr-5 pl-5 rounded bg-slate-900 border border-gray-100  hover:border-slate-900 hover:bg-teal-600'>Learn More</button>
            </div>

         </div>

       </div>
 
  )
}

export default Hero