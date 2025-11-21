"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Is FitFlow suitable for small gyms?",
    answer:
      "FitFlow scales from small solo gyms to large chains. Our Starter plan is designed specifically for smaller operations with up to 50 members and all essential features.",
  },
  {
    question: "Can I import my existing member data?",
    answer:
      "Yes! Our import tools support CSV, Excel, JSON, and PDF formats. You can import your entire member database and existing data in just a few clicks.",
  },
  {
    question: "What if I need to integrate with other software?",
    answer:
      "FitFlow offers a comprehensive API and supports integrations with popular fitness management tools, payment processors, and communication platforms.",
  },
  {
    question: "How does the auto-renewal system work?",
    answer:
      "Our auto-renewal system automatically processes membership renewals on the scheduled date, sends notifications to members, and handles failed payments gracefully with retry logic.",
  },
  {
    question: "Is my member data secure?",
    answer:
      "Yes, we use enterprise-grade encryption, regular security audits, and comply with all major data protection regulations. Your data is backed up daily.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We offer email support on all plans, priority support on Professional, and 24/7 phone support on Enterprise. We also have comprehensive documentation and video tutorials.",
  },
]

export function FAQ() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null)

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-400">Have questions? We have answers. Can't find what you're looking for?</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-gray-800 rounded-lg overflow-hidden hover:border-neon/30 transition-colors"
            >
              <button
                className="w-full p-6 flex items-center justify-between bg-gradient-to-r from-gray-900/60 to-gray-800/60 hover:from-gray-900/80 hover:to-gray-800/80 transition-all text-left"
                onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
              >
                <span className="font-semibold text-white text-lg">{faq.question}</span>
                <ChevronDown
                  size={24}
                  className={`text-neon flex-shrink-0 transition-transform duration-300 ${
                    expandedIdx === idx ? "rotate-180" : ""
                  }`}
                />
              </button>

              {expandedIdx === idx && (
                <div className="p-6 bg-gray-800/30 border-t border-gray-800">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
