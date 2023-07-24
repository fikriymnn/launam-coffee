"use client"
import Link from 'next/link';
import React from 'react';
import { CoffeeCanvas, Coffee } from "../components/canvas/coffee";
import { StarsCanvas, Stars } from "../components/canvas/beans";


export default function home() {
  return (




    <div className="h-screen py-20 text-indigo-100">


      <div className="h-full container mx-auto md:flex md:items-center md:justify-between">
        <div className="w-full h-full md:w-1/2 mb-8 md:mb-0 mr-10 ml-40 mt-80 justify-center">
          <p className='text-5xl font-bold text-black'>Kedai Kopi Launam.</p>
          <p className='text-4xl text-black'>Menyediakan Berbagai Kopi.</p>
        </div>
        <div className="w-full h-full md:w-1/2">
          <CoffeeCanvas />
        </div>
      </div>




    </div >







  )
}