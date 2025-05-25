import Layout from '../components/Layout';
import { motion } from 'framer-motion';

export default function Year2023() {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold mb-4">2023</h1>
        <div className="text-xl text-gray-600 dark:text-gray-300 mb-8 space-y-2">
          <ul className="list-disc list-inside">
            <li>Discharged from military and reentered civilian life</li>
            <li>Completed internships that honed execution and ownership skills</li>
            <li>Started at Penn — my life in the U.S. finally begins</li>
            <li>Faced and embraced cultural dissonance and independence</li>
            <li>Built conviction to live and operate globally</li>
          </ul>
        </div>
        
        <div className="prose dark:prose-invert max-w-none">
          <p>Coming soon...</p>
        </div>
      </motion.div>
    </Layout>
  );
} 