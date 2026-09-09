const fs = require('fs');

let html = fs.readFileSync('stitch_home.html', 'utf8');

// Extract the body content (everything inside <main> or the sections)
const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
let bodyContent = mainMatch ? mainMatch[1] : html;

// Convert HTML to JSX
let jsx = bodyContent
  .replace(/class=/g, 'className=')
  .replace(/for=/g, 'htmlFor=')
  .replace(/stroke-width=/g, 'strokeWidth=')
  .replace(/stroke-linecap=/g, 'strokeLinecap=')
  .replace(/stroke-linejoin=/g, 'strokeLinejoin=')
  .replace(/stroke-dasharray=/g, 'strokeDasharray=')
  .replace(/stroke-opacity=/g, 'strokeOpacity=')
  .replace(/fill-rule=/g, 'fillRule=')
  .replace(/clip-rule=/g, 'clipRule=')
  .replace(/<!--[\s\S]*?-->/g, '') // Remove comments
  .replace(/<br>/g, '<br />')
  .replace(/<hr>/g, '<hr />')
  .replace(/<img([^>]*[^\/])>/g, '<img$1 />')
  .replace(/<input([^>]*[^\/])>/g, '<input$1 />')
  .replace(/readonly=""/g, 'readOnly')
  .replace(/style="([^"]*)"/g, (match, styleString) => {
    // Basic style conversion (very simplified)
    const styleObj = styleString.split(';').filter(Boolean).map(s => {
      const [key, value] = s.split(':');
      if(!key || !value) return '';
      const camelKey = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
      return `${camelKey}: '${value.trim()}'`;
    }).join(', ');
    return `style={{ ${styleObj} }}`;
  });

// Extract header and footer if any
const headerMatch = html.match(/<header[^>]*>([\s\S]*?)<\/header>/i);
let headerJsx = headerMatch ? headerMatch[0].replace(/class=/g, 'className=').replace(/<!--[\s\S]*?-->/g, '').replace(/<img([^>]*[^\/])>/g, '<img$1 />') : '';

const finalComponent = `
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      ${jsx}
    </div>
  );
};

export default Home;
`;

fs.writeFileSync('src/pages/Home.tsx', finalComponent);

if (headerJsx) {
    const navComponent = `
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <>
      ${headerJsx}
    </>
  );
};

export default Navbar;
`;
    fs.writeFileSync('src/components/Navbar.tsx', navComponent);
}

console.log("Transformation complete.");
