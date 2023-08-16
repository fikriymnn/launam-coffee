"use client"
import Footer from "@/components/Footer";
import React, { useEffect, useState } from "react";
import ObjectDetail from "@/components/ObjectDetail";
import {
  AmericanoCanvas,
  CoffeeAmericano,
} from "../../components/canvas/americano";
import { StarsCanvas, Stars } from "../../components/canvas/beans";
import Navbar from "@/components/Navbar";
import { collection, addDoc, getDocs, where, query, deleteDoc, updateDoc, doc, Firestore, documentId, getDoc } from "firebase/firestore";
import { db, storage } from '../../../lib/firebase/page'
import parse from 'html-react-parser';



export default function DetailMenu({ searchParams }) {
  const [data, setData] = useState([])

  const idDockumen = searchParams.id;



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

      <div>
        {data && data.map((data, i) => {
          if (data.id == idDockumen) {

            return (

              <div className="h-screen text-indigo-100" key={i}>
                <div className="h-full container mx-auto md:flex md:items-center md:justify-between sm:grid sm:grid-cols-2 grid grid-cols-1 justify-items-center">
                  <div className="w-full h-full md:w-1/2 mb-8 md:mb-0  sm:mr-0 md:mr-32 sm:ml-14  md:mt-0 mt-10 md:ml-40  justify-center">
                    <h2 className="md:text-5xl md:mt-10 sm:text-3xl text-2xl text-center mx-auto font-bold text-[#FFC26F]">
                      {
                        data.namaProd}
                    </h2>
                    <h2 className="md:text-2xl sm:text-xl text-xs mt-5 text-center font-bold text-[#FFC26F]">
                      {data.harga}
                    </h2>
                    <p className="md:text-base sm:text-sm text-xs text-center mt-10 text-[#FFC26F]">
                      {parse(data.detail)}
                    </p>
                  </div>
                  <div className="sm:h-1/2 h-3/4 md:h-full md:w-1/2 sm:w-3/4 w-3/4">
                    <ObjectDetail src={data.assets} />
                  </div>
                </div>
              </div>
            )
          } else {
            return;
          }


        })

        }

      </div>

      <Footer />
    </>
  );
};


