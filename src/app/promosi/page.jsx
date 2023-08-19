"use client";
import CardPromo from "@/components/CardPromo";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import {
  collection,
  addDoc,
  getDocs,
  where,
  query,
  deleteDoc,
  updateDoc,
  doc,
  Firestore,
} from "firebase/firestore";
import { db, storage, firebaseAnalytics } from "../../../lib/firebase/page";
import { useEffect, useState } from "react";
import { getAnalytics, logEvent } from "firebase/analytics";

export default function Promosi({ searchParams }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    logEvent(firebaseAnalytics, "Promo Visited");
  }, []);
  useEffect(() => {
    getData();
  }, [data.length]);
  const getData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "promo"));
      let data = [];
      console.log(querySnapshot);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        data.push({ ...doc.data(), id: doc.id });
      });
      setData(data);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <Navbar />
      <blockquote className="md:text-[40px] sm:text-[30px] text-[20px] font-bold text-center text-[#FFC26F] ">
        <p>Promo</p>
        <hr className="h-1 w-2/5 md:mb-24 sm:mb-20 mb-16 md:mt-6 sm:mt-4 mt-2 bg-white m-auto item-center border-white" />
      </blockquote>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-2 justify-items-center">
        {data.map((v, i) => {
          return (
            <CardPromo
              src={v.assets}
              text={v.text}
              detail={v.detail}
              key={i}
              id={v.id}
            />
          );
        })}
      </div>
      <div className="mb-56"></div>
      <Footer />
    </>
  );
}
