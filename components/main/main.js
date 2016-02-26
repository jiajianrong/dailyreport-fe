define('components/main/main.js', function (require, exports, module) {
	
	console.log('main.js is running...');

	var Vue = require('vue');
	var api = require('api');

	module.exports = Vue.extend({
	    
		template: __inline('./tpl/main.tpl'),
		
		activate: function (done) {
			done();
		},
		
		data: function () {
			return {
				lists: [],
				content: '',
				userID: null,
				addingItem: false
			}
		},
		
        computed: {
            isFold: function() {
                return this.addingItem ? "-" : "+";
            }
        },
		
		created: function () {
            dr.main = this;
            this.list();
        },
		
		events: {
			
		},
		
		methods: {
			quit: function () {
				localStorage.removeItem('userID');
				window.location.hash = 'page-login';
			},
			
			submit: function () {

                var _this = this;
                
                var _t = new Date(),
                    time = (_t.getMonth()+1) + '月' + _t.getDate() + '日',
                    content = this.content,
                    userID = this.userID,
                    name = api.userIds[userID];
                    
                this.addingItem = false;

                $.ajax({
                    url: api.url,
                    data: {
                        id: userID,
                        action: 'add',
                        name: name,
                        date: time,
                        content: content
                    },
                    dataType: 'jsonp',
                    success: function (data) {
                        if (data && data.rtnCode=='0') {
                            _this.list();
                            _this.content = '';
                        }
                    }
                });
            },
            
            list: function() {
                
                var _this = this;
            
                var userID = this.userID = localStorage.getItem('userID');
                
                if (userID) {
                    $.ajax({
                        url: api.url,
                        data: {
                            action: 'list',
                            id: userID
                        },
                        dataType: 'jsonp',
                        success: function (data) {
                            _this.lists = data;
                        }
                    });
                }
            },
            
            add: function() {
                this.addingItem = !this.addingItem;
            }
		}
	});

});	