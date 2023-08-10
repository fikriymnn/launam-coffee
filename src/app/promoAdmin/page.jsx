"use client";
import NavbarAdmin from "../../components/NavbarAdmin";
import {
  AmericanoCanvas,
  CoffeeAmericano,
} from "../../components/canvas/americano";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

import CardCoffeeAdmin from "@/components/CardCoffeAdmin";
import { collection, addDoc, getDocs, where, query, deleteDoc, updateDoc, doc, Firestore, } from "firebase/firestore";
import { db, storage } from '../../../lib/firebase/page'
import Link from "next/link";
import { useEffect, useState, } from "react";
import CardPromoAdmin from '@/components/CardPromoAdmin'

export default function Promo() {
  const [data, setData] = useState([])

  useEffect(() => {
    

    getData()


  },[data.length])
  const getData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "promo"));
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
  



  return (
    <div className="h-screen">
      <NavbarAdmin />
      <blockquote className="md:text-[40px] sm:text-[30px] text-[20px] font-bold text-center text-gray-900 ">
        <p>Dashboard Promo</p>
        <hr className="h-1 w-2/5 mb-16 mt-6 bg-black m-auto item-center border-black" />
      </blockquote>
      <div className="flex items-center">
          <div className="bg-[#3C2A21] rounded md:w-64 sm:w-40 w-36 mb-10 flex items-center mx-auto hover:bg-[#ffc36fa4]">
            <Link className="text-center md:px-10 sm:px-2 px-1 my-1 md:my-5 sm:my-2 mx-auto md:text-xl  sm:text-[13px] text-xs text-[#FFC26F] font-bold" href={'/tambahPromo'}>Tambah Promo</Link>
          </div>
        </div>



      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-2 justify-items-center">
        {data.length > 0 && data.map((data,i) => {
         
          // eslint-disable-next-line react/jsx-key
         return( <CardPromoAdmin src={data.assets} text={data.text} detail={data.detail} id={data.id} key={i}/>
         )
})}

        
      </div>
      <div className="h-6/12"></div>
      <Footer />
    </div>
  );
}
