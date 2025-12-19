import Link from 'next/link';
import { ReactNode } from 'react';
import Footer from './Footer';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Bio', href: '/bio' },
  { label: 'Writing', href: '/writing' },
  { label: 'Projects', href: '/projects' },
  { label: 'Misc', href: '/miscellaneous' },
];

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="site-title">
          <Link href="/">Sung Cho</Link>
        </div>
        <nav className="site-nav">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </header>
      <main className="site-main">{children}</main>
      <Footer />
    </div>
  );
}
