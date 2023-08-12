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




export default function DetailMenu({ searchParams }) {
  const [data, setData] = useState([])



  useEffect(() => {


    getData()


  }, [])
  const getData = async () => {
    try {
      const docRef = doc(db, "produk", searchParams.id);
      const querySnapshot = await getDoc(docRef);
      let data = [];
      console.log(querySnapshot)
      if (querySnapshot.exists()) {
        console.log("Document data:", querySnapshot.data());
        data.push({ ...querySnapshot.data(), id: querySnapshot.id })
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }


      setData(data)
    } catch (error) {
      alert(error)
    }

  }
  return (
    <>
      <Navbar />
      <section>
        <div>
          {data && data.map((data, i) => {

            return (
              <div className="h-screen text-indigo-100" key={i}>
                <div className="h-full container mx-auto md:flex md:items-center md:justify-between sm:grid sm:grid-cols-2 grid grid-cols-1 justify-items-center">
                  <div className="w-full h-full md:w-1/2 mb-8 md:mb-0  sm:mr-0 md:mr-32 sm:ml-14  md:mt-0 mt-10 md:ml-40  justify-center">
                    <h2 className="md:text-5xl md:mt-10 sm:text-3xl text-2xl text-center mx-auto font-bold text-[#FFC26F]">
                      {data.namaProd}
                    </h2>
                    <h2 className="md:text-2xl sm:text-xl text-xs mt-5 text-center font-bold text-[#FFC26F]">
                      Rp. {data.harga}
                    </h2>
                    <p className="md:text-base sm:text-sm text-xs text-center mt-10 text-[#FFC26F]">
                      {data.detail}
                    </p>
                  </div>
                  <div className="sm:h-1/2 h-3/4 md:h-full md:w-1/2 sm:w-3/4 w-3/4">
                    <ObjectDetail src={data.assets} />
                  </div>
                </div>
              </div>
            )
          })

          }

        </div>
      </section>
      <Footer />
    </>
  );
};


