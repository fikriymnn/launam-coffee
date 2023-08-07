import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function DetailPromo ({searchParams}){
    
    return(
        <>
        
        <Navbar/>
        <div className="h-screen">
        <blockquote class="text-[40px] font-bold text-center text-[#FFC26F] ">
        <p>Detail Promo</p>
        <hr className="w-2/5 mb-16 mt-6 bg-white m-auto h-1 item-center border-white" />
      </blockquote>
           <div className=" mx-56 p-10 bg-[#3C2A21] rounded-xl">                                 
            <Image src={searchParams.src} width={800} height={100} alt="promo image" className="mx-auto"/>
            <p className="text-center text-[#FFC26F] text-xl my-10">
            <p className="text-center text-[#FFC26F] text-3xl my-8 font-bold">
            {searchParams.text}
            </p>
                {searchParams.detail}
            </p>
           </div>
           <Footer/>
           </div>
        
        </>
    )
}