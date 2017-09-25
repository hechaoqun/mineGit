module.exports = {
	/*合并css*/
	options: {
         keepSpecialComments: 0,
         banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
            //美化代码
         beautify: {
             //中文ascii化，非常有用！防止中文乱码的神配置
            ascii_only: true
         }
     },
     concat: {
         files: {
             'dist/css/base.min.css': [
                 "src/css/base.css",
                 "src/css/coin.css"
             ]
         }
     }
}