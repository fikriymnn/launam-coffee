"use client"
import React from 'react'

import { VietdripCanvas, CoffeeViet } from "../../components/canvas/vietdrip";
import { StarsCanvas, Stars } from "../../components/canvas/beans";
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';




const Vietdrip = () => {
    return (
   
<>
<Navbar/>
            <div >


                <div className="h-screen py-20 text-indigo-100">

                    <div className="h-full container mx-auto md:flex md:items-center md:justify-between m">
                        <div className="w-full h-full md:w-1/2 mb-8 md:mb-0 mr-10 ml-40 mt-60 justify-center">
                            <h2 className='text-5xl font-bold text-[#FFC26F]'>Vietnam Drip</h2>
                            <p className='text-base mt-5 text-[#FFC26F]'>Vietnam Drip merupakan cara seduh yang berasal dari negara Vietnam. Vietnam telah lama dikenal sebagai negara penghasil kopi terbesar nomor dua di dunia dan terbesar di Asia Tenggara. Sehingga, budaya masyarakat di sana pun tak jauh-jauh dari minuman yang tengah menjadi primadona tersebut. Disesuaikan dengan biji kopi yang dihasilkan yakni Robusta, masyarakat Vietnam pun menyajikan kopi mereka dengan menambahkan krimer atau susu kental manis, hal ini dilakukan untuk mengurangi rasa pahit yang terdapat pada karakter biji kopi Robusta</p>
                            <p className='text-base mt-5 text-[#FFC26F]'>Alat yang digunakan untuk menyeduhnya yaitu berupa gelas metal berbahan stainless steel yang terdiri dari tabung filter, plunger dan juga penutup. Nantinya, hasil seduhan kopi akan menetes ke dalam gelas hingga teknik ini disebut dengan &apos;Drip&apos;.</p>
                            <p className='text-base mt-5 text-[#FFC26F]'>Tidak hanya alatnya saja yang begitu simple, cara penggunaannya pun juga sangat mudah. Pertama, ada baiknya dripper dicuci dan dibilas dengan air panas terlebih dahulu agar steril sebelum diletakkan di atas gelas. Tuangkan susu kental manis ke dalam gelas sebanyak 30-40ml. Kemudian, siapkan kopi yang telah digiling dengan level medium to fine (halus) dan air panas dengan suhu 92-95°. Rasio antara kopi dengan air adalah 1:10-1:12 sehingga untuk 15gr bubuk kopi kita memerlukan air sebanyak 150 ml. Selanjutnya, masukkan bubuk kopi ke dalam tabung filter dan ratakan (ditekan) dengan menggunakan plunger. Tuang air panas sebanyak 20-30ml dan diamkan selama 20-30 detik agar kopi dapat terekstrasi dengan sempurna. Setelah itu, tuang semua sisa air dan tunggu hingga kopi menetes ke dalam gelas. Proses ini biasanya memakan waktu sekitar 4 menit. Di negara asalnya, minuman ini umumnya dihidangkan dingin dan biasa dikenal dengan sebutan cà phê sữa đá sementara jika dihidangkan panas, disebut dengan cà phê sữa nóng.</p>

                        </div>
                        <div className="w-full h-full md:w-1/2 mt-60">
                            <VietdripCanvas />
                        </div>
                    </div>
                </div>



            </div>
            <Footer/>
      </>


    )
}

export default Vietdrip