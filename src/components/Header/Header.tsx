import { NavLink, Link } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

const NAV_LINKS = [
  { to: '/',        label: 'Home'    },
  { to: '/about',   label: 'About'   },
  { to: '/contact', label: 'Contact' },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-bg border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
        <Link
          to="/"
          className="font-heading text-xl font-semibold tracking-tight text-text hover:text-accent transition-colors"
        >
          The Cook Book
        </Link>

        <nav className="flex items-center gap-6">
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                [
                  'text-sm font-medium transition-colors',
                  isActive ? 'text-accent' : 'text-text hover:text-accent',
                ].join(' ')
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}
