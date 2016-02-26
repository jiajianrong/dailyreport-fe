
define('components/login/login.js', function (require, exports, module){

	console.log('login.js running...');

	var Vue = require('vue');
	var zepto = require('zepto');
	var api = require('api');

	module.exports = Vue.extend({
	    
		template: __inline('./tpl/login.tpl'),
		
		activate: function(done) {
			done();
		},
		
		created: function() {
		    dr.login = this;
		},
		
		data: function() {
			return {
				userID: localStorage.getItem('userID') || '',
				idNotValid: false,
				idNotExist: false
			}
		},
		
        components: {
            'tip-component': require('tip')
        },
		
		methods: {
		    
			submitForm: function() {
			    
				var $this = this,
					userID = this.userID;
                
				// id格式执行校验
				if ($this.checkUserID()) {
				    return false;
				};
				
				// id是否存在校验
				if (!api.userIds[userID]) {
				    $this.idNotExist = true;
				    setTimeout(function(){
				        dr.tip.message = '工号错误'
				    },0);
				    return false;
				}
				
				localStorage.setItem('userID', $this.userID);
                window.location.hash = 'page-main';
                
                
				/*
    			$.ajax({
    				url: api.url,
    				data: {
    					action: 'list',
    					id: userID
    				},
    				dataType: 'jsonp',
    				success: function (data) {
    					if (data) {
    						localStorage.setItem('userID', $this.userID);
    						window.location.hash = 'page-main';
    					}
    				},
    				error: function(xhr, errorType, error) {
    				    $this.idNotExist = true;
    				}
    			});
				*/
			},
			
			// id格式校验
			checkUserID: function () {
				return this.idNotValid = (this.userID.length > 5);
			}
		}
	});

});