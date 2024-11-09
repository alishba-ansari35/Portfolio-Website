"use client";

import Image from 'next/image'
import React from 'react'
import Typewriter from 'typewriter-effect';
const Aboutpage = () => {
  return (
    <div>
      
{/* hero section  */}

<section className="bg-blue-200 py-4 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start
     md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold font-serif text-blue-950">

<Typewriter
  options={{
    strings: ['Hello I,am Front-End Developer.', 'Hello I,Am Graphic Designer.'],
    autoStart: true,
    loop: true,
  }}
  /></h1>

      <p className="mb-8 leading-relaxed text-blue-900 font-serif text-xl">I am Alishba Khalil. I am student
         of Governer Sindh It Intiative.
         I am front-end developer  and  I am graphic designer.
        My skills is Html , Css , Javascript , Typerscipt and next.js.
      </p>

      <div className="flex w-full md:justify-start justify-center items-end">
        <button className="inline-flex text-white bg-blue-950  py-2 px-6 focus:outline-none
         hover:bg-white hover:text-blue-950 rounded text-lg font-serif  hover:border-blue-950 border-2  
         hover:border-x-4">Hire Me </button>

         <button className="inline-flex text-white bg-blue-950  py-2 px-6 focus:outline-none
         hover:bg-white hover:text-blue-950 rounded text-lg font-serif
         hover:border-blue-950 border-2  hover:border-x-4">Get Cv </button>
      </div>

     
      <p className="text-sm mt-2 text-gray-500 mb-8 w-full"></p>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
<Image

   src="/images/logo.png"
   alt = "logo"
   width={300}
   height={300}/>

    </div>
  </div>
</section>

    </div>
  )
}

export default Aboutpage
