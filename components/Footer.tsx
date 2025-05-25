import { useEffect } from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

export default function Footer() {
  useEffect(() => {
    // Load Substack widget script
    const script = document.createElement('script');
    script.src = 'https://substackapi.com/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <footer className="border-t mt-16 py-12">
      <div className="max-w-3xl mx-auto px-6">
        {/* Newsletter Section */}
        <div className="text-center mb-12">
          <h3 className="text-xl font-bold mb-4">Stay in the loop</h3>
          <div 
            className="substack-widget"
            data-substack-url="sungcho.substack.com"
            data-placeholder="Enter your email"
            data-button-text="Subscribe"
            data-substack-embed="true"
            data-substack-domain="sungcho.substack.com"
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