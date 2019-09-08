import {vSelect} from "./v.select";
import {vFilms} from "./v.films";

let template = `
				<div>
					<h1>Фильмотека</h1>
					<br>
					<div style="position: relative; display: inline-block" >
						<v-select @input="changeLink" :model="model"></v-select>
						<v-films :link="link" class="film-container"></v-films>
					</div>
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
					{id:2, name: 'Брат', link: 'https://www.youtube.com/embed/aDaaCGZz-Ok'},
					{id:3, name: 'Брат-2', link: 'https://www.youtube.com/embed/K9TRaGNnjEU'},
					{id:4, name: 'Пятый элемент', link: 'https://www.youtube.com/embed/HSU7iYPnqYM'}
					]
			}
			
		}
	},
	methods: {
		changeLink(link) {
			this.link = link;
		}
	}
};
