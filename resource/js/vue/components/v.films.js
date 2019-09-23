let template = `
		<div style="z-index: 9">
			<iframe v-if="hasLink" width="853" height="480" :src="filmLink" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		</div>
`;

export let vFilms = {
	name: 'v-films',
	template,
	props: ['filmLink'],
	computed: {
		hasLink() {
			return this.filmLink? this.filmLink.startsWith('http') : false;
		}
	}
};
