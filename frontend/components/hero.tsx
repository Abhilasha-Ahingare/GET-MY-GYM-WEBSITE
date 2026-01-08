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
      className="relative min-h-screen flex items-center justify-center pt-12 sm:pt-16 md:pt-20 px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8 overflow-hidden bg-cover bg-no-repeat bg-fixed"
      style={{
        backgroundImage: 'url("/hero bg.jpg")',
        backgroundAttachment: "fixed",
        backgroundPosition: "left center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/70 z-0" />
      <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 text-center relative z-10">
        <div className="inline-flex items-center gap-1 sm:gap-2 mb-3 sm:mb-6 px-2 sm:px-4 py-1 sm:py-2 rounded-full bg-gradient-to-r from-neon/20 to-neon-light/20 border border-neon/50 backdrop-blur-sm animate-fadeInDown">
          <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-neon" />
          </span>
          <span className="text-xs sm:text-sm text-neon font-medium">
            Introducing Get_Mygym
          </span>
        </div>

        <h1 className="text-2xl xs:text-2.5xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-2 sm:mb-4 md:mb-6 text-balance leading-tight">
          <span className="inline-block bg-gradient-to-r from-white via-neon to-neon-light bg-clip-text text-transparent animate-fadeInUp">
            Powerful Gym Management
          </span>
          <span className="block text-white mt-1 sm:mt-2 animate-fadeInUp animation-delay-300">
            Made Simple
          </span>
        </h1>

        <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-300 mb-4 sm:mb-6 md:mb-8 text-balance max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto animate-fadeInUp animation-delay-500 leading-relaxed">
          Streamline member management, automate renewals, track attendance, and
          gain deep insights—all from a unified, intuitive platform built for
          modern fitness businesses.
        </p>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center items-stretch sm:items-center mb-6 sm:mb-8 md:mb-12 animate-fadeInUp animation-delay-700">
          <Button
            className="group bg-gradient-to-r from-neon to-neon-light hover:from-neon-dark hover:to-neon text-black font-semibold px-3 sm:px-5 md:px-8 py-1.5 sm:py-2.5 md:py-6 text-[0.65rem] sm:text-xs md:text-sm lg:text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-neon/50 rounded"
            onClick={() => router.push("/book-demo")}
          >
            Book Demo
            <ArrowRight
              className="ml-1 sm:ml-2 group-hover:translate-x-1 transition"
              size={14}
            />
          </Button>
          <Button
            variant="outline"
            className="border-neon/50 text-neon hover:bg-neon/10 font-semibold px-3 sm:px-5 md:px-8 py-1.5 sm:py-2.5 md:py-6 text-[0.65rem] sm:text-xs md:text-sm lg:text-lg bg-transparent transition-all duration-300 hover:scale-105 hover:border-neon rounded"
          >
            <Play size={14} className="mr-1 sm:mr-2" />
            Watch Demo
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm md:text-sm text-gray-500 animate-fadeInUp animation-delay-900">
          <div className="flex items-center gap-2 group hover:text-neon transition duration-300">
            <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-neon/20 rounded-full flex items-center justify-center text-neon text-xs font-bold group-hover:bg-neon/40 transition">
              ✓
            </div>
            <span className="whitespace-nowrap">500+ Gyms Trust Us</span>
          </div>
          <div className="hidden sm:block w-px h-3 sm:h-4 bg-gray-700" />
          <div className="flex items-center gap-2 group hover:text-neon-light transition duration-300">
            <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-neon-light/20 rounded-full flex items-center justify-center text-neon-light text-xs font-bold group-hover:bg-neon-light/40 transition">
              ✓
            </div>
            <span className="whitespace-nowrap">99.9% Uptime SLA</span>
          </div>
          <div className="hidden sm:block w-px h-3 sm:h-4 bg-gray-700" />
          <div className="flex items-center gap-2 group hover:text-pink-accent transition duration-300">
            <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-neon-light/20 rounded-full flex items-center justify-center text-neon-light text-xs font-bold group-hover:bg-neon-light/40 transition">
              ✓
            </div>
            <span className="whitespace-nowrap">24/7 Support</span>
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
        @media (min-width: 768px) {
          section {
            background-position: center;
          }
        }
      `}</style>
    </section>
  );
}
