"use client";

import Link from "next/link";
import { Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gradient-to-b from-gray-900 to-black py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <img
                src="/logo1.png"
                alt="Get Mygym"
                className="h-16 w-16 rounded-lg object-cover"
              />
              <div>
                <h2 className="text-xl font-bold text-white font-sans">Get My GYM</h2>
                <p className="text-gray-400 text-xs">Gym Management Software</p>
              </div>
            </div>
            
            <p className="text-gray-300 text-sm mb-6">
              Powerful gym management software for fitness businesses across India.
            </p>
            
            {/* Social Media */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/getmygym"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-gray-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/skycode-media-488b78394/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-gray-300" />
              </a>
              <a
                href="https://twitter.com/getmygym"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 text-gray-300" />
              </a>
              <a
                href="mailto:contact@getmygym.com"
                className="p-2 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 text-gray-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4 font-sans">Product</h3>
            <ul className="space-y-3">
              {["Features", "Pricing", "Security", "Dashboard"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors text-sm font-sans"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold mb-4 font-sans">Company</h3>
            <ul className="space-y-3">
              {["About", "Blog", "Contact", "Careers"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors text-sm font-sans"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4 font-sans">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-400 text-sm font-sans">
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm font-sans">
                <Mail className="w-4 h-4" />
                <span>support@getmygym.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm font-sans">
                <MapPin className="w-4 h-4" />
                <span>Nagpur, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left font-sans">
              © 2025 Get Mygym. All rights reserved.
            </p>
            
            <div className="flex items-center gap-6 text-sm text-gray-400 font-sans">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="/cookies" className="hover:text-white transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}