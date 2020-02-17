import {randomX, randomY} from "./utils";

export class Item {
	constructor(box) {
		this.x = randomX(box);
		this.y = randomY(box);
	}
	drawSelf(ctx) {}
}

export class Apple extends Item {
	constructor(box) {
		super(box);
		this.appleImg = new Image();
		this.appleImg.src = "./js/snake/img/food.png";
	}
	drawSelf(ctx) {
		ctx.drawImage(this.appleImg, this.x, this.y);
	}
}

export class Fire extends Item {
	constructor(box) {
		super(box);
		this.fireImg = new Image();
		this.fireImg.src = "./js/snake/img/fire32.png";
	}
	drawSelf(ctx) {
		ctx.drawImage(this.fireImg, this.x, this.y);
	}
}
