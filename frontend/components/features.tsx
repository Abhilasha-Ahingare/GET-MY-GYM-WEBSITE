"use client"

import { Users, Clock, RefreshCw, TrendingUp, Bell, BarChart3, FileText, Download, MessageCircle, IndianRupee, Search, Shield } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const features = [
  {
    icon: Search,
    title: "Inquiry Management",
    description: "Store and manage all inquiries with multiple facility options and track potential members effectively.",
    color: "from-neon to-neon-light",
  },
  {
    icon: TrendingUp,
    title: "Expense & Income Tracking",
    description: "Record all expenses and income to monitor your gym's financial health with detailed categorization.",
    color: "from-neon-light to-neon",
  },
  {
    icon: Users,
    title: "Member Management",
    description: "Maintain complete details of all gym members, membership status, and personal information in one place.",
    color: "from-neon to-accent",
  },
  {
    icon: Users,
    title: "Staff Management",
    description: "Manage all gym staff including trainers, receptionists, and managers with role-based permissions.",
    color: "from-accent to-neon-light",
  },
  {
    icon: Clock,
    title: "Attendance System",
    description: "Real-time attendance for staff and members with bulk check-in/check-out and detailed history tracking.",
    color: "from-neon-light to-accent",
  },
  {
    icon: RefreshCw,
    title: "Membership Plans",
    description: "Create and manage different membership plans with automatic renewal reminders and flexible pricing.",
    color: "from-accent to-neon",
  },
  {
    icon: IndianRupee,
    title: "Discounts & Payments",
    description: "Support for discounts, special offers, online payments, cash payments, and payment tracking.",
    color: "from-neon to-accent",
  },
  {
    icon: BarChart3,
    title: "Reports & Analytics",
    description: "Generate detailed reports and export them in Excel, CSV, PDF, JSON formats for comprehensive analysis.",
    color: "from-neon-light to-neon",
  },
  {
    icon: Bell,
    title: "Notification System",
    description: "Email, WhatsApp, and SMS notifications for renewals, payments, alerts, and member communication.",
    color: "from-accent to-neon",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Integration",
    description: "Send reminders, alerts, and updates directly on WhatsApp for instant member communication.",
    color: "from-neon to-accent",
  },
  {
    icon: BarChart3,
    title: "Real-Time Dashboard",
    description: "Real-time updates for attendance, inquiries, payments, renewals, and daily business activities.",
    color: "from-neon-light to-neon",
  },
  {
    icon: Shield,
    title: "Data Security",
    description: "Enterprise-grade security with daily backups, encryption, and secure access controls for your data.",
    color: "from-accent to-neon-light",
  },
]

export function Features() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="features"
      className="py-10 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-gray-900/[0.04] bg-[size:20px_20px]" />
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-neon/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header with animation */}
        <div className={`text-center mb-10 lg:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 text-white leading-tight">
            Complete <span className="bg-gradient-to-r from-neon to-accent bg-clip-text text-transparent">Gym Management</span> Solution
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Everything you need to run your gym smoothly - from member check-ins to financial reports, all in one platform.
          </p>
        </div>

        {/* Features grid with staggered animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            const delay = idx * 100
            return (
              <div
                key={idx}
                className={`group relative p-4 sm:p-6 rounded-2xl bg-gradient-to-b from-gray-900/60 to-gray-800/40 border border-gray-800 hover:border-neon/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-neon/10 backdrop-blur-sm overflow-hidden
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{
                  transitionDelay: `${delay}ms`,
                  transitionProperty: 'opacity, transform',
                }}
              >
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-neon/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Animated border effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-neon/20 transition-colors duration-500" />

                {/* Icon container */}
                <div className="relative mb-4 sm:mb-5">
                  <div className="relative inline-block">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${feature.color} p-2 flex items-center justify-center shadow-lg`}>
                      <Icon className="text-white" size={20} />
                    </div>
                    <div className="absolute -inset-3 bg-gradient-to-br from-neon/30 to-accent/30 rounded-xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500 -z-10" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-neon transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover indicator line */}
                <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-neon to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100" />

                {/* Number indicator (hidden on smallest screens) */}
                <div className="absolute top-4 right-4 sm:top-5 sm:right-5 text-xs font-bold text-gray-500 group-hover:text-neon transition-colors duration-300">
                  {(idx + 1).toString().padStart(2, '0')}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}