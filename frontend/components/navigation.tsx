"use client";

import { useState } from "react";
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
          ? "bg-background/95 backdrop-blur-md border-b border-neon/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img
                src="/logo1.png"
                alt="FitFlow"
                className="h-21 w-21 rounded-lg object-cover"
              />
              <span className="text-xl font-bold text-white hidden sm:inline">
                Get My_GYM
              </span>
            </a>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-gray-300 hover:text-neon border-b-2 border-transparent hover:border-white transition-all duration-300 hover:translate-x-1"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-gray-300 hover:text-neon border-b-2 border-transparent hover:border-white transition-all duration-300 hover:translate-x-1"
            >
              Pricing
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-neon border-b-2 border-transparent hover:border-white transition-all duration-300 hover:translate-x-1"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-neon border-b-2 border-transparent hover:border-white transition-all duration-300 hover:translate-x-1"
            >
              Contact
            </a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="outline"
              className="border-neon/50 text-neon hover:bg-neon/10 bg-transparent"
            >
              Login
            </Button>
            <Button className="bg-gradient-to-r from-neon to-neon-light hover:from-neon-dark hover:to-neon text-black">
              Book Demo
            </Button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <a href="#features" className="block text-gray-300 hover:text-neon">
              Features
            </a>
            <a href="#pricing" className="block text-gray-300 hover:text-neon">
              Pricing
            </a>
            <a href="#about" className="block text-gray-300 hover:text-neon">
              About
            </a>
            <a href="#contact" className="block text-gray-300 hover:text-neon">
              Contact
            </a>
            <div className="flex flex-col gap-2 pt-2">
              <Button
                variant="outline"
                className="border-neon/50 text-neon hover:bg-neon/10 w-full bg-transparent"
              >
                Try Free
              </Button>
              <Button className="bg-gradient-to-r from-neon to-neon-light hover:from-neon-dark hover:to-neon text-black w-full">
                Book Demo
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
