import { CANVASSIZE, GSPEED } from './constants.js';
import { Ball } from './ball.js';
import { Plate } from './plate.js';

let prev;
let plate;
const balls = [];

window.setup = function() {
	createCanvas(CANVASSIZE, CANVASSIZE);
	plate = new Plate(CANVASSIZE / 2, 400, CANVASSIZE / 2, 15);
	const step = 30;
	for (let x = CANVASSIZE / 2 - step * 3; x <= CANVASSIZE / 2 + step * 3; x += step) {
		balls.push(new Ball(x, x - 200, 20));
	}
	prev = Date.now();
}

window.draw = function() {
	let t = (Date.now() - prev) / 1000 * GSPEED;
	background(0);
	plate.draw();
	balls.forEach((ball) => {
		ball.updateV(t);
		ball.updateY(t);
		ball.handleCollision(plate);
		ball.draw();
	});
	prev = Date.now();
}

