import Layout from '../components/Layout';
import { motion } from 'framer-motion';

export default function Year2018() {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold mb-4">2018</h1>
        <div className="text-xl text-gray-600 dark:text-gray-300 mb-8 space-y-2">
          <ul className="list-disc list-inside">
            <li>Entered KMLA — emotionally intense dorm life</li>
            <li>Formed deep and lasting friendships</li>
            <li>Navigated conflicts, rules, and late-night conversations</li>
            <li>Learned empathy, patience, and how to stand up for myself</li>
            <li>First time grappling with emotional maturity in a high-pressure setting</li>
          </ul>
        </div>
        
        <div className="prose dark:prose-invert max-w-none">
          <p>Coming soon...</p>
        </div>
      </motion.div>
    </Layout>
  );
} 