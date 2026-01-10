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
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out font-sans ${
        scrollY > 50 || mobileMenuOpen
          ? "bg-background/95 backdrop-blur-md border-b border-neon/20 shadow-lg shadow-neon/10"
          : ""
      } ${
        scrollY <= 50 && !mobileMenuOpen
          ? "bg-black/50 md:bg-transparent"
          : "bg-background/95"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          <div className="flex items-center min-w-0">
            <Link
              href="/"
              className="flex items-center gap-2 hover:opacity-80 transition-all duration-300 ease-out group"
            >
              <img
                src="/logo1.png"
                alt="Get Mygym"
                className="h-14 w-14 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-22 lg:w-22 rounded-lg object-cover transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg "
              />
              <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white/85 group-hover:text-purple-300 transition-all duration-300 font-['Poppins'] tracking-tight hidden sm:inline">
                Get My GYM
              </span>
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-4 xl:gap-8">
            {["Home", "Pricing", "About", "Blog", "Features", "Contact"].map(
              (item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                  className="text-gray-300 hover:text-neon text-sm xl:text-base font-medium font-['Inter'] transition-all duration-300 relative group overflow-hidden"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-neon to-neon-light group-hover:w-full transition-all duration-300"></span>
                </Link>
              )
            )}
          </div>

          <div className="hidden lg:flex items-center gap-2 xl:gap-3">
            <Link href="http://localhost:5173/login">
              <Button
                variant="outline"
                className="border-neon/50 text-neon hover:bg-neon/10 hover:border-neon bg-transparent text-sm xl:text-base px-4 xl:px-6 py-2 font-['Inter'] font-medium transition-all duration-300 hover:scale-105"
              >
                Login
              </Button>
            </Link>
            <Link href="/book-demo">
              <Button className="bg-gradient-to-r from-neon to-neon-light hover:from-neon-dark hover:to-neon text-black text-sm xl:text-base px-4 xl:px-6 py-2 font-['Inter'] font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-neon/30">
                Book Demo
              </Button>
            </Link>
          </div>

          <button
            className="lg:hidden p-2 hover:bg-neon/10 rounded-lg transition-all duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X size={28} className="text-neon" />
            ) : (
              <Menu size={28} className="text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 space-y-1 border-t border-neon/10 bg-black/95 backdrop-blur-md animate-slideDown">
            {["Home", "Pricing", "About", "Blog", "Features", "Contact"].map(
              (item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                  className="block text-gray-300 hover:text-neon hover:bg-neon/5 py-3 px-4 rounded-lg transition-all duration-300 font-['Inter'] font-medium group"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-neon/50 group-hover:bg-neon transition-all duration-300"></span>
                    {item}
                  </span>
                </Link>
              )
            )}
            <div className="flex flex-col gap-3 pt-4 mt-4 border-t border-neon/10">
              <Button
                variant="outline"
                className="border-neon/50 text-neon hover:bg-neon/10 hover:border-neon w-full bg-transparent text-sm font-['Inter'] py-3 transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                <a href="/login">Login</a>
              </Button>
              <Button
                className="bg-gradient-to-r from-neon to-neon-light hover:from-neon-dark hover:to-neon text-black w-full text-sm font-['Inter'] font-bold py-3 transition-all duration-300 hover:scale-[1.02]"
                onClick={() => setMobileMenuOpen(false)}
              >
                <a href="/book-demo">Book Demo</a>
              </Button>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out forwards;
        }
      `}</style>
    </nav>
  );
}