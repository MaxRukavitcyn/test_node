let template = `
		<div>
			<iframe width="853" height="480" :src="link" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		</div>
`;

export let vFilms = {
	name: 'v-films',
	template,
	props: ['link']
};
