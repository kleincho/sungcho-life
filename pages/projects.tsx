import Layout from '../components/Layout';

export default function Projects() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      <ul className="space-y-3">
        <li><strong>Hyperclaim</strong> – AI-based duty drawback automation tool for SMBs (2025, Co-founder)</li>
        <li><strong>ESE Hack: 7-segment Timer</strong> – Built capacitor-decay timer on embedded hardware</li>
      </ul>
    </Layout>
  );
}
