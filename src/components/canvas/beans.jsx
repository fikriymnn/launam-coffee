"use client"
import { useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, useGLTF, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

export const Stars = (props) => {
  const ref = useGLTF ('./assets/beans.glb');
  const [sphere] = useState(() => random.inSphere(new Float32Array(100), { radius: 1.2 }));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
      <PointMaterial
          transparent={true}
          
          size={0.01}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
      <ambientLight intensity={0.5} />
        <directionalLight position={[0, 0, 0.05]} />
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

