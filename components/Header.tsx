'use client';

import { useTheme } from '@/hooks/useTheme';
import { navLinks } from '@/lib/data';
import Link from 'next/link';

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const { theme, toggleTheme, mounted } = useTheme();

  return (
    <header>
      <nav className="wrap">
        <Link href="/" className="brand">
          <img src="/logo.png" alt="moneyfinacc logo" style={{ height: '40px', width: 'auto' }} />
        </Link>

        <div className="navlinks">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={activeSection === link.href.slice(1) ? 'active' : ''}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="navbar-right">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            type="button"
          >
            {mounted && (
              theme === 'dark' ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"></circle>
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path>
                </svg>
              )
            )}
          </button>
          <a href="#trackers" className="btn nav-cta">Browse trackers</a>
        </div>
      </nav>
    </header>
  );
}
