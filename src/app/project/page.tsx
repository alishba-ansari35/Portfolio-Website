'use client'

import Image from 'next/image';
import React from 'react'
import Typewriter from 'typewriter-effect';

const Projectpage = () => {
  return (
    <div>
       {/* projects section  */}
  
  <div className='bg-blue-200 md:w-full h-[200px] text-5xl'>

<h1 className='text-center py-[80px]  font-semibold font-serif text-blue-950 text-decoration underline '><Typewriter
options={{
 strings: ['My Projects.'],
 autoStart: true,
 loop: true,
}}
/></h1>
</div>


{/* cards section  */}


<div className='md:w-full md:h-[700px] bg-blue-200'>

<div className="container mx-auto px-4 py-8">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
 {/* <!-- Card 1 --> */}
 <div className="max-w-xs rounded-lg shadow-lg overflow-hidden border-[9px] border-blue-950 bg-blue-950 ">
   <Image 
   src="/images/card1.png" 
   alt="Project Image 1"
   width={300}
   height={300}/>

   <div className="p-6">
     <h2 className="text-2xl font-semibold text-white">Project 01: Calculator</h2>
     <p className="text-white mt-2 text-[15px]">Description:A simple calculator is a basic software application
        or device that performs arithmetic operations such as addition subtraction multiplication and division. 
       It is often used for everyday calculations from basic math tasks to more complex operations depending 
        on the capabilities of the calculator.</p>
     <a href="#" className="mt-4 inline-block px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-600 focus:outline-none">View Project</a>
   </div>
 </div>

 {/* <!-- Card 2 --> */}
 <div className="max-w-xs rounded-lg shadow-lg overflow-hidden border-[9px] border-blue-950 bg-blue-950">
   <Image 
   src="/images/card2.png" 
   alt="Project Image 2"
   width={300}
   height={300}/>

   <div className="p-6">
     <h2 className="text-2xl font-semibold text-white">Project 02: ATM </h2>
     <p className="text-white mt-2 text-[15px]">Description:An ATM (Automated Teller Machine) is a self-service machine that allows bank customers to perform 
       a variety of financial transactions without the need for a human teller. ATMs are typically used to withdraw cash deposit money
        check account balances, transfer funds between accounts and sometimes even pay bills or buy tickets..</p>
     <a href="#" className="mt-4 inline-block px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-600 focus:outline-none">View project</a>
   </div>
 </div>

{/* <!-- Card 3 --> */}
<div className="max-w-xs rounded-lg shadow-lg overflow-hidden border-[9px] border-blue-950 bg-blue-950">

<Image
src="/images/card3.png" 
alt="Project Image 3"
width={300}
height={300} />

<div className="p-6">
  <h2 className="text-2xl font-semibold text-white">Project 03: Currency Converter</h2>
  <p className="text-white mt-2 text-[14px]">Description:A currency converter is a tool or application that helps users 
    convert one currency into another based on the current exchange rate. It allows individuals businesses and travelers
     to quickly calculate the equivalent value of money in different currencies making it easier to understand the cost of goods
      services or transactions when dealing with foreign currencies..</p>
  <a href="#" className="mt-4 inline-block px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-600 focus:outline-none">View Project</a>
</div>
</div>


</div> 
</div>

</div>
    </div>
  )
}

export default Projectpage
