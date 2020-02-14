'use strict';
export class Game {
	constructor(ctx) {
		Game.ctx = ctx;
		Game.box = 32;
		const ground = new Image();
		ground.src = "./js/snake/img/ground.png";
		let score = 0;
		let snake = new Snake(9 * Game.box, 10 * Game.box);
		let items = [];
		items.push(new Apple(Game.box));
		items.push(new Fire(Game.box));
		this.render(ground, snake, items);
		Game.start = setInterval(()=>this.render(ground, snake, items), 200);
		
	}
	render(ground, snake, items, start) {
		const dead = new Audio();
		dead.src = "./js/snake/audio/dead.mp3";
		Game.ctx.drawImage(ground, 0, 0);
		items.forEach(item => item.drawSelf(Game.ctx));
		snake.drawSelf(Game.ctx, Game.box);
		let isCollision = snake.head.x < Game.box || snake.head.x > 17 * Game.box || snake.head.y < 3 * Game.box || snake.head.y > 17 * Game.box || snake.collision();
		if(isCollision) {
			clearInterval(Game.start);
			dead.play();
		}
	}
	
}

class Snake {
	constructor(x, y) {
		this.head = {x: x, y: y};
		this.body = [];
		this.body.push(this.head);
		this.move = 'stop';
		this._resolveControl()
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
		
		document.addEventListener("keydown", (e)=>direction.call(this, e));
		
		function direction(event){
			let key = event.keyCode;
			if( key == 65 && this.move != "RIGHT"){
				left.play();
				this.move = "LEFT";
			}else if(key == 87 && this.move != "DOWN"){
				this.move = "UP";
				up.play();
			}else if(key == 68 && this.move != "LEFT"){
				this.move = "RIGHT";
				right.play();
			}else if(key == 83 && this.move != "UP"){
				this.move = "DOWN";
				down.play();
			}
		}
	}
	collision() {
		for(let i = 1; i < this.body.length; i++){
			if(this.head.x == this.body[i].x && this.head.y == this.body[i].y){
				return true;
			}
		}
		return false;
	}
	drawSelf(ctx, box) {
		for( let i = 0; i < this.body.length ; i++){
			ctx.fillStyle = ( i == 0 )? "green" : "white";
			ctx.fillRect(this.body[i].x,this.body[i].y, box, box);
			
			ctx.strokeStyle = "red";
			ctx.strokeRect(this.body[i].x,this.body[i].y, box, box);
		}
		
		if( this.move == "LEFT") this.head.x -= box;
		if( this.move == "UP") this.head.y -= box;
		if( this.move == "RIGHT") this.head.x += box;
		if( this.move == "DOWN") this.head.y += box;
	}
	
}

class Item {
	constructor(box) {
		this.x = Math.floor(Math.random()*17+1) * box;
		this.y = Math.floor(Math.random()*15+3) * box;
	}
	drawSelf(ctx) {}
}

class Apple extends Item {
	drawSelf(ctx) {
		const appleImg = new Image();
		appleImg.src = "./js/snake/img/food.png";
		ctx.drawImage(appleImg, this.x, this.y);
	}
}

class Fire extends Item {
	drawSelf(ctx) {
		const fireImg = new Image();
		fireImg.src = "./js/snake/img/fire32.png";
		ctx.drawImage(fireImg, this.x, this.y);
	}
}
