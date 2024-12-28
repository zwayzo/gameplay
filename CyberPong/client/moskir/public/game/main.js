console.log("TEST");


// import * as THREE from "three";
// import { OrbitControls } from "three/addons/controls/OrbitControls.js";
// import Ball from "./js/Ball";
// import Padlle from "./js/Padlle";
// import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js"
// import AiController from "./js/AiController"
// import {TextGeometry} from "three/examples/jsm/geometries/TextGeometry"
// import {FontLoader} from "three/examples/jsm/loaders/FontLoader"
// import srcFont from "three/examples/fonts/helvetiker_bold.typeface.json?url"
// import lights from "./js/lights.js"
// import * as dat from "lil-gui"



// Importing Three.js and its addons
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.152.0/build/three.module.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';

// Importing the font
// import srcFont from 'https://cdn.jsdelivr.net/npm/three@0.169.0/examples/fonts/helvetiker_bold.typeface.json';

// Importing custom local files
import Ball from '../game/js/Ball.js';
import Padlle from '../game/js/Padlle.js';
import AiController from '../game/js/AiController.js';
import lights from '../game/js/lights.js';

// Importing lil-gui
// import * as dat from 'https://cdn.jsdelivr.net/npm/lil-gui@0.20.0/dist/lil-gui.min.js';


// const gui = new dat.GUI();
const params = {
	planeColor: 0x4169E1,
	scoreColor: 0xF5BD02,
	fogColor: 0x87CEEB,
	fogNear: 90,
	fogFar: 120,
	boundarieColor: 0xaf002a,
	paddleColor:0xaf002a,
	ballColor: 0xF5BD02,
}
// gui.addColor(params, 'planeColor').name("plane color").onChange((val)=>{
// 	planMaterial.color.set(val)
// })

// gui.addColor(params, 'boundarieColor').name("boundaries Color").onChange((val)=>{
// 	boundMaterial.color.set(val)
// })

// gui.addColor(params, 'ballColor').name("ball color").onChange((val)=>{
// 	ball.material.color.set(val)
// })

// gui.addColor(params, 'paddleColor').name("paddle color").onChange((val)=>{
// 	playerPadlle1.material.color.set(val);
// 	playerPadlle2.material.color.set(val);
// })

// gui.addColor(params, 'fogColor').name("fog color").onChange((val)=>{
// 	scene.background.set(val);
// 	scene.fog.color.set(val);
// })

// gui.add(params, 'fogNear', 0, 100, 1).name('Near').onChange((val)=>{
// 	scene.fog.near = val;
// })


// * initialize Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(params.fogColor);
scene.fog = new THREE.Fog(params.fogColor, params.fogNear, params.fogFar);
scene.add(...lights);
let player1ScoreMesh,player2ScoreMesh, loadedFont;  

const FONT_PARAMS = {
	size: 3,
	depth: 0.5,
	curveSegments: 12,
	bevelEnabled: true,
	bevelThickness: 0.1,
	bevelSize: 0.05,
	bevelOffset: 0,
	bevelSegments: 5
}
// * applying the sc ore
const score = {
	player1: 0,
	player2: 0,  
}

// * Fonts loader


fetch('https://cdn.jsdelivr.net/npm/three@0.169.0/examples/fonts/helvetiker_bold.typeface.json')
  .then(response => response.json())
  .then(fontData => {
    // Once the font is loaded, parse it with FontLoader
    const font = FontLoader.parse(fontData);
	const geometry = new TextGeometry('0', {
		font: font,
		...FONT_PARAMS,
	});
	geometry.center();
	player1ScoreMesh = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({
		color: params.scoreColor,
	}));
	player2ScoreMesh = player1ScoreMesh.clone();
	// player2ScoreMesh.position.z = -boundaries.y;
	// player1ScoreMesh.position.z = boundaries.y;
	// player1ScoreMesh.position.set(0, 0, boundaries.y);
	// player2ScoreMesh.position.set(0, 0, -boundaries.y);
	player1ScoreMesh.position.set(player1ScoreMesh.position.x, player1ScoreMesh.position.y, boundaries.y);
	player2ScoreMesh.position.set(player2ScoreMesh.position.x, player2ScoreMesh.position.y, -boundaries.y);
	// player1ScoreMesh.position.set(20,0,15);
	player1ScoreMesh.castShadow = true;
	player2ScoreMesh.castShadow = true;
	scene.add(player1ScoreMesh, player2ScoreMesh);
});

function getScoreGeometry(score){
	const geometry = new TextGeometry(`${score}`, {
		font: loadedFont,
		...FONT_PARAMS,
	});
	geometry.center();
	return geometry;
}

// * Keys
const keys = {
	a: {
		pressed: false,
	},
	d: {
		pressed: false,
	},
	rightArrow: {
		pressed: false,
	},
	leftArrow: {
		pressed: false,
	}
}
// * add the object to the scene
const material = new THREE.MeshNormalMaterial();
const geometry = new THREE.BoxGeometry(1, 1, 1);

const mesh = new THREE.Mesh(geometry, material);
// scene.add(mesh);

