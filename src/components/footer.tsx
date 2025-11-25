import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 font-serif text-white">Purebrook Kitchens</h3>
            <p className="text-white/80 mb-4 leading-relaxed">
              Premium custom cabinetry crafted with exceptional attention to detail.
              Transforming visions into functional, beautiful spaces.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/80 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/process" className="text-white/80 hover:text-primary transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-white/80 hover:text-primary transition-colors">
                  Project Gallery
                </Link>
              </li>
              <li>
                <Link href="/gallery#contact" className="text-white/80 hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+19052269121"
                  className="flex items-center space-x-3 text-white/80 hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span>+1 (905) 226-9121</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@purebrookkitchens.com"
                  className="flex items-center space-x-3 text-white/80 hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span>info@purebrookkitchens.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-center space-x-3 text-white/80">
                  <MapPin className="w-5 h-5 flex-shrink-0" />
                  <span>Greater Toronto Area</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Purebrook Kitchens. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
