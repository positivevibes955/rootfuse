import Link from "next/link";
import { Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dashboard-bg border-t border-dashboard-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Product Column */}
          <div>
            <h3 className="font-semibold font-digital text-dashboard-text mb-4">
              Command Center
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#features"
                  className="text-dashboard-text/70 hover:text-dashboard-text font-mono"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="text-dashboard-text/70 hover:text-dashboard-text font-mono"
                >
                  Command Tiers
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="text-dashboard-text/70 hover:text-dashboard-text font-mono"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-dashboard-text/70 hover:text-dashboard-text font-mono"
                >
                  API
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold font-digital text-dashboard-text mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-dashboard-text/70 hover:text-dashboard-text font-mono"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-dashboard-text/70 hover:text-dashboard-text font-mono"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-dashboard-text/70 hover:text-dashboard-text font-mono"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-dashboard-text/70 hover:text-dashboard-text font-mono"
                >
                  Press
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-semibold font-digital text-dashboard-text mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-dashboard-text/70 hover:text-dashboard-text font-mono"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-dashboard-text/70 hover:text-dashboard-text font-mono"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-dashboard-text/70 hover:text-dashboard-text font-mono"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-dashboard-text/70 hover:text-dashboard-text font-mono"
                >
                  Status
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="font-semibold font-digital text-dashboard-text mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-dashboard-text/70 hover:text-dashboard-text font-mono"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-dashboard-text/70 hover:text-dashboard-text font-mono"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-dashboard-text/70 hover:text-dashboard-text font-mono"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-dashboard-text/70 hover:text-dashboard-text font-mono"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-dashboard-border">
          <div className="text-dashboard-text/70 font-mono mb-4 md:mb-0">
            © {currentYear} Rootfuse Command Center. All rights reserved.
          </div>

          <div className="flex space-x-6">
            <a
              href="https://instagram.com/rootfuse"
              className="text-dashboard-text/50 hover:text-dashboard-text"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.928-.438-.928-.928s.438-.928.928-.928.928.438.928.928-.438.928-.928.928zm-3.323 1.418c-1.297 0-2.448.49-3.323 1.297-.928.875-1.418 2.026-1.418 3.323s.49 2.448 1.418 3.244c.875.807 2.026 1.297 3.323 1.297s2.448-.49 3.323-1.297c.928-.796 1.418-1.947 1.418-3.244s-.49-2.448-1.418-3.323c-.875-.807-2.026-1.297-3.323-1.297z" />
              </svg>
            </a>
            <a
              href="https://facebook.com/rootfuse"
              className="text-dashboard-text/50 hover:text-dashboard-text"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/company/rootfuse"
              className="text-dashboard-text/50 hover:text-dashboard-text"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://twitter.com/rootfuse"
              className="text-dashboard-text/50 hover:text-dashboard-text"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">X (Twitter)</span>
              <Twitter className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/rootfuse"
              className="text-dashboard-text/50 hover:text-dashboard-text"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">GitHub</span>
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://youtube.com/@rootfuse"
              className="text-dashboard-text/50 hover:text-dashboard-text"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">YouTube</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
