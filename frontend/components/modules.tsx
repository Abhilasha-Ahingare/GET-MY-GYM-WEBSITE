"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"

const modules = [
  {
    name: "Member Management",
    items: ["Full Profile Control", "Attendance Tracking", "Refund Processing", "Auto-Renewal", "Digital ID Cards"],
  },
  {
    name: "Membership Plans",
    items: ["Plan Creation", "Flexible Pricing", "Plan Comparison", "Custom Durations", "Promo Codes"],
  },
  {
    name: "Staff Management",
    items: ["Role Assignment", "Performance Tracking", "Shift Management", "Permissions Control", "Activity Logs"],
  },
  {
    name: "Real-Time Notifications",
    items: ["Automated Alerts", "Smart Reminders", "Important Updates", "Custom Triggers", "Multi-Channel Delivery"],
  },
  {
    name: "Financial Management",
    items: ["Income Tracking", "Expense Management", "Revenue Reports", "Payment Processing", "Tax Compliance"],
  },
  {
    name: "Analytics & Reports",
    items: ["Smart Analytics", "Visual Graphs", "Deep Insights", "Custom Reports", "Data Export"],
  },
]

export function Modules() {
  const [expandedModule, setExpandedModule] = useState(0)

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-neon/5 to-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">Comprehensive Modules</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Each module is designed to handle specific aspects of your gym business with power and simplicity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modules.map((module, idx) => (
            <div
              key={idx}
              className="group cursor-pointer"
              onClick={() => setExpandedModule(expandedModule === idx ? -1 : idx)}
            >
              <div className="p-6 rounded-xl bg-gradient-to-br from-gray-900/60 to-gray-800/60 border border-gray-800 hover:border-neon/50 transition-all duration-300 hover:shadow-lg hover:shadow-neon/10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{module.name}</h3>
                  <ChevronRight
                    className={`text-neon transition-transform duration-300 ${expandedModule === idx ? "rotate-90" : ""}`}
                  />
                </div>

                {/* Always show first item, expand rest on click */}
                <div
                  className={`space-y-3 overflow-hidden transition-all duration-300 ${expandedModule === idx ? "max-h-96" : "max-h-0"}`}
                >
                  {module.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-center gap-3 text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-neon" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {expandedModule !== idx && (
                  <div className="flex items-center gap-3 text-gray-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-neon" />
                    <span>{module.items[0]}</span>
                    <span className="text-xs text-neon ml-auto">+{module.items.length - 1} more</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
