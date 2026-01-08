"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useRouter } from "next/navigation";

export function Hero() {
  const router = useRouter();

  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const { width, height, top, left } =
        containerRef.current.getBoundingClientRect();
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;

      setMousePos({ x, y });
      const angle = Math.atan2(y - 0.5, x - 0.5) * (180 / Math.PI);
      containerRef.current.style.setProperty("--angle", `${angle}deg`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-3 sm:px-4 md:px-6 lg:px-8 overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: 'url("/hero bg.jpg")',
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/70 z-0" />
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-neon/20 to-neon-light/20 border border-neon/50 backdrop-blur-sm animate-fadeInDown">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-neon" />
          </span>
          <span className="text-sm text-neon font-medium">
            Introducing Get_Mygym
          </span>
        </div>

        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-balance">
          <span className="inline-block bg-gradient-to-r from-white via-neon to-neon-light bg-clip-text text-transparent animate-fadeInUp">
            Powerful Gym Management
          </span>
          <span className="block text-white mt-2 animate-fadeInUp animation-delay-300">
            Made Simple
          </span>
        </h1>

        <p className="text-base xs:text-lg sm:text-xl md:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 text-balance max-w-2xl sm:max-w-3xl lg:max-w-7xl mx-auto animate-fadeInUp animation-delay-500 leading-relaxed">
          Streamline member management, automate renewals, track attendance, and
          gain deep insights—all from a unified, intuitive platform built for
          modern fitness businesses.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 animate-fadeInUp animation-delay-700 w-full sm:w-auto">
          <Button
            className="group bg-gradient-to-r from-neon to-neon-light hover:from-neon-dark hover:to-neon text-black font-semibold px-6 sm:px-8 py-3 sm:py-6 text-sm sm:text-lg w-full sm:w-auto transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-neon/50"
            onClick={() => router.push("/book-demo")}
          >
            Book Demo
            <ArrowRight
              className="ml-2 group-hover:translate-x-1 transition"
              size={20}
            />
          </Button>
          <Button
            variant="outline"
            className="border-neon/50 text-neon hover:bg-neon/10 font-semibold px-6 sm:px-8 py-3 sm:py-6 text-sm sm:text-lg w-full sm:w-auto bg-transparent transition-all duration-300 hover:scale-105 hover:border-neon"
          >
            <Play size={20} className="mr-2" />
            Watch Demo
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500 animate-fadeInUp animation-delay-900">
          <div className="flex items-center gap-2 group hover:text-neon transition duration-300">
            <div className="w-8 h-8 bg-neon/20 rounded-full flex items-center justify-center text-neon text-xs font-bold group-hover:bg-neon/40 transition">
              ✓
            </div>
            <span>500+ Gyms Trust Us</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-gray-700" />
          <div className="flex items-center gap-2 group hover:text-neon-light transition duration-300">
            <div className="w-8 h-8 bg-neon-light/20 rounded-full flex items-center justify-center text-neon-light text-xs font-bold group-hover:bg-neon-light/40 transition">
              ✓
            </div>
            <span>99.9% Uptime SLA</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-gray-700" />
          <div className="flex items-center gap-2 group hover:text-pink-accent transition duration-300">
            <div className="w-8 h-8 bg-neon-light/20 rounded-full flex items-center justify-center text-neon-light text-xs font-bold group-hover:bg-neon-light/40 transition">
              ✓
            </div>
            <span>24/7 Support</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(20px);
          }
        }
        @keyframes slideDown {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes slideUp {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes fadeInDown {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animate-fadeInDown {
          animation: fadeInDown 0.8s ease-out forwards;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        .animation-delay-700 {
          animation-delay: 0.7s;
        }
        .animation-delay-900 {
          animation-delay: 0.9s;
        }
        .animate-slideDown {
          animation: slideDown 1s ease-out forwards;
        }
        .animate-slideUp {
          animation: slideUp 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
