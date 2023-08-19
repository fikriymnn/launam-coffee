"use client"
import Image from 'next/image'
import React from 'react'
import { Navbar } from 'flowbite-react'





export default function Navbarr() {
  return (
    // <nav className=" border-gray-200 bg-transparent relative top-0 z-50">
    //   <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    //     <a className="flex items-center">
    //       <Image src="/assets/logo1.png" width={50} height={50} className="mr-3" alt="Logo" />

    //     </a>

    //     <div className="hidden w-full md:block md:w-auto" id="navbar-default">
    //       <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0">
    //         <li>
    //           <a href="/" className="font-bold block py-2 pl-3 pr-4 text-[#FFC26F] rounded bg-transparent md:border-0 md:hover:text-white md:p-0 dark:hover:text-white" >Home</a>
    //         </li>
    //         <li>
    //           <a href="/promosi" className="font-bold block py-2 pl-3 pr-4 text-[#FFC26F] rounded bg-transparent md:border-0 md:hover:text-white md:p-0  dark:hover:text-white" >Promosi</a>
    //         </li>
    //         <li>
    //           <a href="/menu" className="font-bold block py-2 pl-3 pr-4 text-[#FFC26F] rounded bg-transparent md:border-0 md:p-0 md:hover:text-white   dark:hover:text-white">Menu</a>
    //         </li>
    //         <li>
    //           <a href="/about" className="font-bold block py-2 pl-3 pr-4 text-[#FFC26F] rounded bg-transparent md:border-0 md:p-0  hover:text-white">Tentang Kami</a>
    //         </li>
    //         <li>
    //           <a href="/contact" className="font-bold block py-2 pl-3 pr-4 text-[#FFC26F] rounded bg-transparent md:border-0 md:hover:text-white md:p-0  dark:hover:text-white">Contact</a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav >
    <>
      <Navbar
        fluid
        rounded
        className="border-gray-200 bg-transparent"
      >
        <Navbar.Brand

          href="/"
        >
          <Image src="/assets/logo1.png" width={50} height={50} className="mr-3" alt="Logo" />

        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link

            href="/" className='font-bold block py-2 pl-3 pr-4 text-[#FFC26F] rounded bg-transparent md:border-0 md:hover:text-white md:p-0  dark:hover:text-white'
          >
            <p>
              Home
            </p>
          </Navbar.Link>
          <Navbar.Link
            href="/promosi" className='font-bold block py-2 pl-3 pr-4 text-[#FFC26F] rounded bg-transparent md:border-0 md:hover:text-white md:p-0  dark:hover:text-white'
          >
            <p>
              Promo
            </p>
          </Navbar.Link>
          <Navbar.Link href="/menu" className='font-bold block py-2 pl-3 pr-4 text-[#FFC26F] rounded bg-transparent md:border-0 md:hover:text-white md:p-0  dark:hover:text-white'>
            Menu
          </Navbar.Link>
          <Navbar.Link href="/about" className='font-bold block py-2 pl-3 pr-4 text-[#FFC26F] rounded bg-transparent md:border-0 md:hover:text-white md:p-0  dark:hover:text-white'>
            Tentang Kami
          </Navbar.Link>
          <Navbar.Link href="/contact" className='font-bold block py-2 pl-3 pr-4 text-[#FFC26F] rounded bg-transparent md:border-0 md:hover:text-white md:p-0  dark:hover:text-white'>
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}