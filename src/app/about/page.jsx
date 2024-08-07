"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <Navbar />
      <blockquote class="md:text-[40px] sm:text-[30px] text-[20px] font-bold text-center text-[#FFC26F]  ">
        <motion.p
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            delay: 0.6,
          }}
        >
          Tentang Kami
        </motion.p>
        <motion.hr
          initial={{ opacity: 0, x: 5 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            delay: 1.0,
          }}
          className="h-1 w-2/5 md:mb-16 sm:mb-12 mb-10 md:mt-6 sm:mt-4 mt-2 bg-white m-auto item-center border-white"
        />
      </blockquote>
      

      <motion.div
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.6,
        }}
        className="grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 items-center justify-items-center mb-36"
      >
        <Image
          src="/assets/tentang.jpg"
          className="w-9/12 rounded-lg mb-5 md:mb-0 sm:mb-0"
          width={640}
          height={426}
          alt=""
        />
        <div>
          <h1 className="text-center text-[#FFC26F] md:text-2xl sm:text-xl text-base font-bold">
            Kedai Kopi Launam
          </h1>
          <p className="text-center text-[#FFC26F] mt-6 px-10 md:text-xl sm:text-sm text-xs">
            Kedai Kopi Launam merupakan kedai kopi yang menyediakan jenis kopi
            arabika dan robusta. Didirikan pada tahun 2019 oleh Bapak Kukuh Heri
            Supriyadi yang berlokasi di Jalan Haji Alpi, Kota Bandung. Kedai ini
            dibuka berawal dari owner yang menyukai kopi, sehingga owner
            memutuskan untuk membuka usaha kopi sendiri yang diberi nama Launam.
          </p>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default About;
