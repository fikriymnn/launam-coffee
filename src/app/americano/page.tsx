"use client"
import React from 'react'

import { AmericanoCanvas, CoffeeAmericano } from "../../components/canvas/americano";
import { StarsCanvas, Stars } from "../../components/canvas/beans";
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';




const DetailMenu = () => {
  return (
    <>
    <Navbar/>

      <div >


        <div className="h-screen text-indigo-100">

          <div className="h-full container mx-auto md:flex md:items-center md:justify-between m">
            <div className="w-full h-full md:w-1/2 mb-8 md:mb-0 mr-10 ml-40  justify-center">
              <h2 className='text-5xl font-bold text-[#FFC26F]'>Americano</h2>
              <p className='text-base mt-5 text-[#FFC26F]'>Menu ini sendiri bisa disajikan panas maupun dingin. Americano terdiri dari espresso bisa juga double espresso atau double ristretto yang dicampur dengan air panas. Americano sendiri berasal dari Italia dan muncul dikarenakan kehadiran para tentara Amerika yang menetap di Italia. Seperti diketahui, orang Italia umumnya menikmati kopi dalam bentuk espresso. Sedangkan para tentara Amerika itu menganggap bahwa rasa espresso terlalu intens. Maka mereka mencampurkannya dengan air panas. Jadilah menu kopi Americano.</p>
              <p className='text-base mt-5 text-[#FFC26F]'>Cara menyajikan adalah espresso disiapkan terlebih dahulu lalu menambahkan air panas setelahnya. Hasil Americano biasanya nyaris tak meninggalkan krema di permukaan cangkir. Hal tersebut dikarenakan espresso yang diguyur air panas sehingga memecah krema yang ada pada espresso.</p>

            </div>
            <div className="w-full h-full md:w-1/2 ">
              <AmericanoCanvas />
            </div>
          </div>
        </div>



      </div>
      <Footer/>
    </>


  )
}

export default DetailMenu