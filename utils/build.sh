# js transform
babel --presets react,es2015 js/source/ -d js/build
# js package
browserify js/build/app.js -o bundle.js
# done
date; echo;
