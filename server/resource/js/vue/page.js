import {vSelect} from "./v.select";
import {vFilms} from "./v.films";

let template = `
				<div>
					<h1>Фильмотека</h1>
					<br>
					<v-select @input="changeLink" :model="model"></v-select>
					<v-films :link="link"></v-films>
				</div>
`;

export let vPageTest = {
	name: 'v-page-test',
	template,
	components: {'v-select': vSelect, 'v-films': vFilms},
	data() {
		return {
			link: '',
			model: {list: [{id:1, name: 'Морфий', link: 'https://www.youtube.com/embed/EeeGMdRdH5I'},
					{id:2, name: 'two row'},
					{id:3, name: 'three row'},
					{id:4, name: 'hui'}]
			}
			
		}
	},
	methods: {
		changeLink(link) {
			this.link = link;
		}
	}
};
