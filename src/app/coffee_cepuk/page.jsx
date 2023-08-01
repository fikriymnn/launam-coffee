"use client"
import React from 'react'

import { CoffeeCepukCanvas, CoffeeCepuk } from "../../components/canvas/coffee_cepuk";
import { StarsCanvas, Stars } from "../../components/canvas/beans";
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';




const Vietdrip = () => {
    return (
<>
<Navbar />
        <div >


            <div className="h-screen py-20 text-indigo-100">

                <div className="h-full container mx-auto md:flex md:items-center md:justify-between m">
                    <div className="w-full h-full md:w-1/2 mb-8 md:mb-0 mr-10 ml-40 mt-60 justify-center">
                        <h2 className='text-5xl font-bold text-[#FFC26F] '>Es Kopi Cepuk</h2>
                        <p className='text-base mt-5 text-[#FFC26F]'>Menu ini sendiri bisa diminum kapan saja dan dimana saja. Es kopi Cepuk berisi 250 ml kopi yang siap di minum</p>


                    </div>
                    <div className="w-full h-full md:w-1/2 ">
                        <CoffeeCepukCanvas />
                    </div>
                </div>
            </div>



        </div>
        <Footer/>

</>

    )
}

export default Vietdrip