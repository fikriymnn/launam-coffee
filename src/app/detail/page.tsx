"use client"
import React from 'react'

import { CoffeeCanvas, Coffee } from "../../components/canvas/coffee";
import { StarsCanvas, Stars } from "../../components/canvas/beans";




const DetailMenu = () => {
  return (
    <section>

      <div className="bg-yellow-900">
        <StarsCanvas />

        <div className="h-screen py-20 text-indigo-100">

          <div className="h-full container mx-auto md:flex md:items-center md:justify-between m">
            <div className="w-full h-full md:w-1/2 mb-8 md:mb-0 mr-10 ml-40 mt-30 justify-center">
              <h2 className='text-5xl font-bold '>Americano</h2>
              <p className='text-base mt-5'>Menu ini sendiri bisa disajikan panas maupun dingin. Americano terdiri dari espresso bisa juga double espresso atau double ristretto yang dicampur dengan air panas. Americano sendiri berasal dari Italia dan muncul dikarenakan kehadiran para tentara Amerika yang menetap di Italia. Seperti diketahui, orang Italia umumnya menikmati kopi dalam bentuk espresso. Sedangkan para tentara Amerika itu menganggap bahwa rasa espresso terlalu intens. Maka mereka mencampurkannya dengan air panas. Jadilah menu kopi Americano.</p>
              <p className='text-base mt-5'>Cara menyajikan adalah espresso disiapkan terlebih dahulu lalu menambahkan air panas setelahnya. Hasil Americano biasanya nyaris tak meninggalkan krema di permukaan cangkir. Hal tersebut dikarenakan espresso yang diguyur air panas sehingga memecah krema yang ada pada espresso.</p>

            </div>
            <div className="w-full h-full md:w-1/2 ">
              <CoffeeCanvas />
            </div>
          </div>
        </div>



      </div>
    </section>


  )
}

export default DetailMenu