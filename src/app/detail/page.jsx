"use client"
import React from "react";
import ObjectDetail from "@/components/ObjectDetail";
import {
  AmericanoCanvas,
  CoffeeAmericano,
} from "../../components/canvas/americano";
import { StarsCanvas, Stars } from "../../components/canvas/beans";
import Navbar from "@/components/Navbar";
import { collection, addDoc, getDocs, where, query, deleteDoc, updateDoc, doc, Firestore, documentId, getDoc } from "firebase/firestore";
import { db, storage } from '../../../lib/firebase/page'
import { useEffect, useState, } from "react";

const DetailMenu = ({ searchParams }) => {

  const [data, setData] = useState([])

  useEffect(() => {


    getData()


  }, [data.length])
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
          {data.length > 0 && data.map((data, i) => {
            return (
              <div className="h-screen text-indigo-100" key={1}>
                <div className="h-full container mx-auto md:flex md:items-center md:justify-between m">
                  <div className="w-full h-full md:w-1/2 mb-8 md:mb-0 mr-10 ml-40  justify-center">
                    <h2 className="text-5xl mt-10 font-bold text-[#FFC26F]">
                      {data.namaProd}
                    </h2>
                    <h2 className="text-2xl mt-5 font-bold text-[#FFC26F]">
                      {data.harga}
                    </h2>
                    <p className="text-base mt-10 text-[#FFC26F]">
                      {data.detail}
                    </p>
                  </div>
                  <div className="w-full h-full md:w-1/2 ">
                    <ObjectDetail src={data.assets} />
                  </div>
                </div>
              </div>
            )
          })}

        </div>
      </section>
    </>
  );
};

export default DetailMenu;
