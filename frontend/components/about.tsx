"use client"

import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function About() {
  const values = [
    { title: "Innovation", description: "Constantly evolving to meet modern fitness industry needs" },
    { title: "Reliability", description: "Enterprise-grade infrastructure with 99.9% uptime" },
    { title: "Support", description: "24/7 dedicated support team ready to help" },
    { title: "Security", description: "Bank-level encryption and data protection" },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-40 right-20 w-80 h-80 bg-neon/5 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-neon-light/5 rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-neon/10 border border-neon/30">
              <span className="text-sm text-neon font-medium">About FitFlow</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">
              Built by Fitness
              <span className="block bg-gradient-to-r from-neon via-neon-light to-pink-accent bg-clip-text text-transparent">
                Professionals For You
              </span>
            </h2>

            <p className="text-lg text-gray-400 mb-6">
              FitFlow was founded by experienced gym owners who understood the pain points of managing fitness
              businesses. We've built a platform that automates the complex, so you can focus on what matters most—your
              members.
            </p>

            <p className="text-lg text-gray-400 mb-8">
              With over 500 gyms trusting us and millions of members managed through our platform, we're the industry
              leader in gym management software.
            </p>

            <Button className="bg-gradient-to-r from-neon to-neon-light hover:from-neon-dark hover:to-neon text-black font-semibold px-8 py-6">
              Learn Our Story
            </Button>
          </div>

          {/* Right values grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gray-900/40 border border-neon/20 hover:border-neon/50 transition group hover:bg-gray-900/60"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle2
                    className="text-neon group-hover:text-neon-light transition flex-shrink-0 mt-1"
                    size={24}
                  />
                  <div>
                    <h3 className="font-semibold text-white mb-2 group-hover:text-neon-light transition">
                      {value.title}
                    </h3>
                    <p className="text-sm text-gray-400">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
