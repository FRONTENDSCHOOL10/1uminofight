// generate-sprite.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import SVGSpriter from 'svg-sprite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const spriter = new SVGSpriter({
  dest: 'public/sprite', // output directory
  mode: {
    symbol: {
      dest: '.', // keeps the output in the same directory
      sprite: 'icons.svg', // the name of the sprite file
    },
  },
});

// Path to the folder containing your individual SVG files
const svgPath = path.resolve(__dirname, 'public/icons');

// Read the SVG directory and add each SVG file to the spriter
fs.readdirSync(svgPath).forEach((file) => {
  if (path.extname(file) === '.svg') {
    spriter.add(
      path.resolve(svgPath, file),
      file,
      fs.readFileSync(path.resolve(svgPath, file), { encoding: 'utf-8' })
    );
  }
});

// Compile the sprite
spriter.compile((error, result) => {
  if (error) {
    console.error(error);
    return;
  }

  // Ensure the destination directory exists
  fs.mkdirSync(path.dirname(result.symbol.sprite.path), { recursive: true });

  // Write the sprite file
  fs.writeFileSync(result.symbol.sprite.path, result.symbol.sprite.contents);
  console.log('SVG sprite generated successfully!');
});
