'use client';

import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { Github, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container max-w-screen-2xl py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 px-4">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="space-y-4">
              <div>
                <Link href="/" className="text-xl font-bold">
                  {siteConfig.name}
                </Link>
                <p className="mt-2 text-sm text-muted-foreground max-w-md">
                  {siteConfig.description}
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">
                  Built with Next.js 15, TypeScript & Docker
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {siteConfig.navigation.main.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-sm font-semibold mb-2">Connect</h3>
            <ul className="space-y-2 text-sm">
              {siteConfig.navigation.social.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                  >
                    {item.icon === 'github' && <Github className="h-4 w-4" />}
                    {item.icon === 'linkedin' && (
                      <Linkedin className="h-4 w-4" />
                    )}
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border/40 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} {siteConfig.name}. All rights
              reserved.
            </p>
            <p>Developed by {siteConfig.author.name} | Learning & Building</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
