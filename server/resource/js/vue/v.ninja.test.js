let template = `
	<div>
		<div class="answers-container">
    		<ul id="answer" class="answers-list"></ul>
		</div>
	</div>
`;

import {globalNinja} from "../ninja/ninja";

export let vNinjaTest = {
	name: 'v-ninja-test',
	template,
	mounted(){
		globalNinja();
	},
	data() {
		return {}
	}
};
