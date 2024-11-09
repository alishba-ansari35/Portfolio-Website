
import Image from 'next/image'
const Homepage = () => {
  return (
    <div> 
      <main>
{/* hero section  */}

<section className="bg-blue-200 py-4 h-full body-font">
  <div  className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start
     md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold font-serif text-blue-950 text-decoration underline">
 
       Hello I Am Web Designer .
      </h1>
 

      <p className="mb-8 leading-relaxed text-blue-900 font-serif text-xl">I am Alishba Khalil. I am student
         of Governer Sindh It Intiative.
         I am front-end developer  and  I am graphic designer.
        My skills is Html . Css . Javascript . Typerscipt and next.js.
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


  {/* projects section  */}
  
  <div className='bg-blue-950 md:w-full h-[200px] text-5xl'>

   <h1 className='text-center py-[80px]  font-semibold font-serif text-white text-decoration underline '>My Projects . </h1>

  </div>

  {/* cards section  */}


  <div className='md:w-full md:h-[700px] ='>

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

{/* features section */}

<div className='bg-blue-950 md:w-full '>

<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div  className="text-center mb-20">
    <h1 className='text-center py-[20px] text-[40px]  font-semibold font-serif text-white text-decoration underline '>
      Projects Features & Commands .</h1>
      <p className="text-xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-slate-300">Explore the essential features of each typescript project and easily 
      run them using the npx commands provided below.</p>
    </div>
    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" 
          className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-serif text-blue-950 text-[18px]">npx run start:calculator</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" 
          className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-serif text-blue-950 text-[18px]">npx run start:atm</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" 
          className="text-blue-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-serif text-blue-950 text-[18px]">npx run start:currency</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"
           className="text-blue-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-serif text-blue-950 text-[18px]">npx run start:todo-list</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" 
          className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-serif text-blue-950 text-[18px]">npx run start:oppbank</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" 
          className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font ffont-serif text-blue-950 text-[18px]">npx run start:number-guessing-game</span>
        </div>
      </div>
    </div>

    <button className="flex mx-auto mt-16 text-white bg-indigo-700 border-0 py-2 px-8 focus:outline-none  rounded text-lg">
      <Image 
       src="/images/git.png" 
       alt="image" 
        width={40}
   height={10}/>
    <span className="ml-4 flex items-start flex-col leading-none">
          <span className="text-xsm text-white mb-1">GIT HUB</span>
          <span className="title-font font-medium">@Miss Alishba Khalil</span>
        </span>
    </button>
  </div>
</section>
</div>
     
     {/* Skills section */}

     <section className='bg-blue-950 md:h-[700px] my-24'>
      <div className='container px-2 py-8 mx-auto flex flex-wrap  justify-center items-start space-x-6 text-2xl '>

      <h1 className='text-5xl py-[50px]  font-semibold font-serif text-white  text-decoration underline  '>My Skills . </h1>
  </div>

{/* <!-- Container for the skill cards --> */}
  <div className="max-w-6xl mx-auto px-1 py-2">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3  py-5" >

      {/* <!-- Skill Card 1 --> */}
      <div className="bg-blue-100 rounded-lg shadow-lg p-6 ">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">HTML: Hyper Text Markup Language .</h3>
        <p className="text-gray-600">HTML (HyperText Markup Language) is the standard language used to create 
          and structure content on the web. It forms the backbone of most web pages by defining the structure and
           layout of a webpage. It uses a system of tags or elements to denote different parts of a page.
            </p>
      </div>

      {/* <!-- Skill Card 2 --> */}
      <div className="bg-blue-100 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">CSS: Cascading Stylesheet.</h3>
        <p className="text-gray-600">CSS (Cascading Style Sheets) is a stylesheet language used to describe
           the presentation (look and feel) of a document written in HTML or XML. While HTML provides the structure
            of a webpage CSS defines how that structure should appear on the screen print or other media.
          </p>
      </div>

      {/* <!-- Skill Card 3 --> */}
      <div className="bg-blue-100 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">JS: JavaScript.</h3>
        <p className="text-gray-600">JavaScript is a programming language that enables developers to add interactivity,
           dynamic content, and behavior to websites. While HTML structures the content of web pages and CSS handles the
            presentation (styling) JavaScript is responsible for making the webpage interactive and responsive to user actions..</p>
      </div>
 
       {/* <!-- Skill Card 3 --> */}
       <div className="bg-blue-100 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">TS: Typescript.</h3>
        <p className="text-gray-600">TypeScript is a superset of JavaScript that adds static typing and other advanced 
          features to the language. In other words TypeScript builds on JavaScript by providing optional type annotations
           interfaces and other features that improve the robustness and maintainability of code.</p>
      </div>
     </div>
     </div>

       </section>


{/* contact us  */}

<section className='bg-blue-950 h-[950px] md:my-32'>

  <div className='container py-5 px-5 mx-auto '>
    <div className='flex flex-col text-center w-full my-10 '>
      <h1 className='text-5xl text-white font-serif font-semibold text-decoration underline'>Contact Us </h1>
      <p className='lg-w-2/3 mx-auto leading-relaxed py-3 text-lg text-white font-serif'> Fill the form below.</p>
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


</section>
      </main>
    </div>
  )
}

export default Homepage
