import Link from 'next/link';
import Layout from '../components/Layout';

export default function Writing() {
  return (
    <Layout>
      <h1>Writing</h1>
      <ul>
        <li>
          <Link href="/posts/why-i-build">Why I Build</Link>
        </li>
      </ul>
    </Layout>
  );
}
