import { useState } from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      window.open(`https://sungcho.substack.com/subscribe?email=${encodeURIComponent(email)}`, '_blank');
      setEmail('');
    }
  };

  return (
    <footer className="border-t mt-16 py-12">
      <div className="max-w-3xl mx-auto px-6">
        {/* Newsletter Section */}
        <div className="text-center mb-12">
          <h3 className="text-xl font-bold mb-4">Stay in the loop</h3>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-grow px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 
                focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white
                bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-black dark:bg-white text-white dark:text-black 
                rounded-md font-medium hover:opacity-90 transition-opacity
                focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
            >
              Subscribe
            </button>
          </form>
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