"use client"

import { useState, useEffect } from "react"
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function AdminDashboard() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  const screenshots = [
    {
      id: 1,
      title: "Member Management",
      description: "Complete member database with real-time attendance tracking and profile management",
      image: "/gym-admin-dashboard-member-management-interface.jpg",
    },
    {
      id: 2,
      title: "Revenue Analytics",
      description: "Track revenue, subscriptions, and financial metrics with advanced reporting",
      image: "/gym-fitness-analytics-revenue-dashboard-charts.jpg",
    },
    {
      id: 3,
      title: "Class Scheduling",
      description: "Automated class scheduling, trainer assignment, and capacity management",
      image: "/gym-class-scheduling-timetable-management-system.jpg",
    },
  ]

  const handleImageClick = (image: string, index: number) => {
    setSelectedImage(image)
    setCurrentIndex(index)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length)
    setSelectedImage(screenshots[(currentIndex + 1) % screenshots.length].image)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length)
    setSelectedImage(screenshots[(currentIndex - 1 + screenshots.length) % screenshots.length].image)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return
      
      if (e.key === 'Escape') {
        setSelectedImage(null)
      }
      if (e.key === 'ArrowRight') {
        handleNext()
      }
      if (e.key === 'ArrowLeft') {
        handlePrev()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage, currentIndex])

  return (
    <section className="relative py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-950 via-black to-gray-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-10 w-64 h-64 md:w-96 md:h-96 bg-neon-light/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-10 w-64 h-64 md:w-96 md:h-96 bg-neon/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-neon/20 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-neon/20 to-accent/20 border border-neon/30 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-neon animate-pulse" />
            <span className="text-neon font-semibold text-sm">DASHBOARD PREVIEW</span>
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Powerful</span>{' '}
            <span className="bg-gradient-to-r from-neon via-neon-light to-accent bg-clip-text text-transparent">
              Admin Dashboard
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4">
            Experience an intuitive dashboard designed for efficient gym management. 
            Click to explore detailed screenshots.
          </p>
        </motion.div>

        {/* Screenshots Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {screenshots.map((screenshot, index) => (
            <motion.div
              key={screenshot.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-[6/6] rounded-xl overflow-hidden cursor-pointer border border-gray-800 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm hover:border-neon/50 transition-all duration-300 hover:shadow-lg hover:shadow-neon/10"
              onClick={() => handleImageClick(screenshot.image, index)}
            >
              {/* Image Container */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40 z-10" />
                <img
                  src={screenshot.image || "/placeholder.svg"}
                  alt={screenshot.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onLoad={() => setIsLoading(false)}
                />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6 z-20">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-2 mb-3">
                    
                    <span className="text-xs font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Click to Expand
                    </span>
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">{screenshot.title}</h3>
                  <p className="text-xs md:text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {screenshot.description}
                  </p>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-neon/30 rounded-xl transition-all duration-300" />
            </motion.div>
          ))}
        </div>

      </div>

      {/* Full Screen Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Navigation Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/50 backdrop-blur-sm border border-neon/30 hover:border-neon/50 flex items-center justify-center text-white hover:text-neon transition-all duration-300 z-30"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/50 backdrop-blur-sm border border-neon/30 hover:border-neon/50 flex items-center justify-center text-white hover:text-neon transition-all duration-300 z-30"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>

              {/* Image Container */}
              <div className="relative rounded-xl md:rounded-2xl overflow-hidden border-2 border-neon/50 shadow-2xl shadow-neon/20">
                <img
                  src={selectedImage || "/placeholder.svg"}
                  alt={screenshots[currentIndex]?.title}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
                
                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-4 md:p-6">
                  <h3 className="text-lg md:text-2xl font-bold text-white mb-2">
                    {screenshots[currentIndex]?.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-300">
                    {screenshots[currentIndex]?.description}
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 md:-top-16 md:-right-4 w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/50 backdrop-blur-sm border border-neon/30 hover:border-neon/50 flex items-center justify-center text-white hover:text-neon transition-all duration-300"
                aria-label="Close preview"
              >
                <X className="w-4 h-4 md:w-5 md:h-5" />
              </button>

              {/* Image Counter */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-sm text-gray-400">
                {currentIndex + 1} / {screenshots.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}