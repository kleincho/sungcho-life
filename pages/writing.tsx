// pages/writing.tsx
import Layout from '../components/Layout';
import Link from 'next/link';

export default function Writing() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Writing</h1>
      <ul className="list-disc ml-6">
        <li>
          <Link href="/posts/why-i-build">
            Why I Build
          </Link>
        </li>
      </ul>
    </Layout>
  );
}
