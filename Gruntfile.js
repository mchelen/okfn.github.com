yaml = require('js-yaml');
fs   = require('fs');
yamlFront = require('yaml-front-matter');
//curl = require('node-curl');

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);
  
  grunt.registerTask('foo', 'bar', function(arg) {
  
//  var filepath = "projects/_posts/2014-02-01-csv-js.md";
  var filepath = "2014-02-01-csv-js.md";

//    var filepath = "test.yml";

/*
// Get document, or throw exception on error
try {
  var doc = yaml.safeLoad(fs.readFileSync(filepath, 'utf8'));
  console.log(doc);
} catch (e) {
  console.log(e);
}
*/

    var dirpath = "projects/_posts";

    var filenames = fs.readdirSync(dirpath);

    var imageurls = [];

    filenames.map(function(filename){
    
      var fileyaml = yamlFront.loadFront(fs.readFileSync(dirpath + "/" + filename, 'utf8'));

if (fileyaml.imageurl){
      imageurls[imageurls.length] = fileyaml.imageurl;
      }
    
    });

//    var results = yamlFront.loadFront(fs.readFileSync(filepath, 'utf8'));

//    console.log(results);

    console.log(imageurls);

//    console.log(dirs);

//    var foo = grunt.file.readYAML(filepath);

  
//    var msg = 'baz';
//    console.log(foo);

    
    
  });

};
