yarn react-scripts build
rm ../js/2.chunk.js
rm ../js/3.chunk.js
rm ../js/main.chunk.js
rm ../js/runtime-main.js
cp build/static/js/2.*.chunk.js ../js/2.chunk.js
cp build/static/js/3.*.chunk.js ../js/3.chunk.js
cp build/static/js/main.*.chunk.js ../js/main.chunk.js
cp build/static/js/runtime-main.*.js ../js/runtime-main.js
