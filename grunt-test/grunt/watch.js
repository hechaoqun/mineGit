module.exports = {
    module: {
        files: 'src/app/modules/**/README',
        tasks: ['module:all'],
        options: {
            nospawn: true,
            interrupt: true,
            event: ['added', 'changed', 'deleted'],
        }
    },

    js: {
        files: ['src/app/**/*.js', 'src/app/**/*.less', 'src/app/**/*.html'],
        tasks: ['zspack:locate'],
        options: {
            nospawn: true,
            interrupt: true,
            event: ['added', 'changed', 'deleted'],
        }
    }
};
