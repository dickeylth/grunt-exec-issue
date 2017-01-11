'use strict';
var path = require('path'),
  exec = require('child_process').execSync;

module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-exec');

  grunt.initConfig({
    exec: {
      npm_outdated: 'npm outdated --long --ansi --color',
      stdout: 'inherit',
      stderr: 'inherit',
      stdio: 'inherit'
    }
  });

  let task = grunt.task;

  grunt.registerTask('compare', 'compared task with color output', () => {
    exec('npm outdated --long', {
      stdio: 'inherit'
    });
  });

  return grunt.registerTask('default', 'default build', () => {
    task.run('exec:npm_outdated');
  });

};
