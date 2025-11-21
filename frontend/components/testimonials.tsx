"use client"

import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Owner, FitPro Gym",
    image: "/gym-owner-male.jpg",
    content:
      "FitFlow transformed how we manage our gym. Our administrative time decreased by 60%, and member satisfaction increased significantly.",
    rating: 5,
  },
  {
    name: "Sarah Williams",
    role: "Manager, Strength Studio",
    image: "/gym-manager-female.jpg",
    content:
      "The analytics dashboard gives us insights we never had before. We can now make data-driven decisions about our memberships and growth.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Founder, Elite Fitness",
    image: "/fitness-founder.jpg",
    content:
      "Exceptional support team and powerful features. FitFlow is the backbone of our operation across all three locations.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-neon/5 via-transparent to-neon/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">Loved by Gym Owners</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            See what gym owners and managers are saying about FitFlow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="p-8 rounded-xl bg-gradient-to-br from-gray-900/60 to-gray-800/60 border border-gray-800 hover:border-neon/30 transition-all duration-300 hover:shadow-lg hover:shadow-neon/10 group"
            >
              {/* Star rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-neon text-neon" />
                ))}
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed text-sm">{testimonial.content}</p>

              <div className="flex items-center gap-4 pt-6 border-t border-gray-700">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border border-neon/30"
                />
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
