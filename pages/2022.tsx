import Layout from '../components/Layout';
import { motion } from 'framer-motion';

export default function Year2022() {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold mb-4">2022</h1>
        <div className="text-xl text-gray-600 dark:text-gray-300 mb-8 space-y-2">
          <ul className="list-disc list-inside">
            <li>Bounced back from an emotional low point through reading and writing</li>
            <li>Recentered identity and regained inner discipline</li>
            <li>Developed a sturdier emotional and philosophical foundation</li>
            <li>Successfully fulfilled military duties with clarity and conviction</li>
          </ul>
        </div>
        
        <div className="prose dark:prose-invert max-w-none">
          <p>Coming soon...</p>
        </div>
      </motion.div>
    </Layout>
  );
} 