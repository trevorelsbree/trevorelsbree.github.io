Practice portfolio website employing bootstrap and google analytics. For a simple static website this project employs more complex features than needed as an educational exercise.

#### Version
0.1.0

#### Tech

This html5 site uses a number of open source projects to work properly:
* Bootstrap css templates
* Grunt with plugins: uglify, mincss, min, jshint
* Google Analytics JS


#### Build Info

In order to get a development environment working you will need to install grunt as well as the 4 plugins listed above. Grunt looks for the first Gruntfile.js file in the current directory or above for the tasks to run. Grunt helps improve performance for external website dependencies by compressing multiple javascript or css files into a single file by removing whitespace and other redundant syntax. Files are gathered from the src directories and compressed and eventually written into the dist directory.