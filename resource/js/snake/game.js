'use strict';
function randomX (box) {
	return Math.floor(Math.random()*17+1) * box;
}
function randomY(box) {
	return Math.floor(Math.random()*15+3) * box;
}

export class Game {
	constructor(ctx) {
		Game.ctx = ctx;
		Game.box = 32;
		const ground = new Image();
		ground.src = "./js/snake/img/ground.png";
		this.score = 0;
		let snake = new Snake(9 * Game.box, 10 * Game.box);
		let items = [];
		items.push(new Apple(Game.box));
		items.push(new Fire(Game.box));
		this.render(ground, snake, items);
		Game.start = setInterval(()=>this.render(ground, snake, items), 200);
		
	}
	render(ground, snake, items) {
		const dead = new Audio();
		dead.src = "./js/snake/audio/dead.mp3";
		Game.ctx.drawImage(ground, 0, 0);
		items.forEach(item => item.drawSelf(Game.ctx));
		snake.drawSelf(Game.ctx, Game.box);
		let snakeHeadX = snake.body[0].x;
		let snakeHeadY = snake.body[0].y;
		if( snake.move === "LEFT") snakeHeadX -= Game.box;
		if( snake.move === "UP") snakeHeadY -= Game.box;
		if( snake.move === "RIGHT") snakeHeadX += Game.box;
		if( snake.move === "DOWN") snakeHeadY += Game.box;
		
		if (snake.body[0].x == items[0].x && snake.body[0].y == items[0].y) { // if snake eat the food
			this.score++;
			snake.eat();
			items[0].x = randomX(Game.box);
			items[0].y = randomY(Game.box)
			
		} else if (snake.body[0].x == items[1].x && snake.body[0].y == items[1].y) { // if the snake eats the fire
			this.score--;
			snake.damage();
			items[1].x = randomX(Game.box);
			items[1].y = randomY(Game.box);
			snake.body.pop();
		} else {
			// remove the tail
			snake.body.pop();
			snake.hitten = false;
		}
		
		// create new head
		let newHead = {
			x: snakeHeadX,
			y: snakeHeadY
		};
		
		let isCollision = snakeHeadX < Game.box || snakeHeadX > 17 * Game.box || snakeHeadY < 3 * Game.box || snakeHeadY > 17 * Game.box || snake.collision();
		if(isCollision) {
			clearInterval(Game.start);
			dead.play();
		}
		if (!snake.hitten) {
			snake.body.unshift(newHead);
		}
		// render score
		Game.ctx.fillStyle = "white";
		Game.ctx.font = "45px Changa one";
		Game.ctx.fillText(this.score,2 * Game.box,1.6 * Game.box);
	}
}

class Snake {
	constructor(x, y) {
		this.body = [];
		this.body.push({x: x, y: y});
		this.move = 'stop';
		this._resolveControl();
		this.hitten = false;
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
		
		function direction(event) {
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
	}
	collision() {
		for(let i = 1; i < this.body.length; i++){
			if(this.body[0].x == this.body[i].x && this.body[0].y == this.body[i].y){
				return true;
			}
		}
		return false;
	}
	drawSelf(ctx, box) {
		for (let i = 0; i < this.body.length ; i++){
			ctx.fillStyle = ( i == 0 )? "green" : "white";
			ctx.fillRect(this.body[i].x,this.body[i].y, box, box);
			ctx.strokeStyle = "red";
			ctx.strokeRect(this.body[i].x,this.body[i].y, box, box);
		}
		
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
