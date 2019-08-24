import {vSelect} from "./v.select";

let template = `
				<div>
					<h1>Test Page</h1>
					<br>
					<v-select :model="model"></v-select>
				</div>
`;

export let vPageTest = {
	name: 'v-page-test',
	template,
	components: {'v-select': vSelect},
	data() {
		return {
			model: {list: [{id:1, name: 'one row'},{id:2, name: 'two row'},{id:3, name: 'three row'},{id:4, name: 'hui'}]}
		}
	}
};
