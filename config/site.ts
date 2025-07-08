// config/site.ts
export const siteConfig = {
  name: 'TechBlog Pro',
  description:
    'A modern full-stack blog platform built with Next.js 15, TypeScript and cutting-edge technologies.',
  url: 'http://localhost:3000',
  ogImage: '/og-image.jpg',
  links: {
    github: 'https://github.com/fireballdev99/techblog-pro',
    linkedin: 'https://www.linkedin.com/in/vvachxra/',
    email: 'fireball.dev99@gmail.com',
  },
  author: {
    name: 'Wachirawit Phatthanasin',
    email: 'fireball.dev99@gmail.com',
    github: 'https://github.com/fireballdev99',
  },
  navigation: {
    main: [
      {
        title: 'Home',
        href: '/',
      },
      {
        title: 'Blog',
        href: '/blog',
      },
      {
        title: 'About',
        href: '/about',
      },
      {
        title: 'Contact',
        href: '/contact',
      },
    ],
    social: [
      {
        title: 'GitHub',
        href: 'https://github.com/fireballdev99',
        icon: 'github',
      },
      {
        title: 'LinkedIn',
        href: 'https://www.linkedin.com/in/vvachxra/',
        icon: 'linkedin',
      },
    ],
  },
  features: {
    auth: true,
    comments: true,
    newsletter: true,
    search: true,
    darkMode: true,
  },
};
