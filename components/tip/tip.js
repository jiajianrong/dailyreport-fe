define('components/tip/tip.js', function (require, exports, module) {

	console.log('tip.js is running...');

	var Vue = require('vue');

	module.exports = Vue.extend({
	    
		props: ['openTip'],
		
		created: function() {
		    dr.tip = this;
		},
		
		template: __inline('./tpl/tip.tpl'),
		
		data: function() {
			return {
				message: ''
			}
		},
		
		methods: {
			closeTip: function () {
				this.openTip = false;
			}
		}
	})

});