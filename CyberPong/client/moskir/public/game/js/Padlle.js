// import { CapsuleGeometry, Material, Mesh, MeshNormalMaterial, MeshStandardMaterial } from "three/src/Three.js";

import { CapsuleGeometry } from "https://cdn.jsdelivr.net/npm/three@0.171.0/src/geometries/CapsuleGeometry.js";
import {
  Mesh,
  MeshNormalMaterial,
  MeshStandardMaterial,
} from "https://cdn.jsdelivr.net/npm/three@0.152.0/build/three.module.js";

const GEOMETRY = new CapsuleGeometry(0.5, 4, 20, 20);
const HELPER_GEOMETRY = new CapsuleGeometry(0.5 + 0.5, 4, 20, 8);
HELPER_GEOMETRY.rotateZ(Math.PI * 0.5);
HELPER_GEOMETRY.rotateX(Math.PI / 8);
GEOMETRY.rotateZ(Math.PI * 0.5);
const MATERIAL = new MeshStandardMaterial({
  color: 0xaf002a,
});


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


export default class Padlle {
  constructor(scene, position, boundaries, playerId) {
    this.geometry = GEOMETRY;
    this.material = MATERIAL;
    this.mesh = new Mesh(this.geometry, this.material);
    this.mesh.castShadow = true;
    this.mesh.receiveShadow = true;
    this.collisionHelper = new Mesh(
      HELPER_GEOMETRY,
      new MeshNormalMaterial({
        transparent: true,
        opacity: 0.7,
        visible: false,
      })
    );
	this.playerId = playerId;
    this.mesh.position.copy(position);
    this.scene = scene;
    this.boundaries = boundaries;
    this.mesh.add(this.collisionHelper);
    this.scene.add(this.mesh);
  }
  setX(x) {
    if (x > this.boundaries.x - 2) x = this.boundaries.x - 2;
    else if (x < 2 - this.boundaries.x) x = 2 - this.boundaries.x;
    this.mesh.position.x = x;
  }
  sendPaddleState(socket) {
    // console.log("move2")
    const paddleState = {
      type: "paddle",
	    player: this.playerId,
      position: {
        x: this.mesh.position.x,
        y: 0,
        z: 16,
      },
    };



		

	socket.send(JSON.stringify(paddleState));
  }
  move(rightKey, leftKey, socket) {
    const speed = 0.0795; // Define how fast the paddle moves
    const halfWidth =
    this.geometry.parameters.radius - this.geometry.parameters.radius + 2; // Assuming the paddle is a capsule
    if (rightKey) {
      // Check if the paddle can move right without exceeding the boundary
      if (this.mesh.position.x + halfWidth < this.boundaries.x) {
        this.mesh.position.x += speed; // Move right
      }
    }
    if (leftKey) {
      // Check if the paddle can move left without exceeding the boundary
      if (this.mesh.position.x - halfWidth > -this.boundaries.x) {
        this.mesh.position.x -= speed; // Move left
      }
    }
  // console.log("move")
	// this.sendPaddleState(socket);

  }
}
