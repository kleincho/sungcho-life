import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">Building for something greater.</h1>
      <p className="text-lg mb-6">I’m Sung-Yun Cho, a builder at the intersection of philosophy, technology, and execution.</p>
      <blockquote className="italic text-gray-600 dark:text-gray-400">
        “Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.”
      </blockquote>
    </Layout>
  );
}
