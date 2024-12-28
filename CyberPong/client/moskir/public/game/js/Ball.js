import { 
	Color,
	EventDispatcher,
	Mesh,
	MeshNormalMaterial,
	MeshStandardMaterial,
	Raycaster,
	SphereGeometry,
	Vector3
} from 'https://cdn.jsdelivr.net/npm/three@0.152.0/src/Three.js';


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


//;
export default class Ball extends EventDispatcher {
	speed = 15;
	velocity = new Vector3(0.8,0,0.3);
	constructor(scene, boundaries, paddles){
		super();
		this.boundaries = boundaries;
		this.paddles = paddles;
		this.radius = 0.5;
		this.material = new MeshStandardMaterial({
			color: 0xF5BD02,
		});
		this.geometry = new SphereGeometry(this.radius);
		this.mesh = new Mesh(this.geometry, this.material);
		this.mesh.castShadow = true;
		this.mesh.receiveShadow = true;
		this.scene = scene;
		this.velocity.multiplyScalar(this.speed);
		this.scene.add(this.mesh);

		this.raycaster = new Raycaster();
		this.raycaster.near = 0;
		this.raycaster.far = this.boundaries * 2.5;

		// this.pointCollision = new Mesh(new SphereGeometry(0.1), new MeshNormalMaterial({
		// 	color: new Color('red'),
		// }))
		// this.scene.add(this.pointCollision); 
	}

	resetVelocity(){
		this.speed = 10;
		this.velocity.z *= -1;
		this.velocity.normalize().multiplyScalar(this.speed);
	}

	sendBallState(socket){
		const ballState = {
			type: 'ball',
			position: {
				x: this.mesh.position.x,
				y: 0,
				z: this.mesh.position.z,
			},
		};	
		socket.send(JSON.stringify(ballState));
	}
	update(dt, socket){
		const dir = this.velocity.clone().normalize();
		this.raycaster.set(this.mesh.position, dir);

		const s = this.velocity.clone().multiplyScalar(dt);
		const tPos = this.mesh.position.clone().add(s);

		const dx = (this.boundaries.x - this.radius) - Math.abs(this.mesh.position.x);
		const dz = (this.boundaries.y - this.radius) - Math.abs(this.mesh.position.z);

		if (dx <= 0){
			// console.log(dx);
			tPos.x = (this.boundaries.x - this.radius + dx) * Math.sign(this.mesh.position.x);
			this.velocity.x *= -1;
		}

		if (dz < 0){
			// console.log("collision in dz");
			const z = this.mesh.position.z;
			const message = z > 0 ? 'player2' : 'player1';
			this.dispatchEvent({type: 'goal', message: message })
			tPos.set(0,0,0);
			this.resetVelocity();
		}

		const paddlee = this.paddles.find((paddlee) => {
			return Math.sign(paddlee.mesh.position.z) === Math.sign(this.velocity.z)
		})
		// console.log(paddlee);

		const [intersection] = this.raycaster.intersectObjects(paddlee.mesh.children);
		if (intersection){
			// console.log(intersection);
			// this.pointCollision.position.copy(intersection.point);

			if (intersection.distance < s.length()){
				console.log('collisionwith paddle');

				tPos.copy(intersection.point);
				const d = s.length() - intersection.distance;

				const normal = intersection.normal;
				normal.y = 0;
				normal.normalize();
				console.log(normal.y);
				this.velocity.reflect(normal);

				const dS = this.velocity.clone().normalize().multiplyScalar(d);
				tPos.add(dS);

				this.speed *= 1.05;
				this.velocity.normalize().multiplyScalar(this.speed); 
			}
		}
		// else{
		// 	this.pointCollision.position.set(0,0,0);
		// }

		this.mesh.position.copy(tPos);
		// this.sendBallState(socket);
		

	}
}