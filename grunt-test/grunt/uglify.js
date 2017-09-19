module.exports = {
    options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd HH:mm:ss") %> */\n',
        mangle:true,
        beautify:false
    },
    build: {
        files: {
            'dist/script/<%= pkg.name %>_<%= pkg._version %>.js': ['src/js/*.js']}
    },
    hiwifi: {
        files: {
            'dist/script/<%= pkg.name %>_<%= pkg._version %>_hiwifi.js': ['dist/script/<%= pkg.name %>_<%= pkg._version %>_origin.js']
        }
    }
    // min:{
    //         expand:true,
    //         cwd:'src/js',
    //         src:'*.js',
    //         dest:'dist/script',
    //         ext:'min'
    // }
};