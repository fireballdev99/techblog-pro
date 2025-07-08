import { Button } from '@/components/ui/button';
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
              <div className="flex flex-wrap items-center justify-center gap-6">
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
        </div>
      </section>
    </div>
  );
}
