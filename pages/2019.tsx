import Layout from '../components/Layout';
import { motion } from 'framer-motion';

export default function Year2019() {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold mb-4">2019</h1>
        <div className="text-xl text-gray-600 dark:text-gray-300 mb-8 space-y-2">
          <ul className="list-disc list-inside">
            <li>Competed internationally (IEO, ARML, JA Challenge), traveled abroad 4 times</li>
            <li>Confirmed goal to build a life across borders</li>
            <li>Held leadership roles: Vice Chair of Judiciary Committee, Band Union Lead</li>
            <li>Managed people, resolved conflicts, built trust in institutions</li>
            <li>Realized the weight and responsibility of true leadership</li>
          </ul>
        </div>
        
        <div className="prose dark:prose-invert max-w-none">
          <p>Coming soon...</p>
        </div>
      </motion.div>
    </Layout>
  );
} 