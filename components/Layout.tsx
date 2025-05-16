import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Layout({ children }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <div className="flex min-h-screen text-sm">
      <aside className="w-56 p-6 fixed left-0 top-0 h-full border-r hidden md:flex flex-col justify-between">
        <nav className="flex flex-col gap-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/bio">Bio</Link>
          <Link href="/writing">Writing</Link>
          <Link href="/projects">Projects</Link>
        </nav>
        <button onClick={() => setDark(!dark)} className="text-xs text-gray-500 hover:text-black dark:hover:text-white">
          Toggle {dark ? 'Light' : 'Dark'} Mode
        </button>
      </aside>
      <main className="ml-0 md:ml-56 w-full p-6 max-w-3xl mx-auto">{children}</main>
    </div>
  );
}
