let template = `
<div>
	<v-carousel>
      <v-carousel-item
        v-for="(url, i) in urls"
        :key="url"
      >
        <v-sheet
          color="white"
          height="100%"
          tile
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <div class="display-3"><img :src="url" alt="porno"></div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
</div>
`;

export let vCarusel = {
	name: 'v-carusel',
	template,
	data(){
		return {
			urls: [
				'https://sexmobila.ru/storage/posts/500/557/4.jpg',
				'https://sexmobila.ru/storage/posts/500/557/5.jpg',
				'https://sexmobila.ru/storage/posts/500/557/6.jpg',
				'https://sexmobila.ru/storage/posts/500/557/7.jpg',
				'https://sexmobila.ru/storage/posts/500/557/8.jpg',
				'https://sexmobila.ru/storage/posts/500/557/9.jpg',
				'https://sexmobila.ru/storage/posts/500/557/13.jpg',
			],
		}
	}
}
