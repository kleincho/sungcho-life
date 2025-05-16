import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">What I Value</h1>
      <ul className="list-disc ml-6 space-y-2">
        <li><strong>Clarity > Cleverness</strong> – I prioritize clarity of thought over complexity.</li>
        <li><strong>Execution defines belief</strong> – What you build is what you believe.</li>
        <li><strong>Compound conviction</strong> – I trust deep iteration over time more than sudden genius.</li>
      </ul>
      <p className="mt-6">I am still an unfinished founder, but I have deep conviction in the principles I live by.</p>
    </Layout>
  );
}
