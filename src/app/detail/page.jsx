import React from "react";
import ObjectDetail from "@/components/ObjectDetail";
import {
  AmericanoCanvas,
  CoffeeAmericano,
} from "../../components/canvas/americano";
import { StarsCanvas, Stars } from "../../components/canvas/beans";
import Navbar from "@/components/Navbar";

const DetailMenu = ({ searchParams }) => {
  console.log(searchParams.obj);
  return (
    <>
      <Navbar />
      <section>
        <div>
          <div className="h-screen text-indigo-100">
            <div className="h-full container mx-auto md:flex md:items-center md:justify-between m">
              <div className="w-full h-full md:w-1/2 mb-8 md:mb-0 mr-10 ml-40  justify-center">
                <h2 className="text-5xl mt-10 font-bold text-[#FFC26F]">
                  {searchParams.nama}
                </h2>
                <h2 className="text-2xl mt-5 font-bold text-[#FFC26F]">
                  {searchParams.harga}
                </h2>
                <p className="text-base mt-10 text-[#FFC26F]">
                  {searchParams.detail}
                </p>
              </div>
              <div className="w-full h-full md:w-1/2 ">
                <ObjectDetail src={`${searchParams.obj}`} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailMenu;
