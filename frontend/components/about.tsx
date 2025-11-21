"use client"

import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function About() {
  const values = [
    { title: "Innovation", description: "Built by gym owners who understand daily operational challenges and member management pain points" },
    { title: "Reliability", description: "Used by 500+ gyms across India with 99.9% uptime and local server support" },
    { title: "Support", description: "Dedicated Hindi/English support team available from 6 AM to 11 PM daily" },
    { title: "Security", description: "Bank-level encryption with daily automated backups and data protection" },
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
              <span className="text-sm text-neon font-medium">About Get Mygym</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">
              Built by Fitness
              <span className="block bg-gradient-to-r from-neon via-neon-light to-pink-accent bg-clip-text text-transparent">
                Professionals For You
              </span>
            </h2>

            <p className="text-lg text-gray-400 mb-6">
              Get Mygym was born from our own struggles running fitness centers in Mumbai and Delhi. 
              We faced the same issues you do - manual attendance registers, missed payments, member 
              dropout tracking, and chaotic staff management. After trying every available software, 
              we decided to build our own solution specifically for the Indian fitness market.
            </p>

            <p className="text-lg text-gray-400 mb-8">
              Today, we serve 500+ gyms across 45+ cities in India, from local neighborhood fitness 
              centers to multi-location premium gym chains. Our platform processes over 1 million 
              check-ins monthly and manages renewals for 50,000+ active members.
            </p>

            {/* Founder details section */}
            <div className="mt-8 p-6 rounded-xl bg-gray-900/40 border border-neon/20">
              <h3 className="text-2xl font-bold text-white mb-4">Our Story</h3>
              <p className="text-gray-400 mb-4">
                Founded in 2020 by Rohan Sharma (ex-fitness chain owner) and Priya Patel (software engineer), 
                Get Mygym combines deep fitness industry experience with cutting-edge technology.
              </p>
              <p className="text-gray-400">
                We understand the unique challenges of Indian gyms - from managing cash payments to 
                handling peak hour rush and member retention in a competitive market.
              </p>
            </div>
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