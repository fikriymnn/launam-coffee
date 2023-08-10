"use client";
import Image from "next/image"
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { collection, addDoc, getDocs, where, query, deleteDoc, updateDoc, doc, Firestore, } from "firebase/firestore";
import { db, storage } from '../../lib/firebase/page'
export default function CardPromoAdmin({ src, text, detail, id }) {
  const deleteProd = async () => {
    try {
      // Delete the todo document with the given ID from the "todos" collection in Firestore.
      await deleteDoc(doc(db, "promo", id));
      alert("delete success")
      location.reload();
      console.log("Deleted successfully");



    } catch (error) {
      console.error("An error occured", error);
    }
  }
  return (
    <motion.div>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}

      >
        <div className="bg-[#3C2A21] md:h-[500px] sm:h-[280px] h-[175px] md:w-[360px] sm:w-[200px] w-[120px] rounded-lg mb-16">
          <Image className="w-full m-auto rounded-lg" src={src} width={180} height={180} />
          <div className="flex justify-center">
            <div className="md:h-[80px] sm:h-[40px] h-[20px]">
              <h1 className="md:text-base sm:text-xs text-[6px] text-white font-bold md:p-5 sm:p-2 p-1 sm:mt-2 mt-1 text-center">{text}</h1>
            </div>

          </div>
          <div className="ml-5 pb-4">
            <a
              href={`/editPromo?id=${id}&text=${text}&detail=${detail}`}
              class="text-black dark:border-gray-600 bg-white hover:bg-gray-200 focus:ring-4 focus:ring-blue-300 font-medium md:rounded-lg sm:rounded-sm rounded-xs  md:text-sm sm:text-[10px] text-[7px] md:px-5 sm:px-3 px-1 md:py-2.5 sm:py-1 py-0.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
            >
              Edit
            </a>
            <button onClick={deleteProd} className="text-black dark:border-gray-600 bg-white hover:bg-gray-200 focus:ring-4 focus:ring-blue-300 font-medium md:rounded-lg sm:rounded-sm rounded-xs md:text-sm sm:text-[10px] text-[7px] md:px-5 sm:px-3 px-1 md:py-2.5 sm:py-1 py-0.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"  >
              Delete
            </button>
          </div>


        </div>
      </Tilt>
    </motion.div>
  )
}