"use client"

import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gradient-to-b from-gray-900/50 to-gray-900/80 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-neon to-neon-light rounded-lg" />
              <span className="text-xl font-bold text-white">FitFlow</span>
            </div>
            <p className="text-gray-400 text-sm">Powerful gym management software for modern fitness businesses.</p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-neon transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neon transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neon transition">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neon transition">
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
                <a href="#" className="hover:text-neon transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neon transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neon transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neon transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-neon transition">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neon transition">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neon transition">
                  Cookies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neon transition">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">© 2025 FitFlow. All rights reserved.</p>
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
  )
}
