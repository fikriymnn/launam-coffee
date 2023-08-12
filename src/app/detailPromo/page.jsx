"use client"
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { collection, addDoc, getDocs, where, query, deleteDoc, updateDoc, doc, Firestore, documentId, getDoc } from "firebase/firestore";
import { db, storage } from '../../../lib/firebase/page'
import { useEffect, useState, } from "react";

export default function DetailPromo({ searchParams }) {
    const [data, setData] = useState([])

    useEffect(() => {


        getData()


    }, [])
    const getData = async () => {
        try {
            const docRef = doc(db, "promo", searchParams.id);
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
            <div className="h-screen">
                <blockquote class="md:text-[40px] sm:text-[25px] text-[15px] font-bold text-center text-[#FFC26F] ">
                    <p>Detail Promo</p>
                    <hr className="w-2/5 mb-16 mt-6 bg-white m-auto h-1 item-center border-white" />
                </blockquote>
                {data && data.map((data, i) => {
                    return (
                        <div className=" md:w-[800px] mx-auto sm:w-[450px] w-[300px] md:p-10 sm:p-8 p-4 bg-[#3C2A21] rounded-xl" key={i}>
                            <Image src={data.assets} width={800} height={100} alt="promo image" className="mx-auto" />
                            <p className="text-center text-[#FFC26F] md:text-xl sm:text-lg text-xs md:my-10 my-6">
                                <p className="text-center text-[#FFC26F] md:text-3xl sm:xl text-sm my-4 md:my-8 font-bold">
                                    {data.text}
                                </p>

                                {data.detail}
                            </p>
                        </div>
                    )
                })}
                <div className="mt-28 md:mt-0 sm:mt-0"></div>
                <Footer />
            </div>

        </>
    )
}