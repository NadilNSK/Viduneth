const fs = require('fs');

let content = fs.readFileSync('src/pages/Registration.tsx', 'utf8');

// Update import
if (!content.includes('useNavigate')) {
  content = content.replace(
    /import \{ Link \} from 'react-router-dom';/,
    "import { Link, useNavigate } from 'react-router-dom';"
  );
}

// Add hook and handler
if (!content.includes('const handleRegister')) {
  content = content.replace(
    /const Registration: React\.FC = \(\) => \{/,
    "const Registration: React.FC = () => {\n  const navigate = useNavigate();\n\n  const handleRegister = (e: React.FormEvent) => {\n    e.preventDefault();\n    navigate('/dashboard');\n  };\n"
  );
}

// Update form onSubmit
content = content.replace(
  /onSubmit=\{\(e\) => e.preventDefault\(\)\}/g,
  "onSubmit={handleRegister}"
);

fs.writeFileSync('src/pages/Registration.tsx', content, 'utf8');
console.log('Fixed Registration.tsx routing');
