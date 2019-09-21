
module.exports = function (grunt) {
 
    grunt.initConfig({
        uncss: {
            dist: {
                files: [
                    { src: './src/index.html', dest: './src/cleancss/tidy.css' }
                ]
            }
        }
        // cssmin: {
        //     dist: {
        //         files: [
        //             { src: './src/cleancss/tidy.css', dest: './src/cleancss/tidy.css' }
        //         ]
        //     }
        // }
    });
 
    // Загрузка плагинов
    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
 
    // Задачи по умолчанию.
    grunt.registerTask('default', ['uncss']);
    // grunt.registerTask('default', ['uncss', 'cssmin']);
 
};