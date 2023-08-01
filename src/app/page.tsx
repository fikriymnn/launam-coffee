"use client"
import Link from 'next/link';
import React from 'react';
import { CoffeeCanvas, Coffee } from "../components/canvas/coffee";
import { StarsCanvas, Stars } from "../components/canvas/beans";
import Footer from "../components/Footer";
import { VietdripCanvas } from '@/components/canvas/vietdrip';
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { AmericanoCanvas } from '@/components/canvas/americano';
import CardPromo from '@/components/CardPromo';
import { CoffeeCepukCanvas, CoffeeCepuk } from "@/components/canvas/coffee_cepuk";
import Navbar from '@/components/Navbar';


export default function home() {
  return (
    <>
      <Navbar />
      <div className="h-screen py-20 text-indigo-100 z-10 relative">





        <div className="h-full container mx-auto md:flex md:items-center md:justify-between">
          <div className="w-full h-full md:w-1/2 md:mb-0 mr-10 ml-20 mt-80 justify-center">
            <p className='text-6xl font-bold text-[#FFC26F]'>Kedai Kopi Launam.</p>
            <p className='text-4xl text-[#FFC26F]'>Menyediakan Berbagai Kopi.</p>
          </div>
          <div className="w-full h-full md:w-1/2">
            <CoffeeCanvas />
          </div>
        </div>





        <div>
          <div className="w-full h-full mb-16 mt-5 justify-center col-start-2 text-center">
            <p className='text-5xl font-bold text-[#FFC26F]'>Top Menu.</p>
            <p className='text-3xl text-[#FFC26F]'>Menu andalan kami di Launam Coffee.</p>
          </div>
          <div className='flex justify-evenly'>
            <motion.div>
              <Tilt
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450,
                }}
                className='p-5 h-92 rounded-2xl sm:w-[360px] w-full bg-[#3C2A21]'
              >
                <div className=''>
                  <h3 className='text-white font-bold text-[24px]'>Es Kopi Cepuk</h3>
                </div>
                <div className='mt-5'>

                </div>
                <div className='bg-[#d6a764] w-full mb-5 rounded-lg pt-5 h-56'>
                  <CoffeeCepukCanvas />
                </div>

                <a href="/americano" className="text-[#884A39] dark:border-gray-600 bg-white hover:bg-gray-200 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ">Detail</a>



              </Tilt>

            </motion.div>
            <motion.div>
              <Tilt
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450,
                }}
                className='p-5 h-92 rounded-2xl sm:w-[360px] w-full bg-[#3C2A21]'
              >
                <div className=''>
                  <h3 className='text-white font-bold text-[24px]'>Americano</h3>
                </div>
                <div className='mt-5'>

                </div>
                <div className='bg-[#d6a764] w-full mb-5 rounded-lg pt-5 h-56'>
                  <AmericanoCanvas />
                </div>

                <a href="/americano" className="text-[#884A39] dark:border-gray-600 bg-white hover:bg-gray-200 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ">Detail</a>



              </Tilt>
            </motion.div>
            <motion.div>
              <Tilt
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450,
                }}
                className='p-5 h-92 rounded-2xl sm:w-[360px] w-full bg-[#3C2A21]'
              >
                <div className=''>
                  <h3 className='text-white font-bold text-[24px]'>Vietnam Drip</h3>
                </div>
                <div className='mt-5'>

                </div>
                <div className='bg-[#d6a764] w-full mb-5 rounded-lg pt-5 h-56'>
                  <VietdripCanvas />
                </div>

                <a href="/americano" className="text-[#884A39] dark:border-gray-600 bg-white hover:bg-gray-200 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ">Detail</a>



              </Tilt>
            </motion.div>
          </div>
        </div>
        <div>
          <div className="w-full h-full mb-16 mt-32 justify-center col-start-2 text-center">
            <p className='text-5xl font-bold text-[#FFC26F]'>Promo.</p>
            <p className='text-3xl text-[#FFC26F]'>Berbagai promo di Launam Coffee.</p>
          </div>
          <div className='flex justify-evenly'>
            <CardPromo src={'/assets/promo.jpg'} text={"Potongztan 50% Akhir Tahun #murahBanget"} />
            <CardPromo src={'/assets/promo2.jpg'} text={"Cuci gudang abis abisan promo Ramadhan buy 1 get 1"} />
            <CardPromo src={'/assets/promo3.jpg'} text={"Potonngtan 50% Akhir Tahun>"} />
          </div>
        </div>
        <div className="h-9/12 container mx-auto md:flex md:items-center md:justify-between">
          <div className="w-full h-full md:mb-0 mt-48 mb-80 justify-center">
            <p className='text-[80px] font-bold text-[#FFC26F] text-center m-auto '>Yuk Ngopi</p>
            <p className='text-4xl text-[#FFC26F] text-center mb-36'>Launam Coffe.</p>
          </div>
        </div>
        <Footer />

      </div >


    </>
  )
}