import Link from 'next/link';
import Layout from '../components/Layout';

const years = [
  {
    label: 'Early Years (2002-2015)',
    note: 'Curiosity and systems thinking started here.',
    href: '/early-years',
  },
  {
    label: '2016-2017',
    note: 'Books shaped my worldview; a country changed my trajectory.',
    href: '/2016-2017',
  },
  {
    label: '2018',
    note: 'Chaos, friendship, and unexpected emotional growth.',
    href: '/2018',
  },
  {
    label: '2019',
    note: 'Going global and learning to lead inside chaos.',
    href: '/2019',
  },
  {
    label: '2020',
    note: 'Locked down and forced inward.',
    href: '/2020',
  },
  {
    label: '2021',
    note: 'Discipline, discomfort, and a brush with rock bottom.',
    href: '/2021',
  },
  {
    label: '2022',
    note: 'Climbing out through books and responsibility.',
    href: '/2022',
  },
  {
    label: '2023',
    note: 'First steps into the world I imagined.',
    href: '/2023',
  },
  {
    label: '2024',
    note: 'Breaking illusions and finding deeper truths.',
    href: '/2024',
  },
  {
    label: '2025',
    note: 'The beginning of something big.',
    href: '/2025',
  },
];

export default function Bio() {
  return (
    <Layout>
      <h1>Bio Timeline</h1>
      <p>A straight line through the years that shaped me. Each link opens a short snapshot; the fuller write-ups will live here over time.</p>
      <ul className="year-list">
        {years.map((year) => (
          <li key={year.href}>
            <Link href={year.href}>{year.label}</Link>
            {year.note ? ` — ${year.note}` : ''}
          </li>
        ))}
      </ul>
    </Layout>
  );
}
