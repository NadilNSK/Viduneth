import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Viduneth Education Center. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
