import Layout from '../components/Layout';
import YearBlock from '../components/YearBlock';

export default function Bio() {
  const years = [
    {
      year: 'Early Years (2002–2015)',
      subtitle: 'Where curiosity and systems thinking first took root',
      href: '/early-years',
      imageSrc: '/images/early-years.jpg'
    },
    {
      year: '2016–2017',
      subtitle: 'Where books shaped my worldview, and a country changed my trajectory',
      href: '/2016-2017',
      imageSrc: '/images/2016-2017.jpg'
    },
    {
      year: '2018',
      subtitle: 'A year of chaos, friendship, and unexpected emotional growth',
      href: '/2018',
      imageSrc: '/images/2018.jpg'
    },
    {
      year: '2019',
      subtitle: 'Going global. Learning how to lead within chaos',
      href: '/2019',
      imageSrc: '/images/2019.jpg'
    },
    {
      year: '2020',
      subtitle: 'Locked down. Forced inward',
      href: '/2020',
      imageSrc: '/images/2020.jpg'
    },
    {
      year: '2021',
      subtitle: 'Discipline, discomfort, and a brush with rock bottom',
      href: '/2021',
      imageSrc: '/images/2021.jpg'
    },
    {
      year: '2022',
      subtitle: 'Climbing out of the pit — rebuilt by books and responsibility',
      href: '/2022',
      imageSrc: '/images/2022.jpg'
    },
    {
      year: '2023',
      subtitle: 'First steps into the world I always imagined',
      href: '/2023',
      imageSrc: '/images/2023.jpg'
    },
    {
      year: '2024',
      subtitle: 'Breaking illusions and finding deeper truths',
      href: '/2024',
      imageSrc: '/images/2024.jpg'
    },
    {
      year: '2025',
      subtitle: 'The beginning of something big',
      href: '/2025',
      imageSrc: '/images/2025.jpg'
    }
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-24">
        {years.map((year, index) => (
          <YearBlock
            key={year.href}
            {...year}
            isEven={index % 2 === 0}
          />
        ))}
      </div>
    </Layout>
  );
}
