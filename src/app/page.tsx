"use client"
import Link from 'next/link';
import React from 'react';
import { CoffeeCanvas, Coffee } from "../components/canvas/coffee";
import { StarsCanvas, Stars } from "../components/canvas/beans";


export default function home() {
  return (


    <div >

      <div className="h-screen py-20 text-indigo-100">


        <div className="h-full container mx-auto md:flex md:items-center md:justify-between">
          <div className="w-full h-full md:w-1/2 mb-8 md:mb-0 justify-center">
            <p className='text-5xl font-bold'>Kedai Kopi Launam.</p>
            <p className='text-4xl'>Menyediakan Berbagai Kopi.</p>


          </div>
          <div className="w-full h-full md:w-1/2">
            <CoffeeCanvas />
          </div>
        </div>
      </div>



    </div>



  )
}