"use client"

import { BarChart3, Users, TrendingUp, Calendar } from "lucide-react"

export function Dashboard() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">Personalized Admin Dashboard</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Get real-time insights into your gym's performance with beautiful, interactive analytics.
          </p>
        </div>

        <div className="relative">
          {/* Dashboard mockup */}
          <div className="bg-gradient-to-b from-gray-900/80 to-gray-800/80 rounded-2xl border border-gray-800/50 p-8 overflow-hidden group hover:border-neon/30 transition-all duration-300">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-neon/0 via-neon/10 to-neon/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

            {/* Dashboard header */}
            <div className="mb-8 pb-8 border-b border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">Dashboard Overview</h3>
                <span className="text-sm text-neon">Today</span>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[
                { icon: Users, label: "Active Members", value: "1,247", change: "+12%" },
                { icon: BarChart3, label: "Monthly Revenue", value: "$24,580", change: "+8.2%" },
                { icon: TrendingUp, label: "Attendance Rate", value: "78%", change: "+2.1%" },
                { icon: Calendar, label: "Renewals Due", value: "42", change: "-5%" },
              ].map((stat, idx) => {
                const Icon = stat.icon
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-neon/30 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <Icon size={24} className="text-neon" />
                      <span className="text-xs font-semibold text-green-400">{stat.change}</span>
                    </div>
                    <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                  </div>
                )
              })}
            </div>

            {/* Charts placeholder */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Revenue chart */}
              <div className="p-6 rounded-lg bg-gray-800/30 border border-gray-700">
                <h4 className="text-white font-semibold mb-4">Revenue Trend</h4>
                <div className="h-48 flex items-end justify-around">
                  {[65, 78, 72, 85, 90, 88, 92].map((height, i) => (
                    <div
                      key={i}
                      className="w-8 bg-gradient-to-t from-neon to-neon-light rounded-t opacity-80 hover:opacity-100 transition-opacity"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>

              {/* Members distribution */}
              <div className="p-6 rounded-lg bg-gray-800/30 border border-gray-700">
                <h4 className="text-white font-semibold mb-4">Member Distribution</h4>
                <div className="space-y-3">
                  {["Gold Plan", "Silver Plan", "Bronze Plan", "Day Pass"].map((plan, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">{plan}</span>
                        <span className="text-neon font-semibold">{45 + i * 10}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-neon to-neon-light h-full rounded-full"
                          style={{ width: `${45 + i * 10}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
