"use client";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const Object = ({ src }) => {
  const coffee = useGLTF(src);

  return <primitive object={coffee.scene} scale={5} position-y={-2} />;
};

export default function CardCoffee({ src }) {
  return (
    <>
      <motion.div>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="p-5 h-92 rounded-2xl sm:w-[360px] w-full bg-[#3C2A21]"
        >
          <div className="">
            <h3 className="text-[#ffdcd2] font-bold text-[24px]">Americano</h3>
          </div>
          <div className="mt-5"></div>
          <div className="bg-[#ffdcd2] w-full mb-5 rounded-lg pt-5 h-56">
            <Canvas
              shadows
              frameloop="demand"
              dpr={[1, 5]}
              gl={{ preserveDrawingBuffer: true }}
              camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [20, 8, 12],
              }}
            >
              <ambientLight intensity={0.5} />
              <directionalLight position={[0, 0, 0.05]} />
              <Suspense>
                <OrbitControls
                  autoRotate={true}
                  autoRotateSpeed={9}
                  enableZoom={false}
                  maxPolarAngle={Math.PI / 3}
                  maxAzimuthAngle={Math.PI / 3}
                />
                <Object src={src} />
                <Preload all />
              </Suspense>
            </Canvas>
          </div>

          <a
            href="/americano"
            class="text-black dark:border-gray-600 bg-white hover:bg-gray-200 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
          >
            Detail
          </a>
        </Tilt>
      </motion.div>
    </>
  );
}
