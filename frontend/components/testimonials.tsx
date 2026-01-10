"use client"

import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Owner, FitPro Gym",
    image: "/gym-owner-male.jpg",
    content: "Get Mygym transformed how we manage our gym. Our administrative time decreased by 60%, and member satisfaction increased significantly. The dashboard is so intuitive that even our non-tech staff picked it up in minutes.",
    rating: 5,
    location: "Mumbai",
    gymSize: "200+ members"
  },
  {
    name: "Sarah Williams",
    role: "Manager, Strength Studio",
    image: "/gym-manager-female.jpg",
    content: "The analytics dashboard gives us insights we never had before. We can now make data-driven decisions about our memberships and growth. Revenue tracking feature helped us identify our most profitable membership plans.",
    rating: 5,
    location: "Delhi",
    gymSize: "150+ members"
  },
  {
    name: "Michael Chen",
    role: "Founder, Elite Fitness",
    image: "/fitness-founder.jpg",
    content: "Exceptional support team and powerful features. Get Mygym is the backbone of our operation across all three locations. The WhatsApp integration alone saved us hours of manual follow-up each week.",
    rating: 5,
    location: "Bangalore",
    gymSize: "3 locations"
  },
  {
    name: "Priya Sharma",
    role: "Owner, Power Fitness",
    image: "/placeholder.svg",
    content: "As a female gym owner, I appreciate how easy the software is to use. The attendance system eliminated all our paper registers, and the payment tracking helped reduce revenue leakage by 40%.",
    rating: 5,
    location: "Chennai",
    gymSize: "120+ members"
  },
  {
    name: "Rahul Verma",
    role: "Co-founder, CrossFit Arena",
    image: "/placeholder.svg",
    content: "We tried 4 different software before settling on Get Mygym. The local server support was the deciding factor for us. Even during internet outages, we can continue operations seamlessly.",
    rating: 5,
    location: "Pune",
    gymSize: "180+ members"
  },
  {
    name: "Neha Kapoor",
    role: "Operations Head, FitZone",
    image: "/placeholder.svg",
    content: "The mobile app for staff is a game-changer. Our trainers can check members in from anywhere in the gym. Member management has never been this efficient.",
    rating: 5,
    location: "Hyderabad",
    gymSize: "250+ members"
  }
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const itemsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3
      if (window.innerWidth >= 768) return 2
    }
    return 1
  }

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prev) => 
      prev + itemsPerView() >= testimonials.length ? 0 : prev + itemsPerView()
    )
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prev) => 
      prev - itemsPerView() < 0 ? testimonials.length - itemsPerView() : prev - itemsPerView()
    )
  }

  useEffect(() => {
    if (!autoplay) return
    
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    
    return () => clearInterval(interval)
  }, [autoplay, currentIndex])

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerView())
  if (visibleTestimonials.length < itemsPerView()) {
    visibleTestimonials.push(...testimonials.slice(0, itemsPerView() - visibleTestimonials.length))
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  }

  return (
    <section className="relative py-10 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-gray-950 via-black to-gray-950">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-neon/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-px bg-gradient-to-r from-transparent via-neon/10 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-12 lg:mb-10"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-6 py-2 rounded-full bg-gradient-to-r from-neon/20 to-accent/20 border border-neon/30 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-neon animate-pulse" />
            <span className="text-neon font-semibold text-sm tracking-wider">TESTIMONIALS</span>
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">Trusted by</span>{' '}
            <span className="bg-gradient-to-r from-neon via-neon-light to-accent bg-clip-text text-transparent">
              500+ Gym Owners
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4">
            Hear from fitness professionals across India who transformed their gym operations with Get Mygym
          </p>
        </motion.div>

        {/* Testimonials Container */}
        <div className="relative mb-10 md:mb-16">
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              <AnimatePresence custom={direction} mode="wait">
                {visibleTestimonials.map((testimonial, idx) => (
                  <motion.div
                    key={`${testimonial.name}-${currentIndex}-${idx}`}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 }
                    }}
                    onMouseEnter={() => setAutoplay(false)}
                    onMouseLeave={() => setAutoplay(true)}
                    className="group"
                  >
                    <div className="h-full p-6 md:p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-800 backdrop-blur-sm hover:border-neon/50 transition-all duration-500 hover:shadow-2xl hover:shadow-neon/10 overflow-hidden">
                      {/* Quote Icon */}
                      <div className="absolute top-4 right-4 md:top-6 md:right-6 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                        <Quote className="w-8 h-8 md:w-10 md:h-10 text-neon" />
                      </div>

                      {/* Rating */}
                      <div className="flex gap-1 mb-4 md:mb-6">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 md:w-5 md:h-5 fill-neon text-neon"
                          />
                        ))}
                      </div>

                      {/* Content */}
                      <p className="text-gray-300 mb-6 md:mb-8 leading-relaxed text-sm md:text-base italic relative">
                        "{testimonial.content}"
                      </p>

                      {/* Divider */}
                      <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-6 md:mb-8" />

                      {/* Profile Section */}
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-neon to-accent p-0.5">
                            <div className="w-full h-full rounded-full bg-black overflow-hidden">
                              <img
                                src={testimonial.image || "/placeholder.svg"}
                                alt={testimonial.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                          <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-neon border-2 border-black flex items-center justify-center">
                            <Star className="w-2 h-2 text-black" />
                          </div>
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                            <div>
                              <h4 className="font-bold text-white text-base md:text-lg truncate">
                                {testimonial.name}
                              </h4>
                              <p className="text-sm text-gray-400 truncate">
                                {testimonial.role}
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs px-2 py-1 rounded-full bg-neon/10 text-neon border border-neon/20">
                                {testimonial.gymSize}
                              </span>
                            </div>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">
                            {testimonial.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-4 mt-5 md:mt-11">
            
            {/* Dots Indicator */}
            <div className="flex items-center gap-2 mx-4">
              {Array.from({ length: Math.ceil(testimonials.length / itemsPerView()) }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentIndex / itemsPerView() ? 1 : -1)
                    setCurrentIndex(idx * itemsPerView())
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    Math.floor(currentIndex / itemsPerView()) === idx 
                      ? 'w-6 bg-gradient-to-r from-neon to-accent' 
                      : 'bg-gray-700 hover:bg-neon/50'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}