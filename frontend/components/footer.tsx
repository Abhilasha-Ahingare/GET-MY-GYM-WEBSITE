"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gradient-to-b from-gray-900/50 to-gray-900/80 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Link href="/" className="flex items-center">
                <img
                  src="/logo1.png"
                  alt="Get Mygym"
                  className="h-21 w-21 rounded-lg object-cover"
                />
                <span className="text-xl font-bold hover:text-purple-300/85 text-white/85 hidden sm:inline">
                  Get My GYM
                </span>
              </Link>
            </div>
            <p className="text-gray-400 text-sm">
              Powerful gym management software for modern fitness businesses
              across India.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="/features" className="hover:text-neon transition">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-neon transition">
                  Pricing
                </Link>
              </li>
              <li>
                <a href="/security" className="hover:text-neon transition">
                  Security
                </a>
              </li>
              <li>
                <a href="/roadmap" className="hover:text-neon transition">
                  Roadmap
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="/about" className="hover:text-neon transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-neon transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-neon transition">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-neon transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="/privacy" className="hover:text-neon transition">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-neon transition">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-neon transition">
                  Cookies
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-neon transition">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Get Mygym. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-400 hover:text-neon transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-neon transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-neon transition">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-neon transition">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
