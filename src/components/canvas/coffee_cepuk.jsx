"use client"
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";



export const CoffeeCepuk = () => {
    const coffee = useGLTF('./assets/botolkopi.gltf');

    return (
        <primitive object={coffee.scene} scale={5} position-y={-2} />
    );
};

export const CoffeeCepukCanvas = () => {
    return (

        <Canvas
            shadows
            frameloop='demand'

            dpr={[1, 5]}
            gl={{ preserveDrawingBuffer: true }}

            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [20, 8, 12]
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
                <CoffeeCepuk />

                <Preload all />
            </Suspense>
        </Canvas>
    );
};


