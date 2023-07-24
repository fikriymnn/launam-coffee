"use client"
import React from 'react'
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { CoffeeCanvas, Coffee } from "../../components/canvas/coffee";
import { AmericanoCanvas, CoffeeAmericano } from "../../components/canvas/americano";
import { VietdripCanvas, CoffeeViet } from "../../components/canvas/vietdrip";
import { CoffeeCepukCanvas, CoffeeCepuk } from "../../components/canvas/coffee_cepuk";

import { fadeIn, textVariant } from "../../utils/motion";


const Menu = () => {
  return (
    <>
      <div className='mt-20 flex flex-wrap gap-7 pl-40'>


        <motion.div>
          <Tilt
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className='p-5 rounded-2xl sm:w-[360px] w-full bg-gray-600'
          >
            <div className='mt-5'>
              <h3 className='text-white font-bold text-[24px]'>Americano</h3>
            </div>
            <div className='mt-5'>

            </div>
            <AmericanoCanvas />

            <a href="/americano" class="text-black dark:border-gray-600 bg-white hover:bg-gray-200 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Detail</a>



          </Tilt>
        </motion.div>
        <motion.div>
          <Tilt
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className='p-5 rounded-2xl sm:w-[360px] w-full bg-gray-600'
          >
            <div className='mt-5'>
              <h3 className='text-white font-bold text-[24px]'>Es Kopi Cepuk</h3>
            </div>
            <div className='mt-5'>

            </div>
            <CoffeeCepukCanvas />

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
            className='p-5 rounded-2xl sm:w-[360px] w-full bg-gray-600'
          >
            <div className='mt-5'>
              <h3 className='text-white font-bold text-[24px]'>Vietnam Drip</h3>
            </div>
            <div className='mt-5'>

            </div>
            <VietdripCanvas />

            <a href="/vietdrip" class="text-black dark:border-gray-600 bg-white hover:bg-gray-200 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Detail</a>



          </Tilt>
        </motion.div>

      </div></>


  )
}

export default Menu