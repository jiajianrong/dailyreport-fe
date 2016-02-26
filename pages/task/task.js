define('static/js/task/task.js', function (require, exports, module) {

	console.log('task.js is running...');

	var Vue = require('vue');
	var zepto = require('zepto');

	var app = new Vue({
		el: '#task',
		data: {
			currentView: ''
		},
		components: {
			'page-login': require('login'),
			'page-main': require('main')
		}
	});


	
	//hash管理page
	(function () {
		var hash = window.location.hash;

		//查看lg中是否登录
		var userID = localStorage.getItem('userID');

		window.location.hash = userID ? 'page-main' : 'page-login';
		

		//运用hash值来保存view状态 防止刷新回退
		function route () {
		  	app.currentView = window.location.hash.slice(1) || 'page-login'
		}

		window.addEventListener('hashchange', route);
		window.addEventListener('load', route);
		
		window.dr = {
		    app: app
		};

	})();

});