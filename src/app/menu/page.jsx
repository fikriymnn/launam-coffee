"use client";
import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { CoffeeCanvas, Coffee } from "../../components/canvas/coffee";
import {
  AmericanoCanvas,
  CoffeeAmericano,
} from "../../components/canvas/americano";
import { VietdripCanvas, CoffeeViet } from "../../components/canvas/vietdrip";
import { collection, addDoc, getDocs, where, query, deleteDoc, updateDoc, doc, Firestore, } from "firebase/firestore";
import { db, storage } from '../../../lib/firebase/page'
import {
  CoffeeCepukCanvas,
  CoffeeCepuk,
} from "../../components/canvas/coffee_cepuk";

import { fadeIn, textVariant } from "../../utils/motion";
import { useEffect, useState, } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import CardCoffe from "@/components/CardCoffe";
export default function Menu() {
  const [data, setData] = useState([])

  useEffect(() => {


    getData()


  }, [data.length])
  const getData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "produk"));
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
    <>
      <Navbar />
      <blockquote class="text-[40px] font-bold text-center text-[#FFC26F] ">
        <p>Menu Kopi</p>
        <hr className="w-2/5 mb-16 mt-6 bg-white m-auto h-1 item-center border-white" />
      </blockquote>

      <div class="text-[20px] text-center text-[#FFC26F] font-bold flex mt-10">
        <div className="w-5/6 m-auto">
          <p className="text-center m-auto">
            Penyajian Kopi di Kedai Kopi Launam menggunakan teknik Manual
            Brewing Manual Brewing adalah cara menyeduh kopi secara manual tanpa
            menggunakan mesin espresso sama sekali. Teknik ini erat hubungannya
            dengan bubuk kopi yg sudah digiling, filter atau penyaringan, serta
            air panas di tingkat temperatur tertentu
          </p>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-3 gap-20 px-20">
        {data.length > 0 && data.map((data, i) => {

          // eslint-disable-next-line react/jsx-key
          return (<CardCoffe obj={data.assets} nama={data.namaProd} harga={data.harga} detail={data.detail} key={i} id={data.id} doc />

          )
        })}



      </div>
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};


