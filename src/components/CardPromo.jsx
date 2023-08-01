"use client";
import Image from "next/image"
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
export default function CardPromo({src,text}){
    return(
        <motion.div>
            <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
         
        >
        <div className="bg-[#3C2A21] h-[455px] w-[360px] rounded-lg">
        <Image className="w-full m-auto rounded-lg" src={src} width={180} height={180} />
        <div className="flex justify-center">
        <h1 className="text-base text-white font-bold p-5 text-center">{text}</h1>
        </div>
       
        </div> 
        </Tilt>
        </motion.div>
    )
}