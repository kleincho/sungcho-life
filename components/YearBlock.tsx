import Link from 'next/link';
import Image from 'next/image';

interface YearBlockProps {
  year: string;
  subtitle: string;
  href: string;
  imageSrc: string;
  isEven: boolean;
}

export default function YearBlock({ year, subtitle, href, imageSrc, isEven }: YearBlockProps) {
  return (
    <Link href={href} className="block">
      <div className="relative overflow-hidden">
        <div className={`flex flex-col md:flex-row items-center gap-4 py-6 ${isEven ? '' : 'md:flex-row-reverse'}`}>
          <div className="w-full md:w-1/2">
            <div className="relative h-64 md:h-80 overflow-hidden">
              <Image
                src={imageSrc}
                alt={year}
                fill
                className="object-cover w-full"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-3xl font-bold mb-2">{year}</h2>
            <p className="text-lg">{subtitle}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
