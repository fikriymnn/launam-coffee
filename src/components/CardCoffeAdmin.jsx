"use client";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { collection, addDoc, getDocs, where, query, deleteDoc, updateDoc, doc, Firestore, } from "firebase/firestore";
import { db, storage } from '../../lib/firebase/page'
import { useRouter } from "next/navigation";



const Object = ({ src }) => {
  const coffee = useGLTF(src);

  return <primitive object={coffee.scene} scale={5} position-y={-2} />;
};

export default function CardCoffeeAdmin({ src, name, harga, deskripsi, id }) {
  const router = useRouter();
  const deleteProd = async () => {
    try {
      // Delete the todo document with the given ID from the "todos" collection in Firestore.
      await deleteDoc(doc(db, "produk", id));
      alert("delete success")
      location.reload();
      console.log("Deleted successfully");



    } catch (error) {
      console.error("An error occured", error);
    }
  };

  return (
    <>
      <motion.div>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="md:p-5 sm:p-4 p-3 mb-16  rounded-2xl sm:w-[200px] md:w-[350px] w-[120px]  bg-[#3C2A21]"
        >
          <div className="" key={id}>
            <h3 className="text-[#ffdcd2] font-bold md:text-[21px] sm:text-[16px] text-[10px]">{name}</h3>
          </div>
          <div className="md:mt-5 sm:mt-[10px] mb-[5px]"></div>
          <div className="bg-[#d6a764] w-full  md:mb-5 sm:mb-[10px] mb-[5px] rounded-lg pt-5 md:h-56 sm:h-28 h-16">
            <Canvas
              shadows
              frameloop="demand"
              dpr={[1, 5]}
              gl={{ preserveDrawingBuffer: true }}
              camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [20, 8, 12],
              }}
            >
              <ambientLight intensity={0.5} />
              <directionalLight position={[0, 0, 0.05]} />
              <Suspense>
                <OrbitControls
                  autoRotate={true}
                  autoRotateSpeed={9}
                  enableZoom={false}
                  maxPolarAngle={Math.PI / 3}
                  maxAzimuthAngle={Math.PI / 3}
                />
                <Object src={src} />

                <Preload all />
              </Suspense>
            </Canvas>
          </div>

          <a
            href={`/editProduk?id=${id}&nama=${name}&detail=${deskripsi}&harga=${harga}`}
            class="text-black dark:border-gray-600 bg-white hover:bg-gray-200 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg md:text-sm sm:text-[10px] text-[7px] md:px-5 sm:px-3 px-1 md:py-2.5 sm:py-1 py-0.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
          >
            Edit
          </a>
          <button onClick={deleteProd} className="text-black dark:border-gray-600 bg-white hover:bg-gray-200 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg md:text-sm sm:text-[10px] text-[7px] md:px-5 sm:px-3 px-1 md:py-2.5 sm:py-1 py-0.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"  >
            Delete
          </button>

        </Tilt>
      </motion.div>
    </>
  );
}
