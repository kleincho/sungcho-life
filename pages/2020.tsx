import Layout from '../components/Layout';
import { motion } from 'framer-motion';

export default function Year2020() {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold mb-4">2020</h1>
        <div className="text-xl text-gray-600 dark:text-gray-300 mb-8 space-y-2">
          <ul className="list-disc list-inside">
            <li>Quarantined during COVID, spent time building side projects at home</li>
            <li>College application process became a mirror to self-reflect</li>
            <li>Discovered identity and philosophy while writing admissions essays</li>
            <li>Interned at FINDA for the first time — first exposure to the real world</li>
            <li>A year that blended solitude, ambition, and inward clarity</li>
          </ul>
        </div>
        
        <div className="prose dark:prose-invert max-w-none">
          <p>Coming soon...</p>
        </div>
      </motion.div>
    </Layout>
  );
} 