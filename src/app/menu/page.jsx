"use client"
import React from 'react'
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { CoffeeCanvas, Coffee } from "../../components/canvas/coffee";
import { AmericanoCanvas, CoffeeAmericano } from "../../components/canvas/americano";
import { VietdripCanvas, CoffeeViet } from "../../components/canvas/vietdrip";
import { CoffeeCepukCanvas, CoffeeCepuk } from "../../components/canvas/coffee_cepuk";

import { fadeIn, textVariant } from "../../utils/motion";
import Footer from '@/components/Footer';


const Menu = () => {
  return (
    <>
      <blockquote class="text-[40px] font-bold text-center text-gray-900 ">
        <p>Menu Kopi</p>
        <hr className='w-2/5 mb-16 mt-6 bg-black m-auto h-1 item-center border-black'/>
      </blockquote>

      <div class="text-[20px] text-center text-[#3C2A21] font-bold flex mt-10">
        <div className='w-5/6 m-auto'> 
        <p className='text-center m-auto'>Penyajian Kopi di Kedai Kopi Launam menggunakan teknik Manual Brewing
          Manual Brewing adalah cara menyeduh kopi secara manual tanpa menggunakan mesin espresso sama sekali. Teknik ini erat hubungannya dengan bubuk kopi yg sudah digiling,
          filter atau penyaringan, serta air panas di tingkat temperatur tertentu</p>
        </div>
        
      </div>




      <div className='mt-20 grid grid-cols-3 gap-20 px-20'>

      

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
              <h3 className='text-[#ffdcd2] font-bold text-[24px]'>Americano</h3>
            </div>
            <div className='mt-5'>

            </div>
            <div className='bg-[#ffdcd2] w-full mb-5 rounded-lg pt-5 h-56'>
            <AmericanoCanvas />
            </div>

            <a href="/americano" class="text-black dark:border-gray-600 bg-white hover:bg-gray-200 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ">Detail</a>



          </Tilt>
        </motion.div>
        
        <motion.div>
          <Tilt
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className='p-5 rounded-2xl sm:w-[360px] w-full bg-[#3C2A21]'
          >
            <div className=''>
              <h3 className='text-[#ffdcd2] font-bold text-[24px]'>Es Kopi Cepuk</h3>
            </div>
            <div className='mt-5'>

            </div>
            <div className='bg-[#ffdcd2] w-full mb-5 rounded-lg pt-5'>
            <CoffeeCepukCanvas />
            </div>
            

            <a href="/coffee_cepuk" class="text-black dark:border-gray-600 bg-white hover:bg-gray-200 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Detail</a>



          </Tilt>
        </motion.div>
        <motion.div>
          <Tilt
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className='p-5 rounded-2xl sm:w-[360px] w-full bg-[#3C2A21]'
          >
            <div className=''>
              <h3 className='text-[#ffdcd2] font-bold text-[24px]'>Vietnam Drip</h3>
            </div>
            <div className='mt-5'>

            </div>
            <div className='bg-[#ffdcd2] w-full mb-5 rounded-lg pt-5'>
            <VietdripCanvas />
            </div>
           

            <a href="/vietdrip" class="text-black dark:border-gray-600 bg-white hover:bg-gray-200 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Detail</a>



          </Tilt>
        </motion.div>
        
      </div>
      <br/>
      <br/>
      <br/>
      <Footer/>
      </>


  )
}

export default Menu