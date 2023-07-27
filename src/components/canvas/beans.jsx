"use client"
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";



export const Stars = () => {
  const stars = useGLTF('./assets/cofee_beans.gltf');
  

  return (
    <primitive object={stars.scene} scale={1} position-y={-2} />
    
  );
};

export const StarsCanvas = () => {
  return (
    <Canvas className="z-0"
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

          autoRotateSpeed={2}
          enableZoom={false}
          maxPolarAngle={Math.PI / 3}
          minPolarAngle={Math.PI / 3}
          
        />
        <Stars />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};


