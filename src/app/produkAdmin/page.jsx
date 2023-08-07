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


export default function ProdukAdmin() {
  const [data, setData] = useState([])

  useEffect(() => {
    

    getData()


  },[data.length])
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
    <div className="h-screen">
      <NavbarAdmin />
      <blockquote className="text-[40px] font-bold text-center text-gray-900 ">
        <p>Dashboard Produk</p>
        <hr className="h-1 w-2/5 mb-16 mt-6 bg-black m-auto item-center border-black" />
      </blockquote>
      <div className="flex items-center">
        <div className="bg-[#3C2A21] rounded w-64 mx-auto mb-10 hover:bg-[#ffc36fa4]">
          <Link className="text-center px-10 my-16 m-auto text-xl text-white font-bold" href={'/tambahProduk'}> Tambah Produk</Link>
        </div>
      </div>



      <div className="grid grid-cols-3 justify-items-center gap-10">
        {data.length > 0 && data.map((data,i) => {
         
          // eslint-disable-next-line react/jsx-key
         return( <CardCoffeeAdmin src={data.assets} name={data.namaProd} id={data.id} harga={data.harga} deskripsi={data.detail} key={i}/>
         )
})}

        {/* <CardCoffeeAdmin src={"./assets/botolkopi.gltf"} />
        <CardCoffeeAdmin src={"./assets/botolkopi.gltf"} />
        <CardCoffeeAdmin src={"./assets/botolkopi.gltf"} />
        <CardCoffeeAdmin src={"./assets/americano.gltf"} />
        <CardCoffeeAdmin src={"./assets/botolkopi.gltf"} /> */}
      </div>
      <div className="h-6/12"></div>
      <Footer />
    </div>
  );
}
