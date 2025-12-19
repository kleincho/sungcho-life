import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { FiSun, FiMoon } from 'react-icons/fi';
import Footer from './Footer';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Bio', href: '/bio' },
  { label: 'Writing', href: '/writing' },
  { label: 'Projects', href: '/projects' },
  { label: 'Miscellaneous', href: '/miscellaneous' },
];

export default function Layout({ children }) {
  const [dark, setDark] = useState(false);
  const router = useRouter();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <>
      <div className="min-h-screen font-sans flex flex-col">
        <header className="flex justify-end gap-2 p-4 border-b sticky top-0 bg-[#F6F4EC] dark:bg-[#0f0f0f] z-50">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <span className={`
                px-4 py-2 border rounded-md transition
                ${router.pathname === item.href ? 'underline font-bold' : ''}
                hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black
                shadow-[0_1px_3px_rgba(0,0,0,0.1)]
              `}>
                {item.label}
              </span>
            </Link>
          ))}
          <button
            onClick={() => setDark(!dark)}
            className="ml-4 text-xl text-gray-500 hover:text-black dark:hover:text-white"
            aria-label="Toggle Dark Mode"
          >
            {dark ? <FiSun /> : <FiMoon />}
          </button>
        </header>
        <main className="flex-grow p-6 max-w-3xl mx-auto">{children}</main>
        <Footer />
      </div>
    </>
  )
}
