import { G } from './constants.js';

export class Ball {
    constructor(x, y, d) {
        this.d = d;
        this.x = x;
        this.y = y;
        this.v = 0;
        this.a = G;
        this.U = 0.8;
    }
    updateV(t) {
        this.v += this.a * t;
    }
    updateY(t) {
        this.y += this.v * t - this.a * t * t / 2;
    }
    draw() {
        circle(this.x, this.y, this.d);
    }
    handleCollision(plate) {
        if (this.y + this.d / 2 >= plate.y - plate.h / 2) {
            this.y = plate.y - this.d / 2 - plate.h / 2;
            this.v = -this.v * this.U;
        }
    }
}
