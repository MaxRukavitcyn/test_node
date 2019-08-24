import {vTreeComp} from "./v.tree.comp";
import {vListChange} from "./v.list.change";
import {vTreeCustom} from "./v.tree.custom";
import {vListAction} from "./v.list.action";
import {data} from "./store.data";
import {vSelect} from "./v.select";
import {vPageTest} from "./page";

let treeData = {
	name: 'My Tree',
	children: [
		{ name: 'hello' },
		{ name: 'wat' },
		{
			name: 'child folder',
			children: [
				{ name: 'hello',
					children: [
						{ name: 'hello' },
						{ name: 'wat' },
					]},
				{ name: 'wat',
					children: [
						{ name: 'hello' },
						{ name: 'wat' },
					]},
			]
		}
	]
};
export let routes = [
	{path: '/tree', component: vTreeComp, props: {treeData: treeData}},
	{path: '/list/name', component: vListChange},
	{path: '/tree/custom', component: vTreeCustom, props: {model: data}},
	{path: '/list/action', component: vListAction},
	{path: '/test/page', component: vPageTest}
];
