const db = {
	treeData: {
		name: 'My Tree',
		children: [
			{name: 'hello'},
			{name: 'wat'},
			{
				name: 'child folder',
				children: [
					{
						name: 'child folder',
						children: [
							{name: 'hello'},
							{name: 'wat'}
						]
					},
					{name: 'hello'},
					{name: 'wat'},
					{
						name: 'child folder',
						children: [
							{name: 'hello'},
							{name: 'wat'}
						]
					}
				]
			}
		]
	},
	data: [
		{id: 1, pId: 0, name: 'Max'},
		{id: 2, pId: 1, name: 'Child1'},
		{id: 3, pId: 1, name: 'Child2'},
		{id: 4, pId: 2, name: 'Child1.1'},
		{id: 5, pId: 2, name: 'Child1.2'},
		{id: 6, pId: 3, name: 'Child3.1'},
		{id: 7, pId: 3, name: 'Child3.2'},
		{id: 8, pId: 3, name: 'Child3.3'},
	],
	links: {
		modern2: [{id: 1, name: 'серия 1', filmLink: 'https://www.youtube.com/embed/kTdDHb-mn1A?list=PL6i320ChW_oFo3X4dkHIdFRBF9vTu0yAa'},
			{id:2, name: 'серия 2', filmLink: 'https://www.youtube.com/embed/ZHxl1jX0IBg?list=PL6i320ChW_oFo3X4dkHIdFRBF9vTu0yAa'},
			{id:3, name: 'серия 3', filmLink: 'https://www.youtube.com/embed/0ZKUmc-K1A8?list=PL6i320ChW_oFo3X4dkHIdFRBF9vTu0yAa'}],
		other: [{id:1, name: 'Морфий', filmLink: 'https://www.youtube.com/embed/EeeGMdRdH5I'},
			{id:2, name: 'Брат', filmLink: 'https://www.youtube.com/embed/aDaaCGZz-Ok'},
			{id:3, name: 'Брат-2', filmLink: 'https://www.youtube.com/embed/K9TRaGNnjEU'},
			{id:4, name: 'Пятый элемент', filmLink: 'https://www.youtube.com/embed/HSU7iYPnqYM'},
			{id:5, name: 'Иван Васильевич меняет профессию', filmLink: 'https://www.youtube.com/embed/a50qT9bW2Qo'},
			{id:6, name:'клюква шоу - Mutter', filmLink: 'https://www.youtube.com/embed/dkwmVwlwhKU'}
		]
	}
};

module.exports.db = db;
