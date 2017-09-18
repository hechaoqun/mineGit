//包含函数
module.exports = function(grunt){

	 // 供本地服务使用的中间件
     // measures the time each task takes
     require('time-grunt')(grunt);

	//获取 package.json 的信息
	var pkg =grunt.file.readJSON('package.json');
	//版本号
		pkg._version = pkg._version.replace(/\./g,'_');

	//任务配置，所有插件的配置信息
	//加载所有的grunt 配置，每个task的配置放到了 ./grunt目录下对应的js文件中
	require('load-grunt-config')(grunt, {
        data: {
            pkg: pkg,
            grunt: grunt
        }
    });

	//测试压缩js 文件
	grunt.registerTask('test',['uglify']);

	//告诉grunt当我们的终端中输入grunt的时需要做些什么（注意先后顺序）
	grunt.registerTask('default',[]);

	
}