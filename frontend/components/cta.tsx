"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { useRouter } from "next/navigation";

export function CTA() {
  const router = useRouter();
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-72 h-72 bg-neon/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-neon-light/10 rounded-full blur-3xl" />
        </div>

        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white text-balance">
            Ready to Transform Your Gym Business..?
          </h2>
          <p className="text-lg  text-gray-400 mb-12 max-w-2xl mx-auto text-balance">
            Join hundreds of gyms already using Get Mygym to streamline
            operations and grow their business. Book right now for demo
          </p>
          {/* /book-demo */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              className="group bg-gradient-to-r from-neon to-neon-light hover:from-neon-dark hover:to-neon text-black font-semibold px-8 py-6 text-lg w-full sm:w-auto"
              onClick={() => router.push("http://localhost:5173/login")}
            >
              Login
              <ArrowRight
                className="ml-2 group-hover:translate-x-1 transition"
                size={20}
              />
            </Button>
            <Button
              variant="outline"
              className="border-neon/50 text-neon hover:bg-neon/10 font-semibold px-8 py-6 text-lg w-full sm:w-auto bg-transparent"
              onClick={() => router.push("/book-demo")}
            >
              <Phone size={20} className="mr-2" />
              Book Demo
            </Button>
          </div>

          {/* Contact methods */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-sm">
            <div className="flex items-center gap-3 text-gray-300">
              <Mail size={20} className="text-neon" />
              <span>support@fitflow.com</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-gray-700" />
            <div className="flex items-center gap-3 text-gray-300">
              <Phone size={20} className="text-neon" />
              <span>1-800-FITFLOW</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
