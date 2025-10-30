import Link from 'next/link';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#3e2723] to-[#1b1a17] text-gray-300 pt-5">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* ☕ Brand Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">BeanCraft Coffee Co.</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Brewing passion, one cup at a time.  
              Discover rich flavors, crafted with care from bean to cup.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Karachi, Pakistan</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <a
                  href="tel:+923001234567"
                  className="hover:text-white transition"
                >
                  +92 310 2648581
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a
                  href="mailto:hello@beancraft.com"
                  className="hover:text-white transition"
                >
                  asifkhadimalph@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* 🔗 Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-white transition">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* ☕ Our Story / Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog" className="hover:text-white transition">
                  Coffee Blog
                </Link>
              </li>
              <li>
                <Link href="/brewing-tips" className="hover:text-white transition">
                  Brewing Tips
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-white transition">
                  Store Locations
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-white transition">
                  Shop Coffee
                </Link>
              </li>
            </ul>
          </div>

          {/* ⚖️ Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/refunds" className="hover:text-white transition">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800"></div>

      {/* Bottom Footer */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} BeanCraft Coffee Co.|Designed by Asif Khadim
          </p>

          {/* ☕ Social Links */}
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/AloneAsif"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <Github size={20} />
            </Link>
            {/* <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <Instagram size={20} />
            </Link>
           */}
            <Link
              href="https://www.linkedin.com/in/asif-khadim-12ba332a4/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <Linkedin size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
