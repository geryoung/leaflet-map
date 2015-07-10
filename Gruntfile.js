module.exports = function(grunt) {

  grunt.initConfig({
    mochaTest: {
        test : {
            src:['test/**/*.js']
        }
    },
    mocha_phantomjs: {
        all : ['test/**/*.html']
    },
    karma: {
       unit: {
        configFile: 'karma.conf.js'
       } 
    }
  });

  //测试前端页面
  // grunt.loadNpmTasks('grunt-mocha-phantomjs');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-karma');
  

  // grunt.registerTask('testpage', 'mocha_phantomjs');
  grunt.registerTask('default', 'mochaTest');
  grunt.registerTask('uitest', 'karma');

};