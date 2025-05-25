import Layout from '../components/Layout';
import { motion } from 'framer-motion';

export default function Year2025() {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold mb-4">2025</h1>
        <div className="text-xl text-gray-600 dark:text-gray-300 mb-8 space-y-2">
          <ul className="list-disc list-inside">
            <li>Completed banking recruiting successfully</li>
            <li>Traveled solo to San Francisco over spring break to reset and rethink</li>
            <li>Defined my next 10-year mission and clarified personal values</li>
            <li>Committed to bold, focused pursuit — no backup plan</li>
            <li>A year of intentional risk and creative momentum</li>
          </ul>
        </div>
        
        <div className="prose dark:prose-invert max-w-none">
          <p>Coming soon...</p>
        </div>
      </motion.div>
    </Layout>
  );
} 