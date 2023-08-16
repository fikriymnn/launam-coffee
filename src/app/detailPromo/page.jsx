"use client"
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { collection, addDoc, getDocs, where, query, deleteDoc, updateDoc, doc, Firestore, documentId, getDoc } from "firebase/firestore";
import { db, storage } from '../../../lib/firebase/page'
import { useEffect, useState, } from "react";
import parse from 'html-react-parser';
export default function DetailPromo({ searchParams }) {
    const [data, setData] = useState([])
    const idDockumen = searchParams.id;

    useEffect(() => {


        getData()


    }, [data.length])
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
        <>

            <Navbar />
            <div className="h-screen">
                <blockquote className="md:text-[40px] sm:text-[25px] text-[15px] font-bold text-center text-[#FFC26F] ">
                    <p>Detail Promo</p>
                    <hr className="w-2/5 mb-16 mt-6 bg-white m-auto h-1 item-center border-white" />
                </blockquote>
                <div>
                    {data && data.map((data, i) => {
                        if (data.id == idDockumen) {
                            return (
                                <div className=" md:w-[800px] mx-auto sm:w-[450px] w-[300px] md:p-10 sm:p-8 p-4 bg-[#3C2A21] rounded-xl" key={i}>
                                    <Image src={data.assets} width={800} height={100} alt="promo image" className="mx-auto" />
                                    <p className="text-center text-[#FFC26F] md:text-xl sm:text-lg text-xs md:my-10 my-6">
                                        <p className="text-center text-[#FFC26F] md:text-3xl sm:xl text-sm my-4 md:my-8 font-bold">
                                            {data.text}
                                        </p>

                                        {parse(data.detail)}
                                    </p>
                                </div>
                            )
                        } else {
                            return;
                        }

                    })}
                </div>

                <div className="mt-28 md:mt-0 sm:mt-0"></div>
                <Footer />
            </div>

        </>
    )
}