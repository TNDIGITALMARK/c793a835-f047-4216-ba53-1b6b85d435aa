import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-accent text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company Info */}
          <div className="space-y-3">
            <h3 className="text-2xl font-bold font-serif text-white mb-4">Purebrook Kitchens</h3>
            <p className="text-white/90 leading-relaxed text-base">
              Premium custom cabinetry crafted with exceptional attention to detail.
              Transforming visions into functional, beautiful spaces.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/90 hover:text-primary transition-colors duration-200 inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/process" className="text-white/90 hover:text-primary transition-colors duration-200 inline-block">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-white/90 hover:text-primary transition-colors duration-200 inline-block">
                  Project Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/90 hover:text-primary transition-colors duration-200 inline-block">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+19052269121"
                  className="flex items-center space-x-3 text-white/90 hover:text-primary transition-colors duration-200 group"
                >
                  <Phone className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>+1 (905) 226-9121</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@purebrookkitchens.com"
                  className="flex items-center space-x-3 text-white/90 hover:text-primary transition-colors duration-200 group"
                >
                  <Mail className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>info@purebrookkitchens.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-center space-x-3 text-white/90">
                  <MapPin className="w-5 h-5 flex-shrink-0" />
                  <span>Greater Toronto Area</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center">
          <p className="text-white/70 text-sm">&copy; {new Date().getFullYear()} Purebrook Kitchens. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
