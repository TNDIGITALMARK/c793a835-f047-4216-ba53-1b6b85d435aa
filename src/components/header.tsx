'use client';

import Link from 'next/link';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-foreground font-serif">
              Purebrook Kitchens
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/process"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Our Process
            </Link>
            <Link
              href="/gallery"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* Phone CTA */}
          <div className="flex items-center space-x-4">
            <a
              href="tel:+19052269121"
              className="hidden lg:flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="font-medium">+1 (905) 226-9121</span>
            </a>
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
                Book Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