const boundaries = new THREE.Vector2(18, 20);
const planMaterial = new THREE.MeshStandardMaterial({
	color: params.planeColor,
	// wireframe: true,
	// transparent: true,
	// opacity: 0.1,
});
const planGeometry = new THREE.PlaneGeometry(
	boundaries.x * 20,
	boundaries.y * 20,
	boundaries.x * 20,
	boundaries.y * 20
);
planGeometry.rotateX(-Math.PI * 0.5);
const plan = new THREE.Mesh(planGeometry, planMaterial);
plan.position.y = -1.5;
plan.receiveShadow = true;
scene.add(plan);

const playerPadlle2 = new Padlle(scene, new THREE.Vector3(0, 0, -16), boundaries);
const playerPadlle1 = new Padlle(scene, new THREE.Vector3(0, 0, 16 ), boundaries);
const ball = new Ball(scene, boundaries, [playerPadlle2, playerPadlle1]);
ball.material.color.set(params.ballColor);
playerPadlle1.material.color.set(params.paddleColor);
ball.addEventListener('goal', (e) => {
	console.log('goal ', e.message);
	score[e.message] += 1;


	const geometry = getScoreGeometry(score[e.message]);
	const mesh = e.message === 'player1' ? player1ScoreMesh : player2ScoreMesh; 

	mesh.geometry = geometry;
	console.log(mesh.geometry);

	mesh.geometry.getAttribute('position').needsUpdate = true;
	console.log(score);
})

const boundGeometry = new RoundedBoxGeometry(1, 2, boundaries.y * 2,5, 0.5)
const boundMaterial = new THREE.MeshStandardMaterial({
	color: params.boundarieColor,
});
const leftbound = new THREE.Mesh(boundGeometry, boundMaterial);
leftbound.position.x = -boundaries.x - 0.5;
const rightbound = leftbound.clone();
rightbound.position.x = boundaries.x + 0.5;
leftbound.castShadow = true;
rightbound.castShadow = true;
rightbound.receiveShadow = true;
scene.add(leftbound, rightbound);


// scene.add(ball);

// * add light
// const light = new THREE.AmbientLight(0xffffff, 0.4);
// scene.add(light);
// const pointLight = new THREE.PointLight(0xffffff, 20);
// pointLight.position.set(5, 5, 5);
// scene.add(pointLight);
const axesHelper = new THREE.AxesHelper(2);
// scene.add(axesHelper);

// * initialize Camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
// camera.rotateY(Math.PI * 0.5)
camera.position.set(0, 32, 0);
// camera.lookAt(new THREE.Vector3(0, 0.25, 0));

// * initialize render
const canvas = document.getElementById("game-canva");
if (!canvas)
	console.log("EROOR AT CANVA");
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.2;
renderer.shadowMap.type = THREE.VSMShadowMap;

// * initialize controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
// controls.autoRotate = true;

// * for resizing screen
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

window.addEventListener("keydown", (event) => {
	if (event.code === "ArrowRight" || event.code === "ArrowLeft" || event.code === "ArrowUp" || event.code === "ArrowDown") {
        event.preventDefault(); // Prevent scrolling
    }
	// console.log(event.code);
	switch(event.code){
		case "KeyD": // Correct case for moving right
            keys.d.pressed = true;
			controls.enabled = false;
            break;
        case "KeyA": // Correct case for moving left
            keys.a.pressed = true;
			controls.enabled = false;
            break;
		case "KeyL":
			keys.rightArrow.pressed = true;
			controls.enabled = false;
			break;
		case "KeyJ":
			keys.leftArrow.pressed = true;
			controls.enabled = false;
			break;
	}
});

window.addEventListener("keyup", (event) => {
	switch(event.code){
		case "KeyA":
			keys.a.pressed = false;
			break;
		case "KeyD": // Correct case for releasing right key
            keys.d.pressed = false;
            break;
		case "KeyL":
			keys.rightArrow.pressed = false;
			break;
		case "KeyJ":
			keys.leftArrow.pressed = false;
			break;
	}
});

// * this clock
const clock = new THREE.Clock();
// let prevTime = 0;
// console.log(canvas);

const controller = new AiController(playerPadlle2, ball);
console.log(playerPadlle1.mesh.position, playerPadlle2.mesh.position)
// console.log(window.devicePixelRatio);
function animate () {
	const deltaTime = clock.getDelta();
	const dt = deltaTime / 10;
  // const currTime = clock.getElapsedTime();
  // const delta = currTime - prevTime;
  // prevTime = currTime;
  // cubeMesh.rotation.y += THREE.MathUtils.degToRad(1) * delta * 20
  // console.log(delta);
  for(let i = 0; i < 10; i++){
	  playerPadlle1.move(keys.d.pressed, keys.a.pressed);
	  ball.update(dt);
	  controller.update(dt);
	//   playerPadlle2.move(keys.rightArrow.pressed, keys.leftArrow.pressed)
}
  //*this is for pc as player
  controls.update();
//   playerPadlle2.setX(ball.mesh.position.x);
  renderer.render(scene, camera);
  window.requestAnimationFrame(animate);
};
animate();
