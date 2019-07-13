import {vTreeComp} from "./v.tree.comp";
import {vListChange} from "./v.list.change";
let treeData = {
	name: 'My Tree',
	children: [
		{ name: 'hello' },
		{ name: 'wat' },
		{
			name: 'child folder',
			children: [
				{ name: 'hello' },
				{ name: 'wat' },
			]
		}
	]
};
export let routes = [
	{path: '/tree', component: vTreeComp, props: {treeData: treeData}},
	{path: '/list/name', component: vListChange}
];
