import CardPromo from '@/components/CardPromo'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function promosi() {
    return (
        <>
            <Navbar />
            <blockquote className="text-[40px] font-bold text-center text-[#FFC26F] ">
                <p>Promosi</p>
                <hr className='h-1 w-2/5 mb-16 mt-6 bg-white m-auto item-center border-white' />
            </blockquote>
            <div className='grid grid-cols-3 justify-items-center'>
                <Link href="/detailPromo1">
                <CardPromo src={'/assets/promo.jpg'} text={"Potongztan 50% Natal #murahBanget"} />
                </Link>
               <Link href={'/detailPromo2'}>
               <CardPromo src={'/assets/promo2.jpg'} text={"Cuci gudang abis abisan promo Ramadhan buy 1 get 1"} />
               </Link>
                <Link href={'/detailPromo3'}>
                <CardPromo src={'/assets/promo3.jpg'} text={"Potonngtan 50% Akhir Tahun>"} />
                </Link>
            </div>
            <Footer />
        </>
    )
}