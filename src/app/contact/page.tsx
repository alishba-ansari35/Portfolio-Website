
import React from 'react'
const Contactpage = () => {
  return (
    <div>
      <section className='bg-blue-200 h-[950px] '>

<div className='container py-5 px-5 mx-auto '>
  <div className='flex flex-col text-center w-full my-10 '>
    <h1 className='text-5xl text-blue-950 font-serif font-semibold text-decoration underline'>Contact Us </h1>
    <p className='lg-w-2/3 mx-auto leading-relaxed py-3 text-lg text-blue-950 font-serif'> Fill the form below.</p>
  </div>
</div>

<section className="text-gray-600   body-font relative">
<div className="absolute inset-0 bg-gray-300">
  <iframe width="100%" height="100%"  src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"/>
</div>
<div className="container px-5 py-24 mx-auto flex">
  <div className="lg:w-1/3 md:w-1/2 bg-blue-950 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
    <h2 className="text-white text-lg mb-1 font-medium title-font">Contact us</h2>
    <p className="leading-relaxed mb-5 text-white">Please fill this form if you have any queries and complains or if you have any messages for us. </p>
    <div className="relative mb-4">
      <label htmlFor="email" className="leading-7 text-sm text-white">Email</label>
      <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2
       focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
    </div>
    <div className="relative mb-4">
      <label htmlFor="message" className="leading-7 text-sm text-white">Message</label>
      <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2
       focus:ring-indigo-200 h-32 text-base outline-none text-white py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
    </div>
    <button className="text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-xl">Submit</button>
    <p className="text-xs text-white mt-3">Please read our privacy policy for any issues.</p>
  </div>
</div>
</section>

</section>

    </div>
  )
}

export default Contactpage
