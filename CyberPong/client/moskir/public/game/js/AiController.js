import {createNoise2D} from 'https://unpkg.com/simplex-noise@4.0.1/dist/esm/simplex-noise.js';

export default class AiController {
	constructor(paddle, target){
		this.paddle = paddle;
		this.target = target;
		this.noise2D = createNoise2D();
		this.time = 0;
	}
	update(dt){
		const x = this.target.mesh.position.x;

		this.time += dt;
		const dx = this.noise2D(this.time * 0.2, 1) * 2.5;
		this.paddle.setX(x + dx);
	}
}