import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
      <Navbar />
      <blockquote class="text-[40px] font-bold text-center text-[#FFC26F] ">
        <p>Tentang Kami</p>
        <hr className="h-1 w-2/5 mb-16 mt-6 bg-white m-auto item-center border-white" />
      </blockquote>

      <div className="grid grid-cols-2 items-center justify-items-center mb-36">
        <Image
          src="/assets/tentang.jpg"
          className="w-9/12 rounded-lg"
          width={640}
          height={426}
          alt=""
        />
        <div>
          <h1 className="text-center text-[#FFC26F] text-2xl font-bold">
            Kedai Kopi Launam
          </h1>
          <p className="text-center text-[#FFC26F] mt-8 px-10 text-xl">
            Kedai Kopi Launam merupakan kedai kopi yang menyediakan jenis kopi
            arabika dan robusta. Didirikan pada tahun 2019 oleh Bapak Kukuh Heri
            Supriyadi yang berlokasi di Jalan Haji Alpi, Kota Bandung. Kedai ini
            dibuka berawal dari owner yang menyukai kopi, sehingga owner
            memutuskan untuk membuka usaha kopi sendiri yang diberi nama Launam.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
