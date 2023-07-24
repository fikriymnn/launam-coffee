// // import * as THREE from '../../node_modules/three';
// required('../../node_modules/three');
// // import { Camera } from '../../node_modules/three';
// const Camera = required('../../node_modules/three');

// import { OrbitControls } from '../../node_modules/three/examples/jsm/controls/OrbitControls.js';
// import { GLTFLoader } from '../../node_modules/three/examples/jsm/loaders/GLTFLoader.js';

// console.log("ssss");

// const coffeeUrl = new URL('assets/cuptest.gltf', import.meta.url);

// const renderer = new THREE.WebGLRenderer();

// renderer.setSize(window.innerWidth, window.innerHeight);

// document.body.appendChild(renderer.domElement);

// const scene = new THREE.Scene();

// const camera = new THREE.PerspectiveCamera(
//     75,
//     window.innerWidth / window.innerHeight,
//     0.1,
//     1000
// );

// const orbit = new OrbitControls(camera, renderer.domElement);

// const axesHelper = new THREE.AxesHelper(5);
// scene.add(axesHelper);

// camera.position.set(0, 0, 5);
// orbit.update();

// const boxGeometry = new THREE.BoxGeometry();
// const boxMaterial = new THREE.MeshStandardMaterial({ color: 0x00FF00 });
// const box = new THREE.Mesh(boxGeometry, boxMaterial);
// scene.add(box);

// const ambientLight = new THREE.AmbientLight(0x333333);
// scene.add(ambientLight);
// const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 0.8);
// scene.add(directionalLight);

// const assetLoader = new GLTFLoader();

// let mixer;
// assetLoader.load(coffeeUrl.href, function (gltf) {
//     const model = gltf.scene;
//     scene.add(model);
  
// }, undefined, function (error) {
//     console.error(error);
// });


// renderer.setClearColor(0xFFEA00);
// function animatebox() {
    
//     //box.rotation.y += 0.02;
//     renderer.render(scene, camera);
// }

// renderer.setAnimationLoop(animatebox);