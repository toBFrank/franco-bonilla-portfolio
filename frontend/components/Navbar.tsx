"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || pathname === `${href}/`;

  return (
    <nav className="nav-root">
      <div className="nav-inner">
        <Link href="/" className="nav-logo">
          Franco Bonilla
        </Link>

        <ul className="nav-desktop-list">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={isActive(href) ? "nav-link-active" : "nav-link"}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="nav-hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <ul className="nav-mobile-list">
          {links.map(({ href, label }) => (
            <li key={href} className="nav-mobile-item">
              <Link
                href={href}
                className={
                  isActive(href)
                    ? "nav-mobile-link-active"
                    : "nav-mobile-link"
                }
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
