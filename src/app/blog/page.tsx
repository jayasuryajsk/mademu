import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: 'Essential Safety Tips for Operating Heavy Machinery',
      excerpt: 'Learn the crucial safety protocols and best practices for operating excavators, loaders, and other heavy equipment on construction sites.',
      category: 'Safety',
      date: '2024-01-15',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2876&auto=format&fit=crop'
    },
    {
      id: 2,
      title: 'How to Choose the Right Equipment for Your Project',
      excerpt: 'A comprehensive guide to selecting the most suitable equipment based on project size, duration, and specific requirements.',
      category: 'Guides',
      date: '2024-01-10',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?q=80&w=2832&auto=format&fit=crop'
    },
    {
      id: 3,
      title: 'Maximizing ROI: Rent vs Buy Equipment Analysis',
      excerpt: 'Detailed comparison of equipment rental versus purchase, helping you make informed decisions for your business.',
      category: 'Business',
      date: '2024-01-05',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1664906225763-ad8dde6e8734?q=80&w=2940&auto=format&fit=crop'
    },
    {
      id: 4,
      title: 'Event Equipment Trends for 2024',
      excerpt: 'Discover the latest trends in event equipment, from LED walls to sustainable staging solutions.',
      category: 'Events',
      date: '2023-12-28',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2940&auto=format&fit=crop'
    },
    {
      id: 5,
      title: 'Maintenance Tips to Extend Equipment Life',
      excerpt: 'Proper maintenance practices that can help extend the life of rental equipment and ensure optimal performance.',
      category: 'Maintenance',
      date: '2023-12-20',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=2940&auto=format&fit=crop'
    },
    {
      id: 6,
      title: 'Understanding Equipment Insurance Coverage',
      excerpt: 'Everything you need to know about equipment rental insurance, damage waivers, and liability protection.',
      category: 'Insurance',
      date: '2023-12-15',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2940&auto=format&fit=crop'
    }
  ]

  const categories = ['All', 'Safety', 'Guides', 'Business', 'Events', 'Maintenance', 'Insurance']

  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-white border-b animate-fade-in">
        <div className="container mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="heading-1 text-foreground mb-4">
              Equipment Insights & News
            </h1>
            <p className="text-lead">
              Expert advice, industry updates, and practical tips to help you get the most from your equipment rentals.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-muted border-b animate-fade-in animate-delay-200">
        <div className="container mx-auto container-padding">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                  category === 'All' 
                    ? 'bg-accent text-white' 
                    : 'bg-white text-foreground hover:bg-accent hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding bg-white animate-fade-in animate-delay-300">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden animate-scale-in animate-delay-400">
                <div className="aspect-[16/9] relative overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-xs font-medium px-3 py-1 rounded">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg font-medium line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString('en-AU', { 
                        day: 'numeric', 
                        month: 'short', 
                        year: 'numeric' 
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="line-clamp-3 mb-4">
                    {post.excerpt}
                  </CardDescription>
                  <Link href={`/blog/${post.id}`} className="inline-flex items-center text-accent hover:text-accent/80 font-medium text-sm">
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center gap-2">
            <Button variant="outline" disabled>Previous</Button>
            <Button variant="outline" className="bg-accent text-white hover:bg-accent/90">1</Button>
            <Button variant="outline">2</Button>
            <Button variant="outline">3</Button>
            <Button variant="outline">Next</Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-accent animate-fade-in animate-delay-500">
        <div className="container mx-auto container-padding text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="heading-1 mb-6 text-white">
              Stay Updated
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Subscribe to our newsletter for equipment tips, industry news, and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-white/60 focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Button className="bg-white text-accent hover:bg-gray-100 px-6 py-3">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}