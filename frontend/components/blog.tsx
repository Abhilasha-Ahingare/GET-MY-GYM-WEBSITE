"use client"

import { ArrowRight, Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Blog() {
  const posts = [
    {
      id: 1,
      title: "10 Ways to Boost Member Retention in 2025",
      excerpt:
        "Learn proven strategies to keep your members engaged and committed to their fitness journey with personalized programs and tracking.",
      date: "Jan 15, 2025",
      author: "Sarah Chen",
      category: "Growth",
      image: "/gym-members-exercising-together.jpg",
    },
    {
      id: 2,
      title: "How AI is Transforming Gym Management",
      excerpt:
        "Discover how artificial intelligence is revolutionizing member management, workout planning, and business analytics for modern gyms.",
      date: "Jan 10, 2025",
      author: "Mike Johnson",
      category: "Technology",
      image: "/ai-technology-fitness-analytics.jpg",
    },
    {
      id: 3,
      title: "The Complete Guide to Digital Membership",
      excerpt:
        "Everything gym owners need to know about transitioning to digital memberships and paperless operations for maximum efficiency.",
      date: "Jan 5, 2025",
      author: "Alex Rivera",
      category: "Operations",
      image: "/digital-membership-card-technology.jpg",
    },
    {
      id: 4,
      title: "Maximizing Revenue with Group Classes",
      excerpt:
        "Strategic insights on how to leverage group fitness classes to increase revenue and build community within your gym.",
      date: "Dec 28, 2024",
      author: "Emma Wilson",
      category: "Business",
      image: "/group-fitness-class-workout.jpg",
    },
    {
      id: 5,
      title: "Member Data Security Best Practices",
      excerpt:
        "Understand the importance of data security and how FitFlow protects your members' information with industry-leading standards.",
      date: "Dec 20, 2024",
      author: "David Park",
      category: "Security",
      image: "/data-security-protection.png",
    },
    {
      id: 6,
      title: "Building a Strong Gym Community",
      excerpt:
        "Tips and strategies for creating an engaged, supportive community that keeps members motivated and loyal to your gym.",
      date: "Dec 15, 2024",
      author: "Lisa Anderson",
      category: "Community",
      image: "/fitness-community-members-motivating-each-other.jpg",
    },
  ]

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gray-950/50">
      {/* Background elements */}
      <div className="absolute top-20 right-20 w-80 h-80 bg-neon-light/5 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-pink-accent/5 rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-neon/10 border border-neon/30">
            <span className="text-sm text-neon font-medium">Latest Insights</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">
            <span className="bg-gradient-to-r from-white via-neon-light to-pink-accent bg-clip-text text-transparent">
              Get My gym Blog
            </span>
          </h2>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Industry tips, success stories, and expert insights to help you build a thriving fitness business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group rounded-xl overflow-hidden bg-gray-900/40 border border-gray-800 hover:border-neon/50 transition duration-300 hover:shadow-lg hover:shadow-neon/20 flex flex-col"
            >
              {/* Image */}
              <div className="overflow-hidden h-48 bg-gradient-to-br from-gray-800 to-gray-900">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-neon/10 text-neon border border-neon/30">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500">
                    <Calendar size={14} className="inline mr-1" />
                    {post.date}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-neon-light transition line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 flex-grow line-clamp-2">{post.excerpt}</p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <User size={14} />
                    {post.author}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-neon hover:text-neon-light hover:bg-neon/10 group-hover:translate-x-1 transition"
                  >
                    <ArrowRight size={16} />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button className="bg-gradient-to-r from-neon to-neon-light hover:from-neon-dark hover:to-neon text-black font-semibold px-8 py-6">
            View All Articles
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </div>
    </section>
  )
}
