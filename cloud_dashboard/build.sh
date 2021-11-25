# Build cloud_dashboard
yarn react-scripts build

# Remove old files
rm ../js/2.chunk.js
rm ../js/3.chunk.js
rm ../js/main.chunk.js
rm ../js/runtime-main.js
rm ../css/2.chunk.css
rm ../css/main.chunk.css

# Copy new files from build directory
cp build/static/js/2.*.chunk.js ../js/2.chunk.js
cp build/static/js/3.*.chunk.js ../js/3.chunk.js
cp build/static/js/main.*.chunk.js ../js/main.chunk.js
cp build/static/js/runtime-main.*.js ../js/runtime-main.js
cp build/static/css/2.*.chunk.css ../css/2.chunk.css
cp build/static/css/main.*.chunk.css ../css/main.chunk.css
