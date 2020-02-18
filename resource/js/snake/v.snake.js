'use strict';
import {Game} from "./Game";

let vActionScreen = {
	name: 'v-screen-action',
	template: `<div>
               		<canvas ref="snake" width="608" height="608"></canvas>
               		<v-btn v-show="isGameOver" style="position: absolute;top: 400px;right: 36%;">Table of results</v-btn>
               </div>`,
	data() {
		return {
			isGameOver: false
		}
	},
	mounted() {
		const cvs = this.$refs.snake;
		const ctx = cvs.getContext("2d");
		let game = new Game(ctx, cvs);
		let self = this;
		document.addEventListener('GameOverEvent', () => self.isGameOver = true)
	},
	methods: {
		gameOver() {
		
		}
	}
};

let vStartScreen = {
	name: 'v-start-screen',
	template: `<div>
                    <div style="position: relative;">
						<img src="./js/snake/img/open.png" alt="snake" style="position: absolute;left: 0%;top: -5px;width: 100%;opacity: 0.5;">
                        
                        <div v-show="showHint" style="position: absolute;left: 37%;top: 465px;border: 2px solid chartreuse;width: 22%;border-radius: 20px;text-align: center;background-color: chartreuse;">Enter your name</div>
                        
                        <v-text-field
		                      style="width: 50%; position: relative;left: 25%; top: 475px"
				              v-model="userName"
				              label="Enter yor name"
				              color="black"
				              @input="hideHint"
			            ></v-text-field>
			           
						<v-btn @click="startGame" color="green" style="position: relative;top: 465px;left: 40%" >START</v-btn>
                    
                    </div>
               </div>`,
	data() {
		return {
			userName: '',
			scoresData: [],
			showHint: false
		}
	},
	created() {
	
	},
	mounted() {
	
	},
	methods: {
		hideHint() {
			this.showHint = false;
		},
		startGame() {
			if (this.userName) {
				this.$emit('start')
			} else {
				this.showHint = true
			}
		}
	}
};


let template = `
    <div style="border: 1px solid lightskyblue; background: #739600; width: 607px; height: 607px; position: relative; top: 15px;">
    	<v-start-screen v-if="!isStart" @start="startGame"></v-start-screen>
    	<v-action-screen v-else></v-action-screen>
    </div>
`;

export let vSnake = {
	name: 'v-snake',
	template,
	components: {'v-start-screen': vStartScreen, 'v-action-screen': vActionScreen},
	data() {
		return {
			isStart: false
		}
	},
	methods: {
		startGame() {
			this.isStart = true;
		}
	}
};
