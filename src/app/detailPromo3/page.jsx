import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function detailPromo3 (){
    return(
        <>
        
        <Navbar/>
        <div className="h-screen">
        <blockquote class="text-[40px] font-bold text-center text-[#FFC26F] ">
        <p>Detail Promo</p>
        <hr className="w-2/5 mb-16 mt-6 bg-white m-auto h-1 item-center border-white" />
      </blockquote>
           <div className=" mx-56 p-10 bg-[#3C2A21] rounded-xl">                                 
            <Image src="/assets/promo3.jpg" width={800} height={100} alt="promo image" className="mx-auto"/>
            <p className="text-center text-[#FFC26F] text-3xl my-8 font-bold">
            Promo potongan 50% Akhir Tahun.
            </p>
            <p className="text-center text-[#FFC26F] text-xl my-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In dignissimos ex repellendus facilis quos ducimus cupiditate eum alias possimus dolores saepe quidem fugiat recusandae, mollitia, nobis velit. Natus, et impedit.
            </p>
           </div>
           <Footer/>
           </div>
        
        </>
    )
}