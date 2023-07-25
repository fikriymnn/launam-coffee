"use client"
import Link from 'next/link';
import React from 'react';
import { CoffeeCanvas, Coffee } from "../components/canvas/coffee";
import { StarsCanvas, Stars } from "../components/canvas/beans";
import Footer from "../components/Footer";


export default function home() {
  return (

    <div className="h-screen py-20 text-indigo-100 z-10 relative">


      <div className="h-full container mx-auto md:flex md:items-center md:justify-between">
        <div className="w-full h-full md:w-1/2 mb-8 md:mb-0 mr-10 ml-20 mt-80 justify-center">
          <p className='text-6xl font-bold text-black'>Kedai Kopi Launam.</p>
          <p className='text-4xl text-black'>Menyediakan Berbagai Kopi.</p>
        </div>
        <div className="w-full h-full md:w-1/2">
          <CoffeeCanvas />
        </div>
      </div>

      <div className="h-full mx-auto grid grid-cols-2">
        <div className="col-auto"></div>
        <div className="w-full h-full mb-8 md:mb-0 mt-48 justify-center col-start-2">
          <p className='text-6xl font-bold text-black'>Kopi yang dibuat manual.</p>
          <p className='text-4xl text-black'>Harga murah rasa tidak murahan.</p>
        </div>
        <div className="w-full h-full md:w-1/2">

        </div>
      </div>

      <div className="h-9/12 container mx-auto md:flex md:items-center md:justify-between">
        <div className="w-full h-full md:mb-0 mt-20 mb-80 justify-center">
          <p className='text-[80px] font-bold text-black text-center m-auto '>Yuk Ngopi</p>
          <p className='text-4xl text-black text-center mb-36'>Launam Coffe.</p>
        </div>
      </div>

      <Footer />
    </div >

  )
}