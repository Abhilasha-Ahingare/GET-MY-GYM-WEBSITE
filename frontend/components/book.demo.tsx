// "use client"

// import type React from "react"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Mail, Phone, Calendar, Building2, CheckCircle2 } from "lucide-react"

// export function BookDemo() {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     gymName: "",
//     date: "",
//   })

//   const [submitted, setSubmitted] = useState(false)
//   const [loading, setLoading] = useState(false)

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({ ...prev, [name]: value }))
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setLoading(true)

//     try {
//       // Simulate API call
//       await new Promise((resolve) => setTimeout(resolve, 1000))
//       setSubmitted(true)
//       setFormData({ fullName: "", email: "", phone: "", gymName: "", date: "" })

//       // Reset success message after 5 seconds
//       setTimeout(() => setSubmitted(false), 5000)
//     } catch (error) {
//       console.error("Error submitting form:", error)
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-background via-background/50 to-background relative overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-0 right-0 w-96 h-96 bg-neon/5 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
//       </div>

//       <div className="relative max-w-4xl mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-neon via-accent to-neon-light bg-clip-text text-transparent">
//             Book Your Demo Today
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             See how FitFlow can transform your gym management. Get a personalized demo from our experts in just 30
//             minutes.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8 items-center">
//           {/* Form */}
//           <div className="bg-black/40 border border-neon/20 rounded-2xl p-8 backdrop-blur-sm hover:border-neon/40 transition-colors duration-300">
//             <form onSubmit={handleSubmit} className="space-y-5">
//               {/* Full Name */}
//               <div className="group">
//                 <label className="block text-sm font-semibold text-foreground mb-2">Full Name</label>
//                 <Input
//                   type="text"
//                   name="fullName"
//                   value={formData.fullName}
//                   onChange={handleChange}
//                   placeholder="John Doe"
//                   required
//                   className="border-neon/20 bg-background/50 focus:bg-background focus:border-neon/50 placeholder:text-muted-foreground/40"
//                 />
//               </div>

//               {/* Email */}
//               <div className="group">
//                 <label className="block text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
//                   <Mail className="w-4 h-4 text-neon" />
//                   Email Address
//                 </label>
//                 <Input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="john@gym.com"
//                   required
//                   className="border-neon/20 bg-background/50 focus:bg-background focus:border-neon/50 placeholder:text-muted-foreground/40"
//                 />
//               </div>

//               {/* Phone */}
//               <div className="group">
//                 <label className="block text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
//                   <Phone className="w-4 h-4 text-accent" />
//                   Phone Number
//                 </label>
//                 <Input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   placeholder="+1 (555) 000-0000"
//                   required
//                   className="border-neon/20 bg-background/50 focus:bg-background focus:border-neon/50 placeholder:text-muted-foreground/40"
//                 />
//               </div>

//               {/* Gym Name */}
//               <div className="group">
//                 <label className="block text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
//                   <Building2 className="w-4 h-4 text-neon-light" />
//                   Gym Name
//                 </label>
//                 <Input
//                   type="text"
//                   name="gymName"
//                   value={formData.gymName}
//                   onChange={handleChange}
//                   placeholder="Your Gym Name"
//                   required
//                   className="border-neon/20 bg-background/50 focus:bg-background focus:border-neon/50 placeholder:text-muted-foreground/40"
//                 />
//               </div>

//               {/* Preferred Date */}
//               <div className="group">
//                 <label className="block text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
//                   <Calendar className="w-4 h-4 text-accent" />
//                   Preferred Demo Date
//                 </label>
//                 <Input
//                   type="date"
//                   name="date"
//                   value={formData.date}
//                   onChange={handleChange}
//                   required
//                   className="border-neon/20 bg-background/50 focus:bg-background focus:border-neon/50"
//                 />
//               </div>

//               {/* Submit Button */}
//               <Button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full bg-gradient-to-r from-neon to-neon-light hover:from-neon-dark hover:to-neon text-black font-semibold py-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-neon/50 disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 {loading ? "Scheduling..." : "Schedule Your Demo"}
//               </Button>

//               {/* Success Message */}
//               {submitted && (
//                 <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 flex items-center gap-3 animate-in fade-in duration-300">
//                   <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
//                   <div>
//                     <p className="font-semibold text-green-400">Demo Scheduled!</p>
//                     <p className="text-sm text-green-400/80">We'll send you confirmation details shortly.</p>
//                   </div>
//                 </div>
//               )}
//             </form>
//           </div>

