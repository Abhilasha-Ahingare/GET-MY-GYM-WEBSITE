"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function SmoothScroll() {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const heightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const scroller = scrollerRef.current
    const height = heightRef.current

    if (!scroller || !height) return

    // Calculate total scrollable height
    const pageHeight = document.documentElement.scrollHeight
    const viewportHeight = window.innerHeight
    const scrollableDistance = pageHeight - viewportHeight

    // Set height for the scroll proxy
    height.style.height = `${scrollableDistance}px`

    // Disable default scrolling
    document.body.style.overflow = "hidden"
    document.body.style.height = "100vh"

    // GSAP animation for smooth scrolling
    gsap.to(scroller, {
      y: -scrollableDistance,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: height,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5, // Adjust smoothness (higher = smoother but slower response)
        markers: false, // Set to true for debugging
        invalidateOnRefresh: true,
      },
    })

    // Handle resize
    const handleResize = () => {
      const newPageHeight = document.documentElement.scrollHeight
      const newViewportHeight = window.innerHeight
      const newScrollableDistance = newPageHeight - newViewportHeight
      
      height.style.height = `${newScrollableDistance}px`
      ScrollTrigger.refresh()
    }

    window.addEventListener("resize", handleResize)

    // Handle refresh on route changes
    const handleRefresh = () => {
      setTimeout(() => {
        ScrollTrigger.refresh()
      }, 100)
    }

    window.addEventListener("load", handleRefresh)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("load", handleRefresh)
      document.body.style.overflow = ""
      document.body.style.height = ""
      ScrollTrigger.killAll()
    }
  }, [])

  return (
    <>
      <div
        ref={scrollerRef}
        className="fixed top-0 left-0 w-full will-change-transform"
      >
        {/* Your entire page content will go here */}
      </div>
      <div ref={heightRef} className="relative z-[-1]" />
    </>
  )
}