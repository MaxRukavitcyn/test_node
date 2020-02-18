'use strict';
import {randomY, randomX} from "./utils";
import {Snake} from "./Snake";
import {Apple, Fire} from "./Items";


export class Game {
	constructor(ctx, cvs) {
		this.cvs = cvs;
		Game.ctx = ctx;
		Game.box = 32;
		Game.centerScene = {x: 9 * Game.box, y: 10 * Game.box};
		this.lives = 3;
		let ground = new Image();
		ground.src = "./js/snake/img/ground.png";
		let gameOver = new Image();
		gameOver.src = "./js/snake/img/game_over.png";
		let heart = new Image();
		heart.src = "./js/snake/img/heart.png";
		Game.dead = new Audio();
		Game.dead.src = "./js/snake/audio/dead.mp3";
		this.score = 0;
		let snake = new Snake(Game.centerScene);
		let items = [];
		items.push(new Apple(Game.box));
		items.push(new Fire(Game.box));
		this.scene = {
			snake: snake,
			ground: ground,
			items: items,
			gameOver: gameOver,
			heart: heart
		};
		this.startGame(this.scene);
	}
	startGame(scene) {
		this.render(scene);
		Game.start = setInterval(() => this.render(scene), 50);
	}
	render(scene) {
		let {snake, ground, items, gameOver, heart} = scene;
		Game.ctx.drawImage(ground, 0, 0);
		Game.ctx.drawImage(heart, 4 * Game.box, 0.7 * Game.box);
		items.forEach(item => item.drawSelf(Game.ctx));
		snake.drawSelf(Game.ctx, Game.box);
		if (snake.getHeadX() === items[0].x && snake.getHeadY() === items[0].y) { // if snake eat the food
			this.score++;
			snake.eat();
			items[0].x = randomX(Game.box);
			items[0].y = randomY(Game.box)
			
		} else if (snake.getHeadX() === items[1].x && snake.getHeadY() === items[1].y) { // if the snake eats the fire
			this.score--;
			snake.damage();
			items[1].x = randomX(Game.box);
			items[1].y = randomY(Game.box);
		} else {
			// remove the tail
			snake.removeTail();
		}
		if (snake.isBodyZero()) {
			clearInterval(Game.start);
			this.lives--;
			if (this.lives > 0) {
				snake.addNewHead(Game.centerScene);
				snake.move = 'stop';
				this.startGame(this.scene);
			}
			else{
				Game.ctx.drawImage(gameOver, 0, 0);
				return;
			}
		}
		
		let isCollision = snake.getHeadX() < Game.box || snake.getHeadX() > 17 * Game.box || snake.getHeadY() < 3 * Game.box || snake.getHeadY() > 17 * Game.box || snake.collision();
		if (isCollision) {
			clearInterval(Game.start);
			Game.dead.play();
			this.lives--;
			if (this.lives > 0) {
				snake.setHeadX(Game.centerScene.x);
				snake.setHeadY(Game.centerScene.y);
				snake.cutBody();
				snake.move = 'stop';
				this.startGame(this.scene);
			} else {
				Game.ctx.drawImage(gameOver, 0, 0);
				let GameOverEvent = new Event('GameOverEvent');
				document.dispatchEvent(GameOverEvent);
				return;
			}
			
		}
		
		// render score
		Game.ctx.fillStyle = "white";
		Game.ctx.font = "45px Changa one";
		Game.ctx.fillText(this.score,2 * Game.box,1.6 * Game.box);
		
		//render lives
		Game.ctx.fillStyle = "white";
		Game.ctx.font = "45px Changa one";
		Game.ctx.fillText(this.lives,5.2 * Game.box,1.6 * Game.box);
	}
}
