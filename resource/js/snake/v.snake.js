let template = `
    <div>
        <canvas id="snake" width="608" height="608"></canvas>
    </div>
`;

export let vSnake = {
    name: 'v-snake',
    template,
    data() {
        return {

        }
    },
    mounted() {
        createSnake();
    }
};

function createSnake () {
    const cvs = document.getElementById("snake");
    const ctx = cvs.getContext("2d");

// create the unit
    const box = 32;

// load images

    const ground = new Image();
    ground.src = "./js/snake/img/ground.png";

    const foodImg = new Image();
    foodImg.src = "./js/snake/img/food.png";

    const fireImg = new Image();
    fireImg.src = "./js/snake/img/fire32.png";

// load audio files

    let dead = new Audio();
    let eat = new Audio();
    let up = new Audio();
    let right = new Audio();
    let left = new Audio();
    let down = new Audio();

    dead.src = "./js/snake/audio/dead.mp3";
    eat.src = "./js/snake/audio/eat.mp3";
    up.src = "./js/snake/audio/up.mp3";
    right.src = "./js/snake/audio/right.mp3";
    left.src = "./js/snake/audio/left.mp3";
    down.src = "./js/snake/audio/down.mp3";

// create the snake

    let snake = [];

    snake[0] = {
        x : 9 * box,
        y : 10 * box
    };

// create the food

    let food = {
        x : Math.floor(Math.random()*17+1) * box,
        y : Math.floor(Math.random()*15+3) * box
    }

    let fire = {
        x : Math.floor(Math.random()*17+1) * box,
        y : Math.floor(Math.random()*15+3) * box
    }

// create the score var

    let score = 0;

//control the snake

    let d;

    document.addEventListener("keydown",direction);

    function direction(event){
        let key = event.keyCode;
        if( key == 65 && d != "RIGHT"){
            left.play();
            d = "LEFT";
        }else if(key == 87 && d != "DOWN"){
            d = "UP";
            up.play();
        }else if(key == 68 && d != "LEFT"){
            d = "RIGHT";
            right.play();
        }else if(key == 83 && d != "UP"){
            d = "DOWN";
            down.play();
        }
    }

// cheack collision function
    function collision(head,array){
        for(let i = 0; i < array.length; i++){
            if(head.x == array[i].x && head.y == array[i].y){
                return true;
            }
        }
        return false;
    }

// draw everything to the canvas

    function draw(){

        ctx.drawImage(ground,0,0);

        for( let i = 0; i < snake.length ; i++){
            ctx.fillStyle = ( i == 0 )? "green" : "white";
            ctx.fillRect(snake[i].x,snake[i].y,box,box);

            ctx.strokeStyle = "red";
            ctx.strokeRect(snake[i].x,snake[i].y,box,box);
        }

        ctx.drawImage(foodImg, food.x, food.y);
        ctx.drawImage(fireImg, fire.x, fire.y);

        // old head position
        let snakeX = snake[0].x;
        let snakeY = snake[0].y;

        // which direction
        if( d == "LEFT") snakeX -= box;
        if( d == "UP") snakeY -= box;
        if( d == "RIGHT") snakeX += box;
        if( d == "DOWN") snakeY += box;

        let eatFire = false;

        // if the snake eats the food
        if(snakeX == food.x && snakeY == food.y){
            score++;
            eat.play();
            food = {
                x : Math.floor(Math.random()*17+1) * box,
                y : Math.floor(Math.random()*15+3) * box
            }
            // if the snake eats the fire
        } else if (snakeX == fire.x && snakeY == fire.y) {
            score--;
            fire = {
                x : Math.floor(Math.random()*17+1) * box,
                y : Math.floor(Math.random()*15+3) * box
            }
            eatFire = true;
        } else {
            // remove the tail
            snake.pop();
        }

        // add new Head

        let newHead = {
            x : snakeX,
            y : snakeY
        }

        // game over

        if(snakeX < box || snakeX > 17 * box || snakeY < 3*box || snakeY > 17*box || collision(newHead,snake)){
            clearInterval(game);
            dead.play();
        }
        if (!eatFire) {
            snake.unshift(newHead);
        }

        ctx.fillStyle = "white";
        ctx.font = "45px Changa one";
        ctx.fillText(score,2*box,1.6*box);

        if (eatFire) {
            if (snake.length <= 1) {
                clearInterval(game);
                dead.play();
            }
            snake.pop();
        }
    }

// call draw function every 100 ms

    let game = setInterval(draw,200);

}