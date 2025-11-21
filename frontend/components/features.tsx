"use client"

import { Users, Clock, RefreshCw, TrendingUp, Bell, BarChart3, FileText, Download, MessageCircle, IndianRupee, Search, Shield } from "lucide-react"

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
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-7 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">Complete Gym Management Solution</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Everything you need to run your gym smoothly - from member check-ins to financial reports, all in one platform.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div
                key={idx}
                className="group relative p-6 rounded-xl bg-gradient-to-b from-gray-900/50 to-gray-800/50 border border-gray-800 hover:border-neon/50 transition-all duration-300 hover:shadow-lg hover:shadow-neon/20 overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`}
                />

                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} p-2.5 mb-4 flex items-center justify-center`}
                >
                  <Icon className="text-white" size={24} />
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>

                {/* Decorative line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-neon to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            )
          })}
        </div>

        {/* Additional feature highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-xl bg-gray-900/40 border border-neon/20">
            <div className="text-3xl font-bold text-neon mb-2">500+</div>
            <div className="text-gray-400">Gyms Using Our Platform</div>
          </div>
          <div className="p-6 rounded-xl bg-gray-900/40 border border-neon/20">
            <div className="text-3xl font-bold text-neon-light mb-2">50,000+</div>
            <div className="text-gray-400">Active Members Managed</div>
          </div>
          <div className="p-6 rounded-xl bg-gray-900/40 border border-neon/20">
            <div className="text-3xl font-bold text-accent mb-2">1M+</div>
            <div className="text-gray-400">Monthly Check-ins Processed</div>
          </div>
        </div>
      </div>
    </section>
  )
}