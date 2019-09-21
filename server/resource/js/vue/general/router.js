import {vTreeComp} from "../components/v.tree.comp";
import {vListChange} from "../components/v.list.change";
import {vTreeCustom} from "../components/v.tree.custom";
import {vListAction} from "../components/v.list.action";
import {data} from "../data/store.data";
import {vPageTest} from "../components/page";
import {vFilms} from "../components/v.films";
import {vCarusel} from "../components/test.vutify";

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
	{path: '/test/page', component: vPageTest},
	{path: '/films', component: vFilms},
	{path: '/carusel', component: vCarusel}
];
