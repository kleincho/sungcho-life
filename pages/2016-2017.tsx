import Layout from '../components/Layout';
import { motion } from 'framer-motion';

export default function Years2016_2017() {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold mb-4">2016–2017</h1>
        <div className="text-xl text-gray-600 dark:text-gray-300 mb-8 space-y-2">
          <ul className="list-disc list-inside">
            <li>First trip to the U.S., decided to pursue finance and global education</li>
            <li>Admitted to KMLA (민사고) and prepared for boarding school life</li>
            <li>Built early worldview through books and reflection</li>
            <li>Developed curiosity about systems, society, and economics</li>
            <li>The beginning of long-term ambition beyond Korea</li>
          </ul>
        </div>
        <div className="prose dark:prose-invert max-w-none">
          <p>Coming soon...</p>
        </div>
      </motion.div>
    </Layout>
  );
} 