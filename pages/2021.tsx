import Layout from '../components/Layout';
import { motion } from 'framer-motion';

export default function Year2021() {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold mb-4">2021</h1>
        <div className="text-xl text-gray-600 dark:text-gray-300 mb-8 space-y-2">
          <ul className="list-disc list-inside">
            <li>Rejoined FINDA for a second internship — learned how startups grow</li>
            <li>Witnessed the speed and grit of fast-moving teams</li>
            <li>Joined the military — a world of obedience, routine, and limits</li>
            <li>Experienced deep internal friction: doing what I didn't want to</li>
            <li>Faced existential lows — and started to ask deeper life questions</li>
          </ul>
        </div>
        
        <div className="prose dark:prose-invert max-w-none">
          <p>Coming soon...</p>
        </div>
      </motion.div>
    </Layout>
  );
} 