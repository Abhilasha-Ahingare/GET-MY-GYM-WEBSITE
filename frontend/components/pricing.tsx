"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    description: "Perfect for small gyms just getting started",
    features: [
      "Up to 50 members",
      "Basic attendance tracking",
      "Member profiles",
      "Email notifications",
      "Basic analytics",
      "Email support",
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$79",
    period: "/month",
    description: "Ideal for growing fitness businesses",
    features: [
      "Up to 500 members",
      "Advanced attendance tracking",
      "Auto-renewal system",
      "SMS notifications",
      "Advanced analytics",
      "Staff management",
      "Priority support",
      "Custom reports",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "For large gym chains and complex needs",
    features: [
      "Unlimited members",
      "Multi-location support",
      "Full API access",
      "White-label options",
      "Custom integrations",
      "Dedicated account manager",
      "24/7 phone support",
      "Custom development",
    ],
    highlighted: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your gym. All plans include core features with no hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative group rounded-2xl p-8 transition-all duration-300 ${
                plan.highlighted
                  ? "bg-gradient-to-br from-neon/20 to-neon-light/10 border border-neon/50 shadow-2xl shadow-neon/20 scale-105 md:scale-110"
                  : "bg-gradient-to-br from-gray-900/60 to-gray-800/60 border border-gray-800 hover:border-neon/30"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-neon to-neon-light text-black text-xs font-bold rounded-full">
                  RECOMMENDED
                </div>
              )}

              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

              <div className="mb-6">
                <span className="text-5xl font-bold text-white">{plan.price}</span>
                <span className="text-gray-400 ml-2">{plan.period}</span>
              </div>

              <Button
                className={`w-full mb-8 font-semibold ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-neon to-neon-light hover:from-neon-dark hover:to-neon text-black"
                    : "border border-neon/50 text-neon hover:bg-neon/10"
                }`}
              >
                {plan.highlighted ? "Get Started" : "Learn More"}
              </Button>

              <div className="space-y-4">
                {plan.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-3">
                    <Check size={20} className="text-neon flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
