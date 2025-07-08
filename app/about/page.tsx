import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Shield, Rocket, User } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container max-w-screen-2xl px-8 lg:px-4">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-8">
            About Me
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Hi, I'm {siteConfig.author.name} - a passionate developer building
            modern web applications.
          </p>

          {/* เตรียมไว้สำหรับ content เพิ่มเติม */}
          <div className="space-y-8">
            <div className="space-y-16">
              {/* Story Section */}
              <div className="prose prose-lg max-w-none">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      My Developer Journey
                    </h2>
                    <div className="space-y-4 text-gray-600">
                      <p>
                        I started my development journey with a curiosity about
                        how things work behind the scenes. What began as simple
                        HTML pages has evolved into building complex, scalable
                        applications that solve real-world problems.
                      </p>
                      <p>
                        My passion lies in creating clean, efficient code and
                        sharing knowledge with the developer community. I
                        believe in continuous learning and staying updated with
                        the latest technologies and best practices.
                      </p>
                      <p>
                        Through TechBlog Pro, I aim to create a platform where
                        developers can share insights, learn from each other,
                        and build amazing projects together.
                      </p>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="aspect-square bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl flex items-center justify-center">
                      <User className="h-24 w-24 text-blue-600" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills Section */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  Technical Expertise
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Frontend */}
                  <Card className="p-6 border-0 shadow-lg">
                    <CardHeader className="pb-4">
                      <div className="size-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                        <Code className="size-6 text-blue-600" />
                      </div>
                      <CardTitle className="text-xl">
                        Frontend Development
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full">
                            React
                          </span>
                          <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full">
                            Next.js
                          </span>
                          <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full">
                            TypeScript
                          </span>
                          <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full">
                            Tailwind CSS
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Backend */}
                  <Card className="p-6 border-0 shadow-lg">
                    <CardHeader className="pb-4">
                      <div className="size-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                        <Shield className="size-6 text-green-600" />
                      </div>
                      <CardTitle className="text-xl">
                        Backend & Database
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-green-50 text-green-700 text-sm rounded-full">
                            Node.js
                          </span>
                          <span className="px-3 py-1 bg-green-50 text-green-700 text-sm rounded-full">
                            MySQL
                          </span>
                          <span className="px-3 py-1 bg-green-50 text-green-700 text-sm rounded-full">
                            Prisma
                          </span>
                          <span className="px-3 py-1 bg-green-50 text-green-700 text-sm rounded-full">
                            Redis
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* DevOps */}
                  <Card className="p-6 border-0 shadow-lg">
                    <CardHeader className="pb-4">
                      <div className="size-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                        <Rocket className="size-6 text-purple-600" />
                      </div>
                      <CardTitle className="text-xl">DevOps & Tools</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-purple-50 text-purple-700 text-sm rounded-full">
                            Docker
                          </span>
                          <span className="px-3 py-1 bg-purple-50 text-purple-700 text-sm rounded-full">
                            Git
                          </span>
                          <span className="px-3 py-1 bg-purple-50 text-purple-700 text-sm rounded-full">
                            CI/CD
                          </span>
                          <span className="px-3 py-1 bg-purple-50 text-purple-700 text-sm rounded-full">
                            AWS
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Values Section */}
              <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  My Development Philosophy
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Clean Code First
                      </h3>
                      <p className="text-gray-600">
                        I believe in writing code that is not just functional,
                        but readable, maintainable, and elegant. Clean code is a
                        love letter to your future self.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Continuous Learning
                      </h3>
                      <p className="text-gray-600">
                        Technology evolves rapidly, and so should we. I'm
                        committed to staying current with emerging trends and
                        best practices in software development.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        User-Centered Design
                      </h3>
                      <p className="text-gray-600">
                        Every line of code should serve the end user. I focus on
                        creating intuitive, accessible, and performant
                        applications that solve real problems.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Knowledge Sharing
                      </h3>
                      <p className="text-gray-600">
                        The best way to solidify learning is to teach others.
                        I'm passionate about contributing to the developer
                        community through articles, tutorials, and open source.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="text-center bg-gradient-to-r from-blue-50 to-indigo-100 rounded-2xl p-8 md:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Let's Connect & Collaborate
                </h2>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  I'm always interested in connecting with fellow developers,
                  discussing new technologies, or collaborating on exciting
                  projects. Feel free to reach out!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <Link href="/contact">Get In Touch</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/blog">Read My Articles</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
