import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <>
      <nav className="p-4 border-b flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/bio">Bio</Link>
        <Link href="/writing">Writing</Link>
        <Link href="/projects">Projects</Link>
      </nav>
      <main className="p-6 max-w-3xl mx-auto">{children}</main>
    </>
  );
}
