const fs = require('fs');
let content = fs.readFileSync('d:/Projects/Viduneth/src/pages/Home.tsx', 'utf8');
const regex = /<span className="font-label-md text-label-md text-primary font-bold flex items-center gap-1">\r?\n\s*Join <span className="material-symbols-outlined text-\[16px\] group-hover:translate-x-1 transition-transform">arrow_forward<\/span>\r?\n<\/span>/g;
content = content.replace(regex, '');
fs.writeFileSync('d:/Projects/Viduneth/src/pages/Home.tsx', content);
console.log("Done");
