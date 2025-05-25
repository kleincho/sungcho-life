import { useEffect } from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="border-t mt-16 py-12">
      <div className="max-w-3xl mx-auto px-6">
        {/* Newsletter Section */}
        <div className="text-center mb-12">
          <h3 className="text-xl font-bold mb-4">Stay in the loop</h3>
          <iframe 
            src="https://sungcho.substack.com/embed"
            width="100%"
            height="320"
            style={{ border: '1px solid #EEE', background: 'white' }}
            frameBorder="0"
            scrolling="no"
          />
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8">
          <a 
            href="https://github.com/kleincho" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:opacity-75 transition-opacity"
          >
            <FiGithub size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/sungyuncho0912/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:opacity-75 transition-opacity"
          >
            <FiLinkedin size={24} />
          </a>
        </div>

        {/* Contact Info */}
        <div className="text-center text-sm text-gray-500">
          <a 
            href="mailto:sungcho9@wharton.upenn.edu"
            className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
          >
            sungcho9@wharton.upenn.edu
          </a>
        </div>
      </div>
    </footer>
  );
} 