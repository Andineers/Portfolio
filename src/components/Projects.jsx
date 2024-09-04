import React from 'react'
// import proj1

const Projects = () => {
  return (
    <div className=' mt-[100px] max-w-[1200px] mx-auto p-5 text-center' id='projects'>
      <div className='pb-8'>
        <p className=' text-4xl mb-[28px] font-bold primary-color font-poppins'>Projects</p>
        <p className='text-gray-400 font-poppins'>Check out some of my recent projects</p>
      </div>

      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

        <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center h-[200px] bg-cover relative'>
          {/* <img src={} alt="" /> */}
          <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
          <span className='text-2xl font-bold text-white tracking-wider'></span>
          <div className='pt-8 text-center'>
            <a href="/">
              <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg font-poppins'>Live</button>
            </a>
          </div>
          </div>

        </div>

        <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center h-[200px] bg-cover relative'>
          {/* <img src={} alt="" /> */}
          <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
          <span className='text-2xl font-bold text-white tracking-wider'></span>
          <div className='pt-8 text-center'>
            <a href="/">
              <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg font-poppins'>Live</button>
            </a>
          </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Projects