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
import CardCoffe from "@/components/CardCoffe";
import { AuthContextProvider } from "../components/authService";
import { collection, addDoc, getDocs, where, query, deleteDoc, updateDoc, doc, Firestore, orderBy, limit } from "firebase/firestore";
import { db, storage, firebaseAnalytics } from '../../lib/firebase/page'

import { useEffect, useState, } from "react";
import { getAnalytics, logEvent } from "firebase/analytics";


export default function Home() {
  const [data, setData] = useState([])
  const [data2, setData2] = useState([])


  useEffect(() => {
    logEvent(firebaseAnalytics, "Website Visited");
  }, [])

  useEffect(() => {


    getData()
    getData2()


  }, [data.length])
  const getData = async () => {
    try {
      const ordersRef = collection(db, "produk");
      const q = query(ordersRef, orderBy("namaProd", "desc"), limit(3));
      const querySnapshot = await getDocs(q);
      let data = [];
      console.log(querySnapshot)
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        data.push({ ...doc.data(), id: doc.id })
      });
      setData(data)
    } catch (error) {
      alert(error)
    }

  }

  const getData2 = async () => {
    try {
      const ordersRef = collection(db, "promo");
      const q = query(ordersRef, orderBy("text", "desc"), limit(3));
      const querySnapshot = await getDocs(q);
      let data2 = [];
      console.log(querySnapshot)
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        data2.push({ ...doc.data(), id: doc.id })
      });
      setData2(data2)
    } catch (error) {
      alert(error)
    }

  }
  return (
    <>

      <Navbar />
      <div className="h-[600px] sm:h-screen md:h-screen py-5 md:py-20 text-indigo-100 z-10 relative">





        <div className="h-full  mx-auto md:flex md:items-center md:justify-between">
          <div className="w-full mt-20 sm:mb-10 mb-20 md:h-full md:w-1/2 md:mb-0 md:ml-16 sm:mt-10  md:mt-48  text-center">
            <p className='md:text-5xl sm:text-4xl text-3xl font-bold text-[#FFC26F]'>Kedai Kopi Launam.</p>
            <p className='md:text-4xl sm:text-3xl text-[#FFC26F]'>Menyediakan Berbagai Kopi</p>
          </div>
          <div className="w-3/4  mt-10 sm:h-3/4 sm:w-3/4 mx-auto h-3/5 sm:mx-auto md:h-full">
            <CoffeeCanvas />
          </div>
        </div>





        <div>
          <div className="w-full h-full mb-16 mt-5 justify-center col-start-2 text-center">
            <p className='md:text-5xl sm:text-4xl text-3xl font-bold text-[#FFC26F]'>Menu Terbaru.</p>
            <p className='md:text-4xl sm:text-3xl text-[#FFC26F]'>Menu terbaru kami di Launam Coffee.</p>
          </div>
          <div className='flex justify-evenly'>
            {data.map((data, i) => {

              // eslint-disable-next-line react/jsx-key
              return (<CardCoffe obj={data.assets} nama={data.namaProd} harga={data.harga} detail={data.detail} key={i} id={data.id} doc />

              )
            })}

          </div>
        </div>
        <div>
          <div className="w-full h-full mb-16 mt-32 justify-center col-start-2 text-center">
            <p className='md:text-5xl sm:text-4xl text-3xl font-bold text-[#FFC26F]'>Promo.</p>
            <p className='md:text-4xl sm:text-3xl text-[#FFC26F]'>Berbagai promo di Launam Coffee.</p>
          </div>
          <div className='flex justify-evenly'>
            {data2.map((v, i) => {
              return (
                <CardPromo src={v.assets} text={v.text} detail={v.detail} key={i} id={v.id} />
              )
            })}
          </div>
        </div>
        <div className="h-9/12 container mx-auto md:flex md:items-center md:justify-between">
          <div className="w-full h-full mb-40 mt-40 md:mt-80 md:mb-56 justify-center">
            <p className='md:text-6xl sm:text-5xl text-4xl font-bold text-[#FFC26F] text-center'>Yuk Ngopi</p>
            <p className='md:text-4xl sm:text-3xl text-[#FFC26F] text-center'>Launam Coffe.</p>
          </div>
        </div>
        <Footer />

      </div >



    </>
  )
}