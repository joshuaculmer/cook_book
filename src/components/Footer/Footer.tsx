import { Link } from 'react-router-dom';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
        <p>© {year} The Cook Book. All rights reserved.</p>
        <nav className="flex gap-6">
          <Link to="/privacy" className="hover:text-accent transition-colors">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-accent transition-colors">
            Terms of Service
          </Link>
          <Link to="/contact" className="hover:text-accent transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
