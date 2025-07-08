import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, Tag, Search, Filter } from 'lucide-react';
import Link from 'next/link';

export default function BlogPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container max-w-screen-2xl px-8 lg:px-4">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              Blog Articles
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Insights, tutorials, and thoughts on web development, technology
              trends, and software engineering best practices.
            </p>
          </div>

          {/* Search and Filter Bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Tag className="h-4 w-4" />
                Categories
              </Button>
            </div>
          </div>

          {/* Featured Article */}
          <Card className="mb-12 overflow-hidden border-0 shadow-lg p-0">
            <div className="md:flex">
              <div className="md:flex-1">
                <div className="aspect-video md:aspect-auto md:h-full bg-gradient-to-br from-blue-600 to-indigo-700 relative">
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block px-3 py-1 bg-white/90 text-blue-700 text-sm font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                </div>
              </div>
              <div className="md:flex-1 p-8">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>Dec 8, 2024</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>12 min read</span>
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Building TechBlog Pro: From Concept to Production
                </h2>
                <p className="text-gray-600 mb-6 line-clamp-3">
                  A comprehensive guide on building a modern blog platform with
                  Next.js 15, TypeScript, and Docker. Learn about the
                  architecture decisions, development process, and deployment
                  strategies used in this project.
                </p>
                <Button asChild>
                  <Link href="#">Read Full Article</Link>
                </Button>
              </div>
            </div>
          </Card>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Article 1 */}
            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow p-0">
              <div className="aspect-video bg-gradient-to-br from-green-500 to-teal-600 relative">
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-4 left-4">
                  <span className="inline-block px-3 py-1 bg-white/90 text-green-700 text-xs font-medium rounded-full">
                    Tutorial
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>Dec 5, 2024</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>8 min read</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  Advanced React Patterns for Better Code Organization
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  Explore modern React patterns including compound components,
                  render props, and custom hooks to write more maintainable
                  code.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="#">Read More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Article 2 */}
            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow p-0">
              <div className="aspect-video bg-gradient-to-br from-purple-500 to-pink-600 relative">
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-4 left-4">
                  <span className="inline-block px-3 py-1 bg-white/90 text-purple-700 text-xs font-medium rounded-full">
                    DevOps
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>Dec 3, 2024</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>10 min read</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  Optimizing Docker Builds for Next.js Applications
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  Learn how to create efficient Docker images with multi-stage
                  builds, caching strategies, and security best practices.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="#">Read More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Article 3 */}
            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow p-0">
              <div className="aspect-video bg-gradient-to-br from-orange-500 to-red-600 relative">
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-4 left-4">
                  <span className="inline-block px-3 py-1 bg-white/90 text-orange-700 text-xs font-medium rounded-full">
                    Design
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>Dec 1, 2024</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>6 min read</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  Building Accessible UI Components with Tailwind CSS
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  A practical guide to creating inclusive and accessible user
                  interfaces using Tailwind CSS utility classes and best
                  practices.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="#">Read More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Article 4 */}
            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow p-0">
              <div className="aspect-video bg-gradient-to-br from-indigo-500 to-blue-600 relative">
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-4 left-4">
                  <span className="inline-block px-3 py-1 bg-white/90 text-indigo-700 text-xs font-medium rounded-full">
                    Database
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>Nov 28, 2024</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>9 min read</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  Database Design Patterns for Scalable Applications
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  Explore essential database design patterns and optimization
                  techniques for building scalable web applications.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="#">Read More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Article 5 */}
            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow p-0">
              <div className="aspect-video bg-gradient-to-br from-emerald-500 to-green-600 relative">
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-4 left-4">
                  <span className="inline-block px-3 py-1 bg-white/90 text-emerald-700 text-xs font-medium rounded-full">
                    Performance
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>Nov 25, 2024</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>7 min read</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  Web Performance Optimization Techniques for 2024
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  Latest strategies and tools for optimizing web performance,
                  including Core Web Vitals and modern loading techniques.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="#">Read More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Article 6 */}
            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow p-0">
              <div className="aspect-video bg-gradient-to-br from-rose-500 to-pink-600 relative">
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-4 left-4">
                  <span className="inline-block px-3 py-1 bg-white/90 text-rose-700 text-xs font-medium rounded-full">
                    Career
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>Nov 22, 2024</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>5 min read</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  Essential Skills for Modern Full-Stack Developers
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  A comprehensive guide to the technical and soft skills needed
                  to excel as a full-stack developer in today's market.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="#">Read More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2">
            <Button variant="outline" disabled>
              Previous
            </Button>
            <Button variant="outline" className="bg-blue-600 text-white">
              1
            </Button>
            <Button variant="outline">2</Button>
            <Button variant="outline">3</Button>
            <Button variant="outline">Next</Button>
          </div>

          {/* Newsletter CTA */}
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-100 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Stay Updated with Latest Articles
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Get notified when new articles are published. Join our newsletter
              for weekly insights on web development, technology trends, and
              programming best practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
