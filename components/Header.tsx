"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/how-it-works", label: "How it Work" },
    { href: "/consortium", label: "Consortium of Universities" },
    { href: "/membership", label: "Membership" },
    { href: "/waitlist", label: "Join the Waitlist" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === href;
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-[1800px] mx-auto px-8 lg:px-12 py-8">
        <div className="flex items-center justify-between gap-12">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 hover:opacity-90 transition-opacity">
            <img
              src="/images/banner-3320.png"
              alt="High Table Society"
              className="h-16 md:h-20 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation - Centered and Floating */}
          <nav className="hidden xl:flex flex-1 justify-center">
            <div className="inline-flex items-center gap-6 bg-white/98 backdrop-blur-lg rounded-full shadow-2xl px-8 py-4 border border-gray-100/50">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-8 py-3 md:py-4 text-base font-medium transition-all duration-300 rounded-full whitespace-nowrap ${
                    isActive(link.href)
                      ? "bg-gray-900 text-white shadow-lg"
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Spacer to balance logo on the left */}
          <div className="hidden xl:block flex-shrink-0 w-14 md:w-16"></div>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="xl:hidden mt-4">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-6 py-4 text-sm font-medium transition-all ${
                    isActive(link.href)
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-700 hover:bg-gray-50"
                  } ${index !== navLinks.length - 1 ? 'border-b border-gray-100' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

