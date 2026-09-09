const fs = require('fs');
const png = fs.readFileSync('logo.png');
const base64 = png.toString('base64');
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
  <image href="data:image/png;base64,${base64}" width="100%" height="100%" preserveAspectRatio="xMidYMid meet"/>
</svg>`;
fs.writeFileSync('public/favicon.svg', svg);
fs.writeFileSync('src/assets/vite.svg', svg);
console.log('Done!');
