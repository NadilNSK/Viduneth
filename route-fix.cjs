const fs = require('fs');

// Fix Registration.tsx links
let regContent = fs.readFileSync('src/pages/Registration.tsx', 'utf8');
if (!regContent.includes('import { Link }')) {
  regContent = regContent.replace(/import React from 'react';/, "import React from 'react';\nimport { Link } from 'react-router-dom';");
}
regContent = regContent.replace(
  /<a className="text-brand-600 font-medium hover:underline" href="#">Sign in<\/a>/g,
  '<Link to="/sign-in" className="text-brand-600 font-medium hover:underline">Sign in</Link>'
);
fs.writeFileSync('src/pages/Registration.tsx', regContent, 'utf8');
console.log('Fixed Registration.tsx');

// Fix SignIn.tsx
let signInContent = fs.readFileSync('src/pages/SignIn.tsx', 'utf8');
if (!signInContent.includes('import { Link }')) {
  signInContent = signInContent.replace(/import React from 'react';/, "import React from 'react';\nimport { Link } from 'react-router-dom';");
}
// Replace the link we added with a more prominent button if requested, or ensure it's there
signInContent = signInContent.replace(
  /<p className="text-sm text-center text-slate-500 mb-6 leading-relaxed">[\s\S]*?<\/p>/g,
  `<div className="mt-4 mb-6 text-center">
        <p className="text-sm text-slate-500 mb-3">New here?</p>
        <Link to="/register" className="inline-block w-full py-3 px-6 rounded-full bg-sky-50 hover:bg-sky-100 border border-sky-200 text-sky-700 font-semibold text-[15px] transition-all duration-200 text-center">
          Create an account
        </Link>
      </div>`
);
// Also fallback if it's the original text
signInContent = signInContent.replace(
  /<p className="text-xs text-center text-slate-500 mb-6 leading-relaxed">[\s\S]*?<\/p>/g,
  `<div className="mt-4 mb-6 text-center">
        <p className="text-sm text-slate-500 mb-3">New here?</p>
        <Link to="/register" className="inline-block w-full py-3 px-6 rounded-full bg-sky-50 hover:bg-sky-100 border border-sky-200 text-sky-700 font-semibold text-[15px] transition-all duration-200 text-center">
          Create an account
        </Link>
      </div>`
);
fs.writeFileSync('src/pages/SignIn.tsx', signInContent, 'utf8');
console.log('Fixed SignIn.tsx');
