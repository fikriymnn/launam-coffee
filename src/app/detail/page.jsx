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
                <h2 className="text-5xl font-bold text-black">
                  {searchParams.nama}
                </h2>
                <p className="text-base mt-5 text-black">
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
