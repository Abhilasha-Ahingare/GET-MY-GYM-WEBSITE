"use client"

import { Users, Clock, RefreshCw, TrendingUp, Bell, BarChart3, FileText, Download } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Member Management",
    description: "Complete member profiles, attendance tracking, refund processing, and auto-renewal—all centralized.",
    color: "from-neon to-neon-light",
  },
  {
    icon: RefreshCw,
    title: "Auto-Renewal System",
    description: "Automated membership renewals with flexible scheduling and payment management.",
    color: "from-neon-light to-neon",
  },
  {
    icon: Clock,
    title: "Attendance Tracking",
    description: "Real-time check-in/check-out system with detailed attendance analytics.",
    color: "from-neon to-accent",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Automated alerts, reminders, and real-time updates for members and staff.",
    color: "from-accent to-neon-light",
  },
  {
    icon: TrendingUp,
    title: "Income & Expense Management",
    description: "Track revenue, manage expenses, and monitor financial health with ease.",
    color: "from-neon-light to-accent",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics Dashboard",
    description: "Beautiful charts, deep insights, and smart analytics for data-driven decisions.",
    color: "from-accent to-neon",
  },
  {
    icon: FileText,
    title: "Report Generation",
    description: "Generate comprehensive reports in multiple formats for analysis and compliance.",
    color: "from-neon to-accent",
  },
  {
    icon: Download,
    title: "Import/Export Tools",
    description: "Support for PDF, JSON, Excel, CSV, and Docs for seamless data management.",
    color: "from-neon-light to-neon",
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">Powerful Features for Modern Gyms</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Everything you need to run a successful fitness business, from member management to advanced analytics.
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
      </div>
    </section>
  )
}
