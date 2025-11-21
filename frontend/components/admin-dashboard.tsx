"use client"

import { useState } from "react"
import { X, ZoomIn } from "lucide-react"

export function AdminDashboard() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

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

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background/95 to-background overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-neon-light/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-neon/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">
            <span className="bg-gradient-to-r from-neon to-neon-light bg-clip-text text-transparent">
              Personalized Admin Dashboard
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Experience a powerful, intuitive dashboard designed for gym managers. Click on any screenshot to view full
            details.
          </p>
        </div>

        {/* Screenshots Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {screenshots.map((screenshot) => (
            <div
              key={screenshot.id}
              className="group relative h-80 rounded-xl overflow-hidden cursor-pointer border border-neon/20 bg-card/50 backdrop-blur-sm hover:border-neon/50 transition-all duration-300 hover:shadow-lg hover:shadow-neon/20"
              onClick={() => setSelectedImage(screenshot.image)}
            >
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={screenshot.image || "/placeholder.svg"}
                  alt={screenshot.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-bold text-white mb-2">{screenshot.title}</h3>
                <p className="text-sm text-gray-300 mb-4 line-clamp-2">{screenshot.description}</p>
                <div className="flex items-center text-neon text-sm font-semibold gap-2">
                  <ZoomIn size={16} />
                  Click to expand
                </div>
              </div>

              <div className="absolute inset-0 border-2 border-neon/0 group-hover:border-neon/50 rounded-xl transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full animate-scaleIn" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage || "/placeholder.svg"}
              alt="Full screenshot"
              className="w-full h-auto rounded-xl border-2 border-neon/50 shadow-2xl shadow-neon/20"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-neon transition-colors duration-200 p-2"
            >
              <X size={32} />
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </section>
  )
}
