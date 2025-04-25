
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-netflix-black pt-16 pb-8 border-t border-netflix-gray">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="mb-8 md:mb-0">
            <Link to="/" className="text-netflix-red font-bold text-2xl">CODEFLIX</Link>
            <p className="mt-4 text-gray-400">
              Thanks for scrolling! Let's build something amazing together.
            </p>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/skills" className="text-gray-400 hover:text-white transition-colors">Skills</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://github.com/Eshab01" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/eshab-sachan" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://x.com/Eshab45571646?t=MZ4MGQc4MhF8PkaneZlqlA&s=09" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={24} />
              </a>
              <a href="mailto:eshabsa@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="text-center text-gray-500 text-sm mt-8 pt-8 border-t border-netflix-gray">
          <p>© 2025 Eshab Sachan. Inspired by Netflix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
