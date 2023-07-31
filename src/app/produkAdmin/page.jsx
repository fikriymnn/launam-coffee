"use client";
import NavbarAdmin from "../../components/NavbarAdmin";
import {
  AmericanoCanvas,
  CoffeeAmericano,
} from "../../components/canvas/americano";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

import CardCoffeeAdmin from "@/components/CardCoffeAdmin";

export default function Promo() {
  return (
    <div className="h-screen">
      <NavbarAdmin />
      <blockquote className="text-[40px] font-bold text-center text-gray-900 ">
        <p>Dashboard Produk</p>
        <hr className="h-1 w-2/5 mb-16 mt-6 bg-black m-auto item-center border-black" />
      </blockquote>

      <div></div>

      <div className="grid grid-cols-3 justify-items-center gap-10">
        <CardCoffeeAdmin src={"./assets/botolkopi.gltf"} />
        <CardCoffeeAdmin src={"./assets/botolkopi.gltf"} />
        <CardCoffeeAdmin src={"./assets/botolkopi.gltf"} />
        <CardCoffeeAdmin src={"./assets/botolkopi.gltf"} />
        <CardCoffeeAdmin src={"./assets/americano.gltf"} />
        <CardCoffeeAdmin src={"./assets/botolkopi.gltf"} />
      </div>
      <Footer />
    </div>
  );
}
