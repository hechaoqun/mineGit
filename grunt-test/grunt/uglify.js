module.exports = {
    options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd HH:mm:ss") %> */\n',
        mangle:true,
        beautify:false
    },
    build: {
        files: {
            'dist/script/<%= pkg.name %>_<%= pkg._version %>.js': ['src/common.js'],
            'dist/script/ext/<%= pkg.name %>_<%= pkg._version %>_ext.js': ['dist/script/ext/<%= pkg.name %>_<%= pkg._version %>_origin_ext.js']
        }
    },
    hiwifi: {
        files: {
            'dist/script/<%= pkg.name %>_<%= pkg._version %>_hiwifi.js': ['dist/script/<%= pkg.name %>_<%= pkg._version %>_origin.js']
        }
    }
};