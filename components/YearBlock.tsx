import { motion } from 'framer-motion';
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
    <Link href={href}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative rounded-xl overflow-hidden group cursor-pointer hover:opacity-90 transition-opacity"
      >
        <div className={`flex flex-col md:flex-row items-center gap-8 py-12 ${isEven ? '' : 'md:flex-row-reverse'}`}>
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
              <Image
                src={imageSrc}
                alt={year}
                fill
                className="object-cover w-full transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white group-hover:underline">{year}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">{subtitle}</p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
} 