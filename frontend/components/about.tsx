"use client"

import { CheckCircle2, Award, Users, TrendingUp, Target, Globe, Shield, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "Built by gym owners who understand daily operational challenges and member management pain points"
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "Used by 500+ gyms across India with 99.9% uptime and local server support"
    },
    {
      icon: Heart,
      title: "Support",
      description: "Dedicated Hindi/English support team available from 6 AM to 11 PM daily"
    },
    {
      icon: Award,
      title: "Security",
      description: "Bank-level encryption with daily automated backups and data protection"
    },
  ]

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <section 
      id="about" 
      className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      ref={ref}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-950" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-neon/10 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-30 animate-pulse delay-1000" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          
          <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold mb-4 leading-tight">
            <span className="text-white">ABOUT US</span>
          </h1>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* Left Content - Founder Story */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-neon/30 to-accent/30 rounded-2xl blur-sm opacity-0 group-hover:opacity-70 transition-opacity duration-500" />
              
              <div className="relative p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-800 backdrop-blur-sm">
                <div className="flex flex-col sm:flex-row items-start gap-6 mb-6">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-neon to-accent p-0.5">
                      <div className="w-full h-full rounded-full bg-black overflow-hidden">
                        <Image
                          src="/fitness-founder.jpg"
                          alt="Akshay chahande"
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-neon border-4 border-black flex items-center justify-center">
                      <Target className="w-3 h-3 text-black" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Our Founder's Journey</h3>
                    <p className="text-neon-light font-medium">Akshay chahande, parga malvi</p>
                    <p className="text-gray-400 text-sm mt-2">
                      From struggling gym owner to tech entrepreneur
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    "Running a gym in India comes with unique challenges - paper registers, cash payments, 
                    member retention struggles, and peak hour chaos. We experienced it all firsthand."
                  </p>
                  
                  <div className="p-4 rounded-lg bg-black/40 border-l-4 border-neon">
                    <p className="text-gray-300 italic text-sm">
                      "After losing members due to poor tracking systems, we decided to build the solution 
                      we needed - Get Mygym was born from real frustration."
                    </p>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed">
                    Today, we serve gyms across India with software that truly understands the local 
                    fitness industry's needs and challenges.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Values */}
          <div className="space-y-8">
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={staggerChildren}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-white">Why Choose Get Mygym</h3>
              
              <div className="grid sm:grid-cols-2 gap-5">
                {values.map((value, idx) => {
                  const Icon = value.icon
                  return (
                    <motion.div
                      key={idx}
                      variants={fadeInUp}
                      whileHover={{ scale: 1.02 }}
                      className="group relative p-5 rounded-xl bg-gradient-to-br from-gray-900/40 to-black/40 border border-gray-800 backdrop-blur-sm overflow-hidden hover:border-neon/50 transition-all duration-300"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-neon/0 via-neon/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative z-10">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon/20 to-accent/20 flex items-center justify-center group-hover:from-neon/30 group-hover:to-accent/30 transition-all">
                              <Icon className="w-5 h-5 text-neon" />
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-bold text-white mb-1 group-hover:text-neon-light transition-colors">
                              {value.title}
                            </h4>
                            <p className="text-xs text-gray-400 leading-relaxed">
                              {value.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            {/* Simple Stats */}
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-3 gap-4"
            >
              <div className="text-center p-4 rounded-lg bg-gray-900/40 border border-gray-800">
                <div className="text-2xl font-bold text-neon">500+</div>
                <div className="text-xs text-gray-400 mt-1">Gyms</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-gray-900/40 border border-gray-800">
                <div className="text-2xl font-bold text-accent">99.9%</div>
                <div className="text-xs text-gray-400 mt-1">Uptime</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-gray-900/40 border border-gray-800">
                <div className="text-2xl font-bold text-neon-light">24/7</div>
                <div className="text-xs text-gray-400 mt-1">Support</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}