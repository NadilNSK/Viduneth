const fs = require('fs');

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  content = content.replace(/onsubmit=\"[^\"]*\"/g, 'onSubmit={(e) => e.preventDefault()}');
  content = content.replace(/required=\"\"/g, 'required');
  content = content.replace(/disabled=\"\"/g, 'disabled');
  content = content.replace(/selected=\"\"/g, 'defaultValue=\"\"');
  
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Fixed', filePath);
  }
}

fixFile('src/pages/Registration.tsx');
fixFile('src/pages/SignIn.tsx');
