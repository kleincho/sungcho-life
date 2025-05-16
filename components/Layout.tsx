import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Bio', href: '/bio' },
  { label: 'Writing', href: '/writing' },
  { label: 'Projects', href: '/projects' },
];

export default function Layout({ children }) {
  const [dark, setDark] = useState(false);
  const router = useRouter();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <div className="min-h-screen font-sans">
      <header className="flex justify-end gap-2 p-4 border-b sticky top-0 bg-white dark:bg-[#0f0f0f] z-50">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            <span className={\`
              px-4 py-2 border rounded-md transition
              \${router.pathname === item.href ? 'underline font-bold' : ''}
              hover:bg-white hover:text-black dark:hover:bg-white dark:hover:text-black
            \`}>
              {item.label}
            </span>
          </Link>
        ))}
        <button
          onClick={() => setDark(!dark)}
          className="ml-4 text-xs text-gray-500 hover:text-black dark:hover:text-white"
        >
          Toggle {dark ? 'Light' : 'Dark'} Mode
        </button>
      </header>
      <main className="p-6 max-w-3xl mx-auto">{children}</main>
    </div>
  );
}
