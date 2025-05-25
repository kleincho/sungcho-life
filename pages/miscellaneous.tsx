import Layout from '../components/Layout';

export default function Miscellaneous() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Miscellaneous</h1>
      <ul className="list-disc ml-6 space-y-2 mb-10">
        <li><strong>Clarity &gt; Cleverness</strong> – I prioritize clarity of thought over complexity.</li>
        <li><strong>Execution defines belief</strong> – What you build is what you believe.</li>
        <li><strong>Compound conviction</strong> – I trust deep iteration over time more than sudden genius.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">Interests</h2>
      <ul className="list-disc ml-6 space-y-1 mb-10">
        <li>Philosophy of technology</li>
        <li>Embedded systems and robotics</li>
        <li>Long-term thinking and founder mindset</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">Quotes</h2>
      <ul className="list-disc ml-6 space-y-1">
        <li>"Morning brings back the heroic ages" - Henry David Thoreau, <em>Walden</em></li>
      </ul>
    </Layout>
  );
}
