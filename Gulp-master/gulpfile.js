(function() {
	
	// gulp模块
	const gulp = require('gulp');
	// 读取文件模块
	const fs = require('fs');
	// 自动添加css前缀
	const autoprefix = require("gulp-autoprefixer");
	// 重命名文件
	const rename = require('gulp-rename');
	// 压缩css代码
	const gulpMinifyCss = require('gulp-minify-css');
	// 合并文件
	const gulpConcat = require('gulp-concat');
	// 压缩js代码
	const gulpUglify = require('gulp-uglify');
	// 合并图片
	const spritesmith = require('gulp.spritesmith');
	// 压缩图片
	const gulpImagemin = require('gulp-imagemin');
	// 压缩Html文件
	const htmlMin = require('gulp-htmlmin');
	// 热加载、自动刷新页面
	const browserSync = require('browser-sync').create();
	// 图片缓存，只有图片替换了才压缩
	const gulpCache = require('gulp-cache');
	// 更改提醒
	const gulpNotify = require('gulp-notify');
	// 清除文件
	const del = require('del');
	// 合并任务执行
	const runSequence = require('run-sequence');
	// 编译es6
	const babel = require('gulp-babel');
	// 编译sass
	const sass = require('gulp-sass');
	
	// 当没有运行指定任务时，默认执行此任务
	gulp.task('default', (callback) => {
		return runSequence(['clean'], ['build'], ['serve', 'watch'], callback);
	});
	
	// 合并类型任务
	gulp.task('build', (callback) => {
		return runSequence(
			['assetsCss', 'assetsJS'],
			['convertJS', 'sassfile', 'icon', 'images', 'copyHtml'],
			callback
		);
	});
	
	// 清除文件
	gulp.task('clean', (callback) => {
		return del(['dist/'], callback);
	});
	
	// 合并压缩通用的CSS文件
	gulp.task('assetsCss', (callback) => {
		return gulp.src('src/assets/css/*.css')
			.pipe(gulpConcat('assets.css', {
				newLine: '\n\n'
			}))
			// 自动添加浏览器前缀
			.pipe(autoprefix({
				browsers: ['last 2 versions'],
            	cascade: false
			}))
			.pipe(gulpMinifyCss())
			.pipe(gulp.dest('dist/assets/css/'))
			//.pipe(gulpNotify({ message: 'AseetsCss task complete' }))
	});
	
	// 合并压缩通用的JS文件
	gulp.task('assetsJS', (callback) => {
		return gulp.src('src/assets/js/*.js')
			.pipe(gulpConcat('assets.js'), {
				newLine: ';\n'
			})
			.pipe(gulpUglify())
			.pipe(gulp.dest('dist/assets/js/'))
			//.pipe(gulpNotify({ message: 'AseetsJs task complete' }))
	});
	
	// 编译压缩ES6语法文件
	gulp.task('convertJS', (callback) => {
		return gulp.src('src/es6/*.js')
			.pipe(babel({
				presets: ['es2015']
			}))
			.pipe(gulpUglify())
			.pipe(gulp.dest('dist/script/'))
			//.pipe(gulpNotify({ message: 'ES6 task complete' }))
	});
	
	// 编译压缩SCSS文件
	gulp.task('sassfile', (callback) => {
		return gulp.src('src/scss/**/*.scss')
			// 自动添加浏览器前缀
			.pipe(autoprefix({
				browsers: ['last 2 versions'],
            	cascade: false
			}))
			.pipe(sass({
				outputStyle: 'compressed'
			}))
			.on('error', sass.logError)
			.pipe(gulp.dest('dist/style/'))
			//.pipe(gulpNotify({ message: 'Scss task complete' }))
	});
	
	// 合并图标，生成雪碧图
	gulp.task('icon', (callback) => {
		return gulp.src('src/icon/**/*')
			.pipe(spritesmith({
				// 保存合并后图片的地址
				imgName: 'icon/sprite.png',
	            // 保存合并后对于css样式的地址
	            cssName: 'style/sprite.css',
	            // 合并时两个图片的间距
	            padding: 5,
	            // 注释1
	            algorithm: 'binary-tree',
	            // 注释2
	            cssTemplate: function (data) {
	                var arr=[];
	                data.sprites.forEach(function (sprite) {
	                    arr.push(".icon-"+sprite.name+
	                    "{" +
	                    "background-image: url('"+sprite.escaped_image+"');"+
	                    "background-position: "+sprite.px.offset_x+" "+sprite.px.offset_y+";"+
	                    "width:"+sprite.px.width+";"+
	                    "height:"+sprite.px.height+";"+
	                    "}\n");
	                });
	                return arr.join("");
	            }
			}))
			.pipe(gulp.dest('dist/'))
			//.pipe(gulpNotify({ message: 'Images task complete' }))
	});
	
	// 合并图片
	gulp.task('images', (callback) => {
		return gulp.src('src/images/**/*')
			.pipe(gulpCache(gulpImagemin({
				optimizationLevel: 3,
				progressive: true, interlaced: true
			})))
			.pipe(gulp.dest('dist/images/'))
			//.pipe(gulpNotify({ message: 'Images task complete' }))
	});
	
	// 压缩html文件
	gulp.task('copyHtml', (callback) => {
		return gulp.src('src/**/*.html')
			.pipe(htmlMin({
				collapseWhitespace: true,
				collapseBooleanAttributes: true,
				removeComments: true,
				removeEmptyAttributes: true,
				removeScriptTypeAttributes: true,
				removeStyleLinkTypeAttributes: true,
				minifyJS: true,
				minifyCSS: true
			}))
			.pipe(gulp.dest('dist/'))
			//.pipe(gulpNotify({ message: 'HTML task complete' }))
	});
	
	//配置访问前端文件服务器
	gulp.task('serve', () => {
	    return browserSync.init({
		    server: {
		        baseDir: './dist/'
	    	},
	    	port: 7412
	    });
	});
	
	//配置当文件有所改动，页面自动刷新
	gulp.task('watch', () => {
	    return gulp.watch('src/**/*.*', ['reload']);
	});
	
	gulp.task('reload', (callback) => {
	    return runSequence(['build'], ['reload-browser'], callback);
	});
	
	// 刷新页面
	gulp.task('reload-browser', () => {
	    return browserSync.reload();
	});
	
}).call(this);
