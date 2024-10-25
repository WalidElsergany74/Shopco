import React from 'react'
import ButtonIcon from './ui/ButtonIcon'
import {  MdOutlineEmail } from 'react-icons/md'
import Link from 'next/link'
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'
import Image from 'next/image'
import Badge1 from "@/app/public/Badge1.png"
import Badge2 from "@/app/public/Badge2.png"
import Badge3 from "@/app/public/Badge3.png"
import Badge4 from "@/app/public/Badge4.png"
import Badge5 from "@/app/public/Badge5.png"

const Footer = () => {
  return (

<footer className="bg-[#F0F0F0] ">
  <div className="mx-auto relative max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    {/* <div
      className="flex  w-[340px] md:w-[95%]   xl:w-full py-10   absolute -top-[350px] md:-top-40 left-1/2 -translate-x-1/2  rounded-3xl flex-col items-center gap-4  bg-black p-6 shadow-lg md:flex-row justify-center md:space-x-8"
    >
      <h3 className="text-4xl md:text-5xl flex-1 font-bold text-white  "> STAY UP TO DATE ABOUT OUR LATEST OFFERS </h3>



<div className='flex-1'>
<div className="relative flex flex-col items-center space-y-5 ">
  <label htmlFor="UserEmail" className="sr-only"> Email </label>

 <div className='relative w-full'>
 <input
    type="email"
    id="UserEmail"
    placeholder="Enter your email address"
    className="w-full outline-none   pe-10 py-4 px-6 rounded-full shadow-sm text-sm"
  />

  <ButtonIcon
    className="pointer-events-none absolute top-1/2 translate-y-[-50%] end-0 grid w-10 place-content-center text-gray-500"
  >
    <MdOutlineEmail size={18}/>
  </ButtonIcon>
 </div>
   <ButtonIcon className='py-4 px-6 w-full hover:bg-blue-500 hover:text-white transition-colors duration-300 bg-white text-black rounded-full font-medium text-base '>
   Subscribe to Newsletter
   </ButtonIcon>

</div>
</div>
    </div> */}

    <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
      <div className="text-center sm:text-left">
      <Link href={"/"} className="uppercase text-4xl font-bold tracking-wider">
          shopco.
        </Link>

       
       <p className="text-gray-500 mt-5">
       We have clothes that suits your style and which
        you’re proud to wear. From women to men.
       </p>
       <ul className="flex md:justify-start justify-center  gap-6 mt-5 ">
        <li className="text-black  transition-colors duration-300 hover:bg-black hover:text-white border border-gray-200  bg-white w-[40px] h-[40px] rounded-full">
          <Link
            href="/"
            rel="noreferrer"
            target="_blank"
            className=" justify-center items-center flex  w-10 h-10 rounded-full  "
          >
            <FaTwitter  size={18}/>
          </Link>
        </li>
        <li className="text-black  transition-colors duration-300 hover:bg-black hover:text-white border border-gray-200  bg-white w-[40px] h-[40px] rounded-full">
          <Link
            href="/"
            rel="noreferrer"
            target="_blank"
            className=" justify-center items-center flex  w-10 h-10 rounded-full  "
          >
            <FaFacebook  size={18}/>
          </Link>
        </li>
        <li className="text-black  transition-colors duration-300 hover:bg-black hover:text-white border border-gray-200  bg-white w-[40px] h-[40px] rounded-full">
          <Link
            href="/"
            rel="noreferrer"
            target="_blank"
            className=" justify-center items-center flex  w-10 h-10 rounded-full  "
          >
            <FaGithub  size={18}/>
          </Link>
        </li>
        <li className="text-black  transition-colors duration-300 hover:bg-black hover:text-white border border-gray-200  bg-white w-[40px] h-[40px] rounded-full">
          <Link
            href="/"
            rel="noreferrer"
            target="_blank"
            className=" justify-center items-center flex  w-10 h-10 rounded-full  "
          >
            <FaInstagram  size={18}/>
          </Link>
        </li>

       
      </ul>
      </div>

      <div className="text-center sm:text-left">
        <p className="text-lg font-medium text-black uppercase">Company</p>

        <ul className="mt-8 space-y-4 text-sm">
          <li>
            <Link className="text-gray-500 transition text-base hover:text-gray-700/50" href="/">
              About
            </Link>
          </li>
          <li>
            <Link className="text-gray-500 transition text-base hover:text-gray-700/50" href="/">
              Features
            </Link>
          </li>
          <li>
            <Link className="text-gray-500 transition text-base hover:text-gray-700/50" href="/">
              Works
            </Link>
          </li>
          <li>
            <Link className="text-gray-500 transition text-base hover:text-gray-700/50" href="/">
              Career
            </Link>
          </li>

          
        </ul>
      </div>

      <div className="text-center sm:text-left">
        <p className="text-lg font-medium text-black uppercase">Resources</p>

        <ul className="mt-8 space-y-4 text-sm">
        <li>
            <Link className="text-gray-500 transition text-base hover:text-gray-700/50" href="/">
              Free Books
            </Link>
          </li>
          <li>
            <Link className="text-gray-500 transition text-base hover:text-gray-700/50" href="/">
              Yotube Playlist
            </Link>
          </li>
          <li>
            <Link className="text-gray-500 transition text-base hover:text-gray-700/50" href="/">
              How to -Blog
            </Link>
          </li>
          <li>
            <Link className="text-gray-500 transition text-base hover:text-gray-700/50" href="/">
              Development Tutorial
            </Link>
          </li>
        </ul>
      </div>

      <div className="text-center sm:text-left">
      <p className="text-lg font-medium text-black uppercase">Helpful links</p>

        <ul className="mt-8 space-y-4 text-sm">
        <li>
            <Link className="text-gray-500 transition text-base hover:text-gray-700/50" href="/">
             FAQs
            </Link>
          </li>

          <li>
            <Link className="text-gray-500 transition text-base hover:text-gray-700/50" href="/">
             Support
            </Link>
          </li>

        
        </ul>
      </div>
    </div>
    <hr className='mt-10'/>
    <div className="mt-16  ">
     

      <div className="mt-16 sm:flex sm:items-center sm:justify-between ">
        <span className='text-gray-500'>ShopCo. © 2000-2025, All rights reserved</span>

        <div className="flex justify-center items-center mt-6 md:mt-0">
          <Image  width={50} height={50}   src={Badge1} alt="image.."/>
          <Image  width={50} height={50}  src={Badge2} alt="image.."/>
          <Image  width={50} height={50} src={Badge5} alt="image.."/>
          <Image  width={50} height={50}  src={Badge3} alt="image.."/>
          <Image  width={50} height={50}  src={Badge4} alt="image.."/>
        </div>
      </div>
    </div>
  </div>
</footer>
  )
}

export default Footer
