var yaml = require('js-yaml');
var fs   = require('fs');
var yamlFront = require('yaml-front-matter');
//curl = require('node-curl');
var projectimages = require('./projectimages.json');
//var projectimages = "";

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
    },
    'curl-dir': {
      'tmp/foo': projectimages
    }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-curl');

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
      if (fileyaml.imageurl){ // check if imageurl exists
//      console.log(fileyaml.imageurl);
      if (fileyaml.imageurl.indexOf("http") >= 0 ){
            imageurls[imageurls.length] = fileyaml.imageurl;
            }
      }
    });

//    var results = yamlFront.loadFront(fs.readFileSync(filepath, 'utf8'));

//    console.log(results);

//    console.log(yaml.safeDump(imageurls));
    

    console.log(imageurls);
    
//    console.log(JSON.stringify(imageurls));

    fs.writeFileSync("projectimages.json", JSON.stringify(imageurls)); //write image urls to file


//    console.log(dirs);

//    var foo = grunt.file.readYAML(filepath);

  
//    var msg = 'baz';
//    console.log(foo);




    
    
  });

};
