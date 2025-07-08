import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Rocket, Code, Shield, Heart } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 -mt-16">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 -z-10"></div>

        {/* Hero Content */}
        <div className="container max-w-screen-2xl px-4">
          <div className="mx-auto max-w-4xl text-center">
            {/* Main Title */}
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Build Amazing
              <span className="text-blue-600"> Tech Blogs</span>
              <br />
              with Modern Stack
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              A professional full-stack blog platform built with Next.js 15,
              TypeScript, and cutting-edge technologies. Perfect for developers
              who want to share their knowledge and build their personal brand.
            </p>

            {/* Action Buttons */}
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <Link href="/blog">Explore Articles</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </div>

            {/* Tech Stack Badges */}
            <div className="mt-16">
              <p className="text-sm font-semibold text-gray-500 mb-8">
                BUILT WITH MODERN TECHNOLOGIES
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="px-4 py-2 bg-gradient-to-r from-black to-gray-800 text-white rounded-lg text-sm font-medium border shadow-lg">
                  Next.js 15
                </div>
                <div className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg text-sm font-medium shadow-lg">
                  TypeScript
                </div>
                <div className="px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-lg text-sm font-medium shadow-lg">
                  Tailwind CSS
                </div>
                <div className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg text-sm font-medium shadow-lg">
                  Docker
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-screen-2xl px-8 lg:px-4">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose TechBlog Pro?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Built for developers, by developers. Everything you need to create
              and share amazing content.
            </p>
          </div>
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="size-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Rocket className="size-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Modern Stack</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Built with the latest technologies: Next.js 15, TypeScript,
                  and modern development tools.
                </CardDescription>
              </CardContent>
            </Card>
            {/* Feature 2 - Developer Friendly */}
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="size-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Code className="size-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Developer Friendly</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Clean code architecture, comprehensive documentation, and easy
                  customization.
                </CardDescription>
              </CardContent>
            </Card>
            {/* Feature 3 - Production Ready */}
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="size-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="size-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Production Ready</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Docker containerization, automated deployment, and scalable
                  architecture for real-world applications.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Feature 4 - Open Source */}
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="size-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Heart className="size-6 text-red-600" />
                </div>
                <CardTitle className="text-xl">Open Source</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Free to use, modify, and contribute. Join our community of
                  developers building the future.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Posts Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-screen-2xl px-8 lg:px-4">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Latest Articles
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Discover insights, tutorials, and best practices from the
              developer community.
            </p>
          </div>

          {/* Blog Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Blog Card 1 - Next.js */}
            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow bg-white p-0">
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-indigo-600 relative">
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 bg-white/90 text-blue-700 text-xs font-medium rounded-full">
                    Next.js
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                  Getting Started with Next.js 15: New Features and Best
                  Practices
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  Explore the latest features in Next.js 15 including improved
                  App Router, enhanced performance optimizations, and new
                  development tools.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Dec 8, 2024</span>
                  <span>5 min read</span>
                </div>
              </CardContent>
            </Card>

            {/* Blog Card 2 - TypeScript */}
            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow bg-white p-0">
              <div className="aspect-video bg-gradient-to-br from-purple-500 to-pink-600 relative">
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 bg-white/90 text-purple-700 text-xs font-medium rounded-full">
                    TypeScript
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                  Advanced TypeScript Patterns for Better Code Quality
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  Learn advanced TypeScript techniques including generics,
                  conditional types, and utility types to write more robust
                  applications.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Dec 5, 2024</span>
                  <span>8 min read</span>
                </div>
              </CardContent>
            </Card>

            {/* Blog Card 3 - Docker */}
            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow bg-white p-0">
              <div className="aspect-video bg-gradient-to-br from-teal-500 to-blue-600 relative">
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 bg-white/90 text-teal-700 text-xs font-medium rounded-full">
                    Docker
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                  Docker Best Practices for Full-Stack Development
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  Master Docker containerization with multi-stage builds,
                  optimization techniques, and production-ready deployment
                  strategies.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Dec 2, 2024</span>
                  <span>6 min read</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* View All Articles Button */}
          <div className="text-center">
            <Button size="lg" variant="outline" asChild>
              <Link href="/blog">View All Articles</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
