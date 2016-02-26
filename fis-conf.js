/*
* 编译方式简单
* jr58 release -cow
* jr58 release -cod ../release
* 
* 如果要开起ls存储
* 在pages/task/task.js   require.config中添加hash字段  每次hash值变更会使ls全部刷新(之后的优化点)
*/
fis.config.set('settings.postprocessor.amd', {
    paths: {
        vue: '/static/js/vue.js' 
    }
});
fis.config.merge({
	modules: {
		parser: {
            sass : 'sass',
            scss : 'sass',
            tmpl : 'utc'
        },
        postprocessor: {
        	js: wrapPostprocessor
        }
	},
	roadmap: {
		ext: {
	        scss: 'css'
	    },
		path: [
			{
				reg: '/static/js/zepto.js',
				isMod: true,
				release: '/static/js/zepto.js'
			},
			{
				reg: '/static/js/vue.js',
				isMod: true,
				release: '/static/js/vue.js'
			},
			{
				reg: /^\/static\/(.*)$/,
				release: '/static/$1'
			},
			{
				reg: /^\/components\/(.*)$/,
				release: '/components/$1'
			},
			{
				reg: /^\/pages\/(.*)\.js$/,
				release: '/static/js/$1.js',
				useAMD: true
			},
			{
				reg: /^\/pages\/(.*)\.html$/,
				release: '/pages/$1.html'
			}
		]
	}
});
function wrapPostprocessor(content, file) {
	console.log(file.isMod);
	if(file.isMod){
        var componentJson = file.dirname + '/component.json';
        var exports = '';
        if(fis.util.isFile(componentJson)){
            var json = require(componentJson);
            if(json.exports){
                var main = fis.util(file.dirname, json.main || 'index.js');
                if(main === file.realpath){
                    exports = ';module.exports = ' + json.exports;
                }
            }
        }
        console.log(file.getId());
        content = 'define(\'' + file.getId() + '\', function(require, exports, module){' + content + exports + '\n\n});';
    }
    return content;
}