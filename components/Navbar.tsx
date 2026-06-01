"use client";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/patents", label: "Patents" },
  { href: "/skills", label: "Skills" },
  { href: "/education", label: "Education" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-navy-800 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg tracking-wide">
          <span className="text-gold-400">Kazi</span> Hassan
          <span className="text-gold-400 ml-1 text-sm font-normal">Ph.D.</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="hover:text-gold-400 transition-colors duration-200"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden bg-navy-700 px-6 pb-4 flex flex-col gap-3 text-sm font-medium">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="block py-1 hover:text-gold-400 transition-colors"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
