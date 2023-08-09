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


    }, [data.length])
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
                <blockquote class="text-[40px] font-bold text-center text-[#FFC26F] ">
                    <p>Detail Promo</p>
                    <hr className="w-2/5 mb-16 mt-6 bg-white m-auto h-1 item-center border-white" />
                </blockquote>
                {data.length > 0 && data.map((data, i) => {
                    return (
                        <div className=" mx-56 p-10 bg-[#3C2A21] rounded-xl">
                            <Image src={data.assets} width={800} height={100} alt="promo image" className="mx-auto" />
                            <p className="text-center text-[#FFC26F] text-xl my-10">
                                <p className="text-center text-[#FFC26F] text-3xl my-8 font-bold">
                                    {data.text}
                                </p>
                                {data.detail}
                            </p>
                        </div>
                    )
                })}

                <Footer />
            </div>

        </>
    )
}