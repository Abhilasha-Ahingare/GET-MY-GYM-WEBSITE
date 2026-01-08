"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  scrollY: number;
}

export function Navigation({ scrollY }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50
          ? "bg-background/95 backdrop-blur-md border-b border-neon/20 shadow-lg shadow-neon/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-16">
          <div className="flex items-center min-w-0">
            <Link
              href="/"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <img
                src="/logo1.png"
                alt="Get Mygym"
                className="h-12 w-12 sm:h-14 sm:w-14 rounded-lg object-cover"
              />
              <span className="text-base sm:text-lg md:text-xl font-bold hover:text-purple-300/85 text-white/85 hidden sm:inline whitespace-nowrap">
                Get My GYM
              </span>
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-4 xl:gap-8">
            <Link
              href="/"
              className="text-gray-300 hover:text-neon text-sm xl:text-base border-b-2 border-transparent hover:border-white transition-all duration-300 hover:translate-x-1"
            >
              Home
            </Link>
            <Link
              href="/pricing"
              className="text-gray-300 hover:text-neon text-sm xl:text-base border-b-2 border-transparent hover:border-white transition-all duration-300 hover:translate-x-1"
            >
              Pricing
            </Link>
            <Link
              href="/about"
              className="text-gray-300 hover:text-neon text-sm xl:text-base border-b-2 border-transparent hover:border-white transition-all duration-300 hover:translate-x-1"
            >
              About
            </Link>
            <Link
              href="/blog"
              className="text-gray-300 hover:text-neon text-sm xl:text-base border-b-2 border-transparent hover:border-white transition-all duration-300 hover:translate-x-1"
            >
              Blog
            </Link>
            <Link
              href="/"
              className="text-gray-300 hover:text-neon text-sm xl:text-base border-b-2 border-transparent hover:border-white transition-all duration-300 hover:translate-x-1"
            >
              Features
            </Link>
            <Link
              href="/"
              className="text-gray-300 hover:text-neon text-sm xl:text-base border-b-2 border-transparent hover:border-white transition-all duration-300 hover:translate-x-1"
            >
              Contact
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-2 xl:gap-3">
            <Link href="http://localhost:5173/login">
              <Button
                variant="outline"
                className="border-neon/50 text-neon hover:bg-neon/10 bg-transparent text-sm xl:text-base px-4 xl:px-6 py-2"
              >
                Login
              </Button>
            </Link>
            <Link href="/book-demo">
              <Button className="bg-gradient-to-r from-neon to-neon-light hover:from-neon-dark hover:to-neon text-black text-sm xl:text-base px-4 xl:px-6 py-2">
                Book Demo
              </Button>
            </Link>
          </div>

          <button
            className="lg:hidden p-2 hover:bg-neon/10 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 space-y-2 border-t border-neon/10">
            <Link
              href="/"
              className="block text-gray-300 hover:text-neon py-2 px-2 rounded hover:bg-neon/5 transition-colors text-sm"
            >
              Home
            </Link>
            <Link
              href="/pricing"
              className="block text-gray-300 hover:text-neon py-2 px-2 rounded hover:bg-neon/5 transition-colors text-sm"
            >
              Pricing
            </Link>
            <Link
              href="/about"
              className="block text-gray-300 hover:text-neon py-2 px-2 rounded hover:bg-neon/5 transition-colors text-sm"
            >
              About
            </Link>
            <Link
              href="/blog"
              className="block text-gray-300 hover:text-neon py-2 px-2 rounded hover:bg-neon/5 transition-colors text-sm"
            >
              Blog
            </Link>
            <Link
              href="/"
              className="block text-gray-300 hover:text-neon py-2 px-2 rounded hover:bg-neon/5 transition-colors text-sm"
            >
              Features
            </Link>
            <Link
              href="/"
              className="block text-gray-300 hover:text-neon py-2 px-2 rounded hover:bg-neon/5 transition-colors text-sm"
            >
              Contact
            </Link>
            <div className="flex flex-col gap-2 pt-3 border-t border-neon/10">
              <Button
                variant="outline"
                className="border-neon/50 text-neon hover:bg-neon/10 w-full bg-transparent text-sm"
              >
                <a href="/login">Login</a>
              </Button>
              <Button className="bg-gradient-to-r from-neon to-neon-light hover:from-neon-dark hover:to-neon text-black w-full text-sm">
                <a href="/book-demo">Book Demo</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
