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
	]
};

module.exports.db = db;
