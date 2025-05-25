import Layout from '../components/Layout';
import { motion } from 'framer-motion';

export default function Year2024() {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold mb-4">2024</h1>
        <div className="text-xl text-gray-600 dark:text-gray-300 mb-8 space-y-2">
          <ul className="list-disc list-inside">
            <li>Rushed a frat and faced rejection — which turned into reflection</li>
            <li>Felt disillusioned with finance-only mindset</li>
            <li>Discovered deep interest in tech through a summer internship in tech PE</li>
            <li>Explored AI, semiconductors, and systems through ROI project</li>
            <li>Continued banking recruiting — learned to hold better conversations</li>
          </ul>
        </div>
        
        <div className="prose dark:prose-invert max-w-none">
          <p>Coming soon...</p>
        </div>
      </motion.div>
    </Layout>
  );
} 