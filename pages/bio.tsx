import Layout from '../components/Layout';

export default function Bio() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">My Journey</h1>
      <ul className="space-y-3">
        <li><strong>2020:</strong> Military Service @ ROK-US Combined Forces – Learned clarity under pressure</li>
        <li><strong>2022:</strong> FINDA – Startup internship that first exposed me to fintech and AI</li>
        <li><strong>2023:</strong> BCG Internship – Strategy meets execution under real client pressure</li>
        <li><strong>2024:</strong> Wharton + SEAS – Merged business & engineering to build smarter</li>
        <li><strong>2025:</strong> Hyperclaim – AI startup automating trade compliance for SMBs</li>
      </ul>
    </Layout>
  );
}
