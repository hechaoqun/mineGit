module.exports = {
	 // options: {
	 //    // 映射CSS中背景路径，支持函数和数组，默认为 null
	 //    imagepath_map: null,
	 //    // 各图片间间距，如果设置为奇数，会强制+1以保证生成的2x图片为偶数宽高，默认 0
	 //    padding: 0,
	 //    // 是否使用 image-set 作为2x图片实现，默认不使用
	 //    useimageset: false,
	 //    // 是否以时间戳为文件名生成新的雪碧图文件，如果启用请注意清理之前生成的文件，默认不生成新文件
	 //    newsprite: false,
	 //    // 给雪碧图追加时间戳，默认不追加
	 //    spritestamp: true,
	 //    // 在CSS文件末尾追加时间戳，默认不追加
	 //    cssstamp: true,
	 //    // 默认使用二叉树最优排列算法
	 //    algorithm: 'binary-tree',
	 //    // 默认使用`pixelsmith`图像处理引擎
	 //    engine: 'pixelsmith',
	 //    banner:'/*<%=pkg.name %> <%=grunt.template.today("yyyy-mm-dd")%>*/\n'
	 //  },
	 //  sprite_module1: { //只对module1目录进行自动生成雪碧图处理
	 //    options : {
	 //      // sprite背景图源文件夹，只有匹配此路径才会处理，默认 images/slice/
	 //      imagepath: 'src/img/',
	 //      // 雪碧图输出目录，注意，会覆盖之前文件！默认 images/
	 //      spritedest: 'dist/img/'
	 //    },
	 //    files: [{
	 //      // 启用动态扩展
	 //      expand: true,
	 //      // css文件源的文件夹
	 //      cwd: 'src/css/',
	 //      // 匹配规则
	 //      src: ['**/*.css', '!**/*.sprite.css'],
	 //      // 导出css和sprite的路径地址
	 //      dest: 'dist/css/',
	 //      // 导出的css名
	 //      ext: '.sprite.css',
	 //      extDot: 'last'
	 //    }]
	 //  }
	 
	 // options:{
  //         banner:'/*<%=pkg.name %> <%=grunt.template.today("yyyy-mm-dd")%>*/\n'
  //    },
  //    all:{
  //        src:"src/img/*.png",
  //        destImg:"spritesheet/spritesheet.png",
  //        destCSS:"css/sprite.css",
  //        algorithm:"binary-tree"
  //    }
  options: {
            output: 'dist/img/',
            imgPath: 'src/img/',
            prefix: 'sprite-',
            retina: false,
            algorithm: 'binary-tree',
            padding: 10,
            sizeLimit: 10 * 1024
        },
  task: {
            src: 'src/css/icon.css',
            dest: 'dist/css/dest.css' }
}