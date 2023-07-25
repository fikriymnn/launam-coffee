import Footer from '@/components/Footer'
import React from 'react'

const About = () => {
  return (
    <>
    <div className=''>
    <h1 className='text-center text-gray-900 mt-10 text-4xl font-bold mb-5'>Tentang Kami</h1>
    <hr className='w-2/5 mb-20 mt-5 bg-black m-auto item-center border-black'/>
    </div>
    

    <div className='grid grid-cols-2 items-center justify-items-center mb-36'>
      <img src='assets/tentang.jpg' className='w-9/12'/>
      <div>
        <h1 className='text-center text-gray-900 text-2xl font-bold'>
        Kedai Kopi Launam
        </h1>
        <p className='text-center text-gray-900 mt-10 px-10 text-xl'>
        Kedai Kopi Launam merupakan kedai kopi yang menyediakan jenis kopi arabika dan robusta. Didirikan pada tahun 2019 oleh Bapak Kukuh Heri Supriyadi yang berlokasi di Jalan Haji Alpi, Kota Bandung. Kedai ini dibuka berawal dari owner yang menyukai kopi, sehingga owner memutuskan untuk membuka usaha kopi sendiri yang diberi nama Launam.
        </p>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default About