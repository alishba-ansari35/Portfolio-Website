import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>
      
{/* navbar includes  */}
   
<header className="bg-blue-900 text-white body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-serif items-center text-white mb-4 md:mb-0">
 <Image
src="/images/logo.png"
alt = "logo"
width={50}
height={20} />

       
    <span className="ml-3 text-[30px] text-white"> Portfolio</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap font-serif items-center md:text-[20px] justify-center">
      <Link href="/" className="mr-5 hover:text-gray-300">HOME</Link>
      <Link href="about" className="mr-5 hover:text-gray-300">ABOUT</Link>
      <Link href="contact" className="mr-5 hover:text-gray-300">CONTACT US</Link>
      <Link href="project" className="mr-5 hover:text-gray-300">PROJECTS</Link>
    </nav>
   </div>
  </header>

    </div>
  )
}

export default Header
