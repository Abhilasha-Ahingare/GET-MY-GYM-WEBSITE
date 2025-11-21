"use client"

import { useEffect, useState } from "react"
import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Modules } from "@/components/modules"
// import { Dashboard } from "@/components/dashboard"
import { AdminDashboard } from "@/components/admin-dashboard"
import { Pricing } from "@/components/pricing"
import { Testimonials } from "@/components/testimonials"
import { About } from "@/components/about"
import { Blog } from "@/components/blog"
import { FAQ } from "@/components/faq"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navigation scrollY={scrollY} />
      <main>
        <Hero />
        <Features />
        <About />
        <Modules />
        {/* <Dashboard /> */}
        <AdminDashboard />
        <Pricing />
        <Testimonials />
        <Blog />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
