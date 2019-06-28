let path = require('path'); //подгружаем модуль path для того что бы пути делать абсолютныыми
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let conf = {
	entry: './server/resource/js/webpack/index.js', //точка входа
	output: {
		path: path.resolve(__dirname, './server/resource/dist'), //путь к папке в которую кладем файл main.js, путь делается абсолютным через модуль path
		filename: "bundle.js",
		publicPath: "server/resource/dist/" //подставляем папку dist и теперь можем не пересобирать, изменения будут отображаться в браузере на лету
	},
	devServer: {
		overlay: true  //вывод ошибок прямо в браузере, не нужно смотреть ошибку в консоли
	},
	module: {
		rules: [  //указание правил
			{
				test: /\.js$/, // регулярка указывает на все js файлы
				loader: 'babel-loader' //отправляем js файлы все в loader
			},
			{
				test: /\.css$/, //для прогонки css ников
				use: ExtractTextPlugin.extract({ //для извлечения css в отдельный файл
					fallback: 'style-loader',
					use: 'css-loader',
				}),
				/* для впиливания scc в один файл bundle.js
				use: [
					'style-loader',
					'css-loader'
				]
				*/
			}
		]
	},
	plugins: [
		new ExtractTextPlugin("style.css"), //плагин для извлечения css из общего js файла в отдельный style.css
	],
	// devtool: 'eval-sourcemap' //для корректной отладки в консоли, для правильного отбражения номера строки в файле
	
};

module.exports = (env, options) => {

	conf.devtool = options.mode === 'production' ? false: 'eval-sourcemap'; //если режим сборки production - не пихаем карту кода в main.js
	//если запускаем в режиме development только тогда у нас появляется карта кода
	return conf;

};
