import React from 'react'
import profile from "../assets/img/profile.png"


const About = () => {
  return (
    <div className='text-white max-w-full mx-au my-12' id='about'>
      <div className='md:grid md:grid-cols-2 sm:py-16'>

        <div className='mt-[90px] md:mt-0 ml-[200px] text-left flex'>
          <div className='my-auto mx-6'>
            <h2 className='text-4xl font-poppins font-bold mb-[40px] primary-color'>About Me</h2>
            <p className='text-base lg:text-lg font-poppins'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nisi incidunt recusandae veniam quibusdam nostrum sint debitis a animi, ex eius? Perspiciatis modi a eaque! Mollitia eius labore facilis illum?</p>
          </div>
        </div>

        <img className='mx-auto rounded-3xl ml-[200px] py-8 md:py-0' src={profile} width={300} height={300} />

      </div>

    </div>
  )
}

export default About