'use strict';
import {Game} from "./game";

let template = `
    <div>
        <canvas ref="snake" id="snake" width="608" height="608"></canvas>
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
        const cvs = this.$refs.snake;
        const ctx = cvs.getContext("2d");
        new Game(ctx)
    }
};
