export class Plate {
	constructor(x, y, w, h) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
	}
	draw() {
		rectMode(CENTER);
		rect(this.x, this.y, this.w, this.h);
	}
}
