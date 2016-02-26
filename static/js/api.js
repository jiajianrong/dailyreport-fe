define('static/js/api.js', function (require, exports, module) {

	console.log('api.js is running...');

	

	var host = 'http://123.206.23.251',
		port = ':80',
		path = '/dailyreport/api',
		URL = host + port + path;
		
	var userIds = {
	    '4667': '沈云',
	    '4513': '左俊俊',
	    '5024': '贾建容',
	    '5604': '邬静怡',
	    
	    '6726': '刘亮',
	    '6733': '付合博',
	    '6828': '黄承文',
	    
	    's1088': '孟祥瑞',
	    'S1088': '孟祥瑞',
	    's1145': '瞿迎',
	    'S1145': '瞿迎',
	    's1172': '钱露',
	    'S1172': '钱露',
	    's1279': '张效玮',
        'S1279': '张效玮',
	    
	    'l2045': '谢文博',
	    'L2045': '谢文博'
	};
	
	module.exports = {url:URL, userIds: userIds};

});