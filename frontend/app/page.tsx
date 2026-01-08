"use client"

import { useEffect, useState, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Modules } from "@/components/modules"
import { AdminDashboard } from "@/components/admin-dashboard"
import { Testimonials } from "@/components/testimonials"
import { About } from "@/components/about"
import { FAQ } from "@/components/faq"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { Pricing } from "@/components/pricing"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Initialize GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger)

    // Setup scroll animations for all sections
    const sections = gsap.utils.toArray(".scroll-section")
    
    sections.forEach((section: any) => {
      gsap.fromTo(section,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse",
            markers: false, // Set to true for debugging
          }
        }
      )
    })

    // Parallax effect for background elements
    gsap.to(".parallax-bg", {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: mainRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    })

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Background Animation */}
      <div className="background-animation">
        <div className="animated-bg-circle" />
        <div className="animated-bg-circle" />
        <div className="animated-bg-circle" />
      </div>

      <Navigation scrollY={scrollY} />
      
      <main ref={mainRef}>
        <section className="scroll-section">
          <Hero />
        </section>
        <section className="scroll-section">
          <About />
        </section>
        <section className="scroll-section">
          <Features />
        </section>
        <section className="scroll-section">
          <Modules />
        </section>
        <section className="scroll-section">
          <AdminDashboard />
        </section>
        <section className="scroll-section">
          <Pricing />
        </section>
        <section className="scroll-section">
          <Testimonials />
        </section>
        <section className="scroll-section">
          <FAQ />
        </section>
        <section className="scroll-section">
          <CTA />
        </section>
      </main>
      
      <div className="parallax-bg">
        <Footer />
      </div>
    </div>
  )
}