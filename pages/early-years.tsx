import Layout from '../components/Layout';
import { motion } from 'framer-motion';

export default function EarlyYears() {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold mb-4">Early Years (2002–2015)</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Where curiosity and systems thinking first took root
        </p>
        
        {/* Content will go here */}
        <div className="prose dark:prose-invert max-w-none">
          <p>Coming soon...</p>
        </div>
      </motion.div>
    </Layout>
  );
} 