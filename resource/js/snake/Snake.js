import {Game} from "./Game";

export class Snake {
	constructor(x, y) {
		this.body = [];
		this.body.push({x: x, y: y});
		this.move = 'stop';
		this._resolveControl();
		this.hitten = false;
	}
	cutBody() {
		this.body.splice(1);
	}
	isBodyZero() {
		return this.body.length === 0;
	}
	getHeadX() {
		return this.body[0].x;
	}
	getHeadY() {
		return this.body[0].y;
	}
	setHeadX(x) {
		this.body[0].x = x;
	}
	setHeadY(y) {
		this.body[0].y = y;
	}
	removeTail(isDamage) {
		this.body.pop();
		if (!isDamage) {
			this.hitten = false;
		}
	}
	addNewHead(newHead) {
		this.body.unshift(newHead);
	}
	_resolveControl() {
		let up = new Audio();
		let right = new Audio();
		let left = new Audio();
		let down = new Audio();
		up.src = "./js/snake/audio/up.mp3";
		right.src = "./js/snake/audio/right.mp3";
		left.src = "./js/snake/audio/left.mp3";
		down.src = "./js/snake/audio/down.mp3";
		let KEY_A = 65;
		let KEY_W = 87;
		let KEY_D = 68;
		let KEY_S = 83;
		document.addEventListener("keydown", (event)=>{
			let key = event.keyCode;
			if (key === KEY_A && this.move !== "RIGHT") {
				left.play();
				this.move = "LEFT";
			} else if (key === KEY_W && this.move !== "DOWN") {
				this.move = "UP";
				up.play();
			} else if (key === KEY_D && this.move !== "LEFT") {
				this.move = "RIGHT";
				right.play();
			} else if (key === KEY_S && this.move !== "UP") {
				this.move = "DOWN";
				down.play();
			}
		});
		
	}
	eat() {
		let eat = new Audio();
		eat.src = "./js/snake/audio/eat.mp3";
		eat.play();
	}
	damage() {
		let damage = new Audio();
		damage.src = "./js/snake/audio/dead.mp3";
		damage.play();
		this.hitten = true;
		this.removeTail(true);
	}
	collision() {
		for (let i = 1; i < this.body.length; i++) {
			if (this.getHeadX() === this.body[i].x && this.getHeadY() === this.body[i].y) {
				return true;
			}
		}
		return false;
	}
	drawSelf(ctx, box) {
		for (let i = 0; i < this.body.length ; i++){
			ctx.fillStyle = ( i === 0 )? "green" : "white";
			ctx.fillRect(this.body[i].x,this.body[i].y, box, box);
			ctx.strokeStyle = "red";
			ctx.strokeRect(this.body[i].x,this.body[i].y, box, box);
		}
		let snakeHeadX = this.getHeadX();
		let snakeHeadY = this.getHeadY();
		if (this.move === "LEFT") snakeHeadX -= Game.box;
		if (this.move === "UP") snakeHeadY -= Game.box;
		if (this.move === "RIGHT") snakeHeadX += Game.box;
		if (this.move === "DOWN") snakeHeadY += Game.box;
		
		// create new head
		let newHead = {
			x: snakeHeadX,
			y: snakeHeadY
		};
		
		if (!this.hitten) {
			this.addNewHead(newHead);
		}
		
	}
	
}
