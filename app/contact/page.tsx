import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container max-w-screen-2xl px-8 lg:px-4">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              Get In Touch
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear
              from you. Send me a message and I'll get back to you as soon as
              possible.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 border-0 shadow-lg">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl">Send a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form className="space-y-6">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-gray-700"
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-700"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  {/* Subject Field */}
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium text-gray-700"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="What's this about?"
                      className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      placeholder="Tell me about your project or what you'd like to discuss..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-200"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="p-8 border-0 shadow-lg">
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Email */}
                  <div className="flex items-center space-x-4">
                    <div className="size-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Mail className="size-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600">
                        {siteConfig.author.email || 'contact@techblogpro.com'}
                      </p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center space-x-4">
                    <div className="size-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <MapPin className="size-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Location</h3>
                      <p className="text-gray-600">Bangkok, Thailand</p>
                    </div>
                  </div>

                  {/* Response Time */}
                  <div className="flex items-center space-x-4">
                    <div className="size-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Phone className="size-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Response Time
                      </h3>
                      <p className="text-gray-600">Usually within 24 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="p-8 border-0 shadow-lg">
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl">Connect on Social</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* GitHub */}
                    <Link
                      href={siteConfig.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
                    >
                      <div className="size-10 bg-gray-100 rounded-lg flex items-center justify-center">
                        <Github className="size-5 text-gray-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">GitHub</h3>
                        <p className="text-sm text-gray-600">
                          Check out my code
                        </p>
                      </div>
                    </Link>

                    {/* LinkedIn */}
                    {siteConfig.links.linkedin && (
                      <Link
                        href={siteConfig.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-4 p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
                      >
                        <div className="size-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Linkedin className="size-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            LinkedIn
                          </h3>
                          <p className="text-sm text-gray-600">
                            Professional network
                          </p>
                        </div>
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Info */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-100 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Available for Projects
                </h3>
                <p className="text-gray-600 mb-6">
                  I'm currently available for freelance projects and full-time
                  opportunities. Let's discuss how we can work together to bring
                  your ideas to life.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>✓ Full-stack web development</p>
                  <p>✓ Technical consulting</p>
                  <p>✓ Code review and mentoring</p>
                  <p>✓ System architecture design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
