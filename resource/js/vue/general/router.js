import {vTreeComp} from "../components/v.tree.comp";
import {vListChange} from "../components/v.list.change";
import {vTreeCustom} from "../components/v.tree.custom";
import {vListAction} from "../components/v.list.action";
import {vPageTest} from "../components/page";
import {vFilms} from "../components/v.films";
import {vCarusel} from "../components/test.vutify";
import {vEquations} from "../components/v.equations";

export let routes = [
	{path: '/tree', component: vTreeComp, props:{query: {url:'/tree',params: 'key=treeData'}}},
	{path: '/list/name', component: vListChange},
	{path: '/tree/custom', component: vTreeCustom, props: {query: {url:'/tree',params:'key=data'}}},
	{path: '/list/action', component: vListAction},
	{path: '/test/page', component: vPageTest},
	{path: '/films', component: vFilms},
	{path: '/carusel', component: vCarusel},
	{path: '/liner/equations', component: vEquations}
];
