"use client";
import Image from "next/image"
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
export default function CardPromo({ src, text, detail, id }) {
  return (
    <a href={`/detailPromo?id=${id}`}>
      <motion.div>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}

        >

          <div className="bg-[#3C2A21] md:h-[455px] sm:h-[260px] h-[155px] md:w-[360px] sm:w-[200px] w-[120px] rounded-lg mb-16">
            <Image className="md:w-full m-auto rounded-lg  " src={src} width={200} height={200} />
            <div className="flex justify-center">
              <h1 className="md:text-base sm:text-xs text-[6px] text-white font-bold md:p-5 sm:p-2 p-1 sm:mt-2 mt-1 text-center">{text}</h1>
            </div>

          </div>
        </Tilt>
      </motion.div>
    </a>
  )
}