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
import CardCofee from '@/components/CardCoffe'


export default function home() {
  return (
    <>
      <Navbar />
      <div className="h-[600px] sm:h-screen md:h-screen py-5 md:py-20 text-indigo-100 z-10 relative">





        <div className="h-full  mx-auto md:flex md:items-center md:justify-between">
          <div className="w-full mt-20 sm:mb-10 mb-20 md:h-full md:w-1/2 md:mb-0 md:ml-16 sm:mt-10  md:mt-48  text-center">
            <p className='md:text-5xl sm:text-4xl text-3xl font-bold text-[#FFC26F]'>Kedai Kopi Launam.</p>
            <p className='md:text-4xl sm:text-3xl text-[#FFC26F]'>Menyediakan Berbagai Kopi.</p>
          </div>
          <div className="w-3/4  mt-10 sm:h-3/4 sm:w-3/4 mx-auto h-3/5 sm:mx-auto md:h-full">
            <CoffeeCanvas />
          </div>
        </div>





        <div>
          <div className="w-full h-full mb-16 mt-5 justify-center col-start-2 text-center">
            <p className='md:text-5xl sm:text-4xl text-3xl font-bold text-[#FFC26F]'>Top Menu.</p>
            <p className='md:text-4xl sm:text-3xl text-[#FFC26F]'>Menu andalan kami di Launam Coffee.</p>
          </div>
          <div className='flex justify-evenly'>
          <CardCofee obj={'/assets/botolkopi.gltf'} nama={'Americano'} detail={'asdkasd asdasdas sadasde rgretger grergd sdfsdfsdf'} harga={'Rp.30000'}/>
          <CardCofee obj={'/assets/botolkopi.gltf'} nama={'Americano'} detail={'asdkasd asdasdas sadasde rgretger grergd sdfsdfsdf'} harga={'Rp.30000'}/>
           <CardCofee obj={'/assets/botolkopi.gltf'} nama={'Americano'} detail={'asdkasd asdasdas sadasde rgretger grergd sdfsdfsdf'} harga={'Rp.30000'}/>
          </div>
        </div>
        <div>
          <div className="w-full h-full mb-16 mt-32 justify-center col-start-2 text-center">
            <p className='md:text-5xl sm:text-4xl text-3xl font-bold text-[#FFC26F]'>Promo.</p>
            <p className='md:text-4xl sm:text-3xl text-[#FFC26F]'>Berbagai promo di Launam Coffee.</p>
          </div>
          <div className='flex justify-evenly'>
            <CardPromo src={'/assets/promo.jpg'} text={"Potongztan 50% Akhir Tahun #murahBanget" }detail={"cdscscc"} />
            <CardPromo src={'/assets/promo2.jpg'} text={"Cuci gudang abis abisan promo Ramadhan buy 1 get 1"}detail={"cdscscc"} />
            <CardPromo src={'/assets/promo3.jpg'} text={"Potonngtan 50% Akhir Tahun>"}detail={"cdscscc"} />
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