//           {/* Benefits */}
//           <div className="space-y-6">
//             <div className="bg-neon/10 border border-neon/20 rounded-lg p-6 hover:border-neon/40 transition-all duration-300 hover:scale-105">
//               <div className="flex items-start gap-4">
//                 <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-neon to-neon-light flex items-center justify-center flex-shrink-0">
//                   <span className="text-black font-bold">1</span>
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-foreground mb-1">30-Minute Demo</h3>
//                   <p className="text-sm text-muted-foreground">
//                     Get a complete walkthrough of FitFlow features tailored to your gym.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 hover:border-accent/40 transition-all duration-300 hover:scale-105">
//               <div className="flex items-start gap-4">
//                 <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-accent-light flex items-center justify-center flex-shrink-0">
//                   <span className="text-black font-bold">2</span>
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-foreground mb-1">Expert Guidance</h3>
//                   <p className="text-sm text-muted-foreground">
//                     Our specialists will answer all your questions and address your needs.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-neon-light/10 border border-neon-light/20 rounded-lg p-6 hover:border-neon-light/40 transition-all duration-300 hover:scale-105">
//               <div className="flex items-start gap-4">
//                 <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-neon-light to-accent flex items-center justify-center flex-shrink-0">
//                   <span className="text-black font-bold">3</span>
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-foreground mb-1">Custom Solution</h3>
//                   <p className="text-sm text-muted-foreground">
//                     Discover how FitFlow can be customized for your gym's unique needs.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Phone, Calendar, Building2, CheckCircle2, AlertCircle } from "lucide-react"

export function BookDemo() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    gymName: "",
    date: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (error) setError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const response = await fetch('http://localhost:5000/api/demo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong')
      }

      setSubmitted(true)
      setFormData({ fullName: "", email: "", phone: "", gymName: "", date: "" })

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
      setError(error instanceof Error ? error.message : 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-background via-background/50 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-neon/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-neon via-accent to-neon-light bg-clip-text text-transparent">
            Book Your Demo Today
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how Get Mygym can transform your gym management. Get a personalized demo in Hindi or English 
            from our experts. Perfect for gyms, fitness centers, and yoga studios across India.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Form */}
          <div className="bg-black/40 border border-neon/20 rounded-2xl p-8 backdrop-blur-sm hover:border-neon/40 transition-colors duration-300">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name */}
              <div className="group">
                <label className="block text-sm font-semibold text-foreground mb-2">Full Name *</label>
                <Input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  disabled={loading}
                  className="border-neon/20 bg-background/50 focus:bg-background focus:border-neon/50 placeholder:text-muted-foreground/40"
                />
              </div>

              {/* Email */}
              <div className="group">
                <label className="block text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-neon" />
                  Email Address *
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@gym.com"
                  required
                  disabled={loading}
                  className="border-neon/20 bg-background/50 focus:bg-background focus:border-neon/50 placeholder:text-muted-foreground/40"
                />
              </div>

              {/* Phone */}
              <div className="group">
                <label className="block text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-accent" />
                  Phone Number *
                </label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  required
                  disabled={loading}
                  className="border-neon/20 bg-background/50 focus:bg-background focus:border-neon/50 placeholder:text-muted-foreground/40"
                />
              </div>

              {/* Gym Name */}
              <div className="group">
                <label className="block text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-neon-light" />
                  Gym Name *
                </label>
                <Input
                  type="text"
                  name="gymName"
                  value={formData.gymName}
                  onChange={handleChange}
                  placeholder="Your Gym Name"
                  required
                  disabled={loading}
                  className="border-neon/20 bg-background/50 focus:bg-background focus:border-neon/50 placeholder:text-muted-foreground/40"
                />
              </div>

              {/* Preferred Date */}
              <div className="group">
                <label className="block text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-accent" />
                  Preferred Demo Date *
                </label>
                <Input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  className="border-neon/20 bg-background/50 focus:bg-background focus:border-neon/50"
                />
              </div>

              {/* Error Message */}
              {error && (
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 flex items-center gap-3 animate-in fade-in duration-300">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <p className="text-sm text-red-400">{error}</p>
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-neon to-neon-light hover:from-neon-dark hover:to-neon text-black font-semibold py-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-neon/50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Scheduling..." : "Schedule Your Demo"}
              </Button>

              {/* Success Message */}
              {submitted && (
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 flex items-center gap-3 animate-in fade-in duration-300">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-green-400">Demo Scheduled Successfully!</p>
                    <p className="text-sm text-green-400/80">We'll send you confirmation details shortly.</p>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Benefits - Same as before */}
          <div className="space-y-6">
            <div className="bg-neon/10 border border-neon/20 rounded-lg p-6 hover:border-neon/40 transition-all duration-300 hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-neon to-neon-light flex items-center justify-center flex-shrink-0">
                  <span className="text-black font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">30-Minute Demo</h3>
                  <p className="text-sm text-muted-foreground">
                    Get a complete walkthrough of Get Mygym features tailored to your gym.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 hover:border-accent/40 transition-all duration-300 hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-accent-light flex items-center justify-center flex-shrink-0">
                  <span className="text-black font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Expert Guidance</h3>
                  <p className="text-sm text-muted-foreground">
                    Our specialists will answer all your questions and address your specific needs.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-neon-light/10 border border-neon-light/20 rounded-lg p-6 hover:border-neon-light/40 transition-all duration-300 hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-neon-light to-accent flex items-center justify-center flex-shrink-0">
                  <span className="text-black font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Custom Solution</h3>
                  <p className="text-sm text-muted-foreground">
                    Discover how Get Mygym can be customized for your gym's unique requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}