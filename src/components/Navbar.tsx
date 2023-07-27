import Image from 'next/image'
import React from 'react'





export default function Navbar() {
  return (
    <nav className=" border-gray-200 bg-transparent">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a className="flex items-center">
          <Image src="/assets/logo1.png" width={50} height={50} className="mr-3" alt="Logo" />

        </a>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <a href="/" className="font-bold block py-2 pl-3 pr-4 text-gray-900 rounded bg-transparent md:border-0 md:hover:text-white md:p-0 dark:hover:text-white" >Home</a>
            </li>
            <li>
              <a href="/promosi" className="font-bold block py-2 pl-3 pr-4 text-gray-900 rounded bg-transparent md:border-0 md:hover:text-white md:p-0  dark:hover:text-white" >Berita</a>
            </li>
            <li>
              <a href="/menu" className="font-bold block py-2 pl-3 pr-4 text-gray-900 rounded bg-transparent md:border-0 md:p-0 md:hover:text-white   dark:hover:text-white">Menu</a>
            </li>
            <li>
              <a href="/about" className="font-bold block py-2 pl-3 pr-4 text-gray-900 rounded bg-transparent md:border-0 md:p-0  hover:text-white">Tentang Kami</a>
            </li>
            <li>
              <a href="/contact" className="font-bold block py-2 pl-3 pr-4 text-gray-900 rounded bg-transparent md:border-0 md:hover:text-white md:p-0  dark:hover:text-white">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav >
  )
}