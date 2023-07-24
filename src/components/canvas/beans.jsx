"use client"
import { useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, useGLTF, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";


// var geometry = new THREE.BoxGeometry();
// var material1 = new THREE.MeshLambertMaterial();
// var material2 = new THREE.MeshPhongMaterial();

// 
// var iMesh2 = new THREE.InstancedMesh(geometry, material2, 30);
// var iMesh1 = new THREE.InstancedMesh(geometry, material1, 30);
// const dumy = new THREE.Object3D()


export const Stars = (props) => {
  const ref = useGLTF('./assets/beans.glb');
  // const geometry = ref.geometry.clone();
  // const material = ref.material;
  // const coffeeB = new THREE.InstancedMesh(geometry, material2, 30);
  // scene.add(coffeeB);

  // const dummy = new THREE.Object3D()

  // for(let i = 0; i < 30; i++) {
  //   dummy.position.x = Math.random()* 40 -20;
  //   dummy.position.y = Math.random()* 40 -20;
  //   dummy.position.z = Math.random()* 40 -20;

  //   dummy.rotation.x = Math.random()*2*Math.PI;
  //   dummy.rotation.y = Math.random()*2*Math.PI;
  //   dummy.rotation.z = Math.random()*2*Math.PI;

  //   dummy.scale.x = dummy.scale.y = dummy.scale.z = 0.04 * Math.random()

  //   dummy.updateMatrix();
  //   coffeeB.setMatrixAt(i, dummy.matrix)
  // }

  const [sphere] = useState(() => random.inSphere(new Float32Array(100), { radius: 1.2 }));





  return (
    <group rotation={[0, 0, Math.PI / 4]}>

      {/* <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}> */}
      <primitive object={ref.scene} positions={sphere} stride={3} frustumCulled {...props} scale={0.1} />
      {/* </Points> */}
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

