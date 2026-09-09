const fs = require('fs');

function fixSignUpLink(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  if (!content.includes('import { Link }')) {
    content = content.replace(/import React(?:,[^;]+)? from 'react';/, "import React from 'react';\nimport { Link } from 'react-router-dom';");
  }
  content = content.replace(
    /<a ([^>]*)data-path=\"sign-up\" href=\"#\">Sign Up<\/a>/g,
    '<Link $1data-path="sign-up" to="/sign-in">Sign Up</Link>'
  );
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Fixed', filePath);
}

fixSignUpLink('src/components/Navbar.tsx');
fixSignUpLink('src/pages/Home.tsx');
