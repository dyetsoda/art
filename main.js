import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
//---RENDER ----------------------------------------------------------------
const renderer1 = new THREE.WebGLRenderer({antialias: true});
renderer1.outputColorSpace = THREE.SRGBColorSpace;
renderer1.setSize(400, 400);
renderer1.setClearColor(0xd1ffc0);
renderer1.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer1.domElement);
//---CONTROL----------------------------------------------------------------
const controls = new OrbitControls( camera1, renderer1.domElement );
const loader = new GLTFLoader();

//---MESH----------------------------------------------------------------
const meshData1 = new THREE.PlaneGeometry(20, 20, 32, 32); meshData1.rotateX(-Math.PI / 2);
const material1 = new THREE.MeshStandardMaterial({color:0x555555,side: THREE.DoubleSide});
const mesh1 = new THREE.Mesh(meshData1, material1);




//---SCENE ----------------------------------------------------------------
const camera1 = new THREE.PerspectiveCamera(25, 400 / 400, 0.1, 1000);
camera1.position.set(4,5,11);
camera1.lookAt(0,0,0);

const light1 = new THREE.SpotLight(0xffffff, 3, 500, 0.2, 0.5); 
light1.position.set(0,25,0);

const scene1 = new THREE.Scene();
scene1.add(mesh1);
scene1.add(light1);





function animate(){
    requestAnimationFrame(animate);
    /*mesh1.rotation.x += 0.01;
    mesh1.rotation.y += 0.01;
    mesh1.rotation.z += 0.01;*/
    renderer1.render(scene1, camera1);
}
animate();