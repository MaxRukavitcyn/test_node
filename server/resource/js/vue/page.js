import {vSelect} from "./v.select";
import {vFilms} from "./v.films";

let template = `
				<div>
					<h1>Фильмотека</h1>
					<br>
					<div style="position: relative; display: inline-block" >
						<v-select @input="changeLink" :model="model"></v-select>
						<v-films :filmLink="filmLink" class="film-container"></v-films>
					</div>
				</div>
`;

export let vPageTest = {
	name: 'v-page-test',
	template,
	components: {'v-select': vSelect, 'v-films': vFilms},
	data() {
		return {
			filmLink: '',
			model: {list: [{id:1, name: 'Морфий', filmLink: 'https://www.youtube.com/embed/EeeGMdRdH5I'},
					{id:2, name: 'Брат', filmLink: 'https://www.youtube.com/embed/aDaaCGZz-Ok'},
					{id:3, name: 'Брат-2', filmLink: 'https://www.youtube.com/embed/K9TRaGNnjEU'},
					{id:4, name: 'Пятый элемент', filmLink: 'https://www.youtube.com/embed/HSU7iYPnqYM'}
					]
			}
			
		}
	},
	methods: {
		changeLink(filmLink) {
			this.filmLink = filmLink;
		}
	}
};
