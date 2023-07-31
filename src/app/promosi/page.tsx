import CardPromo from '@/components/CardPromo'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
export default function promosi() {
    return (
        <>
            <Navbar />
            <blockquote className="text-[40px] font-bold text-center text-gray-900 ">
                <p>Promosi</p>
                <hr className='h-1 w-2/5 mb-16 mt-6 bg-black m-auto item-center border-black' />
            </blockquote>
            <div className='grid grid-cols-3 justify-items-center'>
                <CardPromo src={'/assets/promo.jpg'} text={"Potongztan 50% Akhir Tahun #murahBanget"} />
                <CardPromo src={'/assets/promo2.jpg'} text={"Cuci gudang abis abisan promo Ramadhan buy 1 get 1"} />
                <CardPromo src={'/assets/promo3.jpg'} text={"Potonngtan 50% Akhir Tahun>"} />
            </div>
            <Footer />
        </>
    )
}