// types/index.ts

// Navigation types
export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
  icon?: string;
}

// for future plan
export interface MainNavItem extends NavItem {}

export interface SidebarNavItem extends NavItem {
  items?: SidebarNavItem[];
}

// Site configuration types
export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage?: string;
  links: {
    github: string;
    linkedin?: string;
    email?: string;
  };
  author: {
    name: string;
    email?: string;
    linkedin?: string;
    github?: string;
  };
  navigation: {
    main: MainNavItem[];
    social: NavItem[];
  };
  features: {
    auth: boolean;
    comments: boolean;
    newsletter: boolean;
    search: boolean;
    darkMode: boolean;
  };
}

// Blog post types
export interface BlogPost {
  id: string;
  title: string;
  description?: string;
  content: string;
  slug: string;
  published: boolean;
  publishedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
  author: Author;
  tags: Tag[];
  category?: Category;
  image?: string;
  readingTime?: number;
}

export interface Author {
  id: string;
  name: string;
  email: string;
  image?: string;
  bio?: string;
  github?: string;
  linkedin?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
  description?: string;
  createdAt: Date;
  posts?: BlogPost[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  createdAt: Date;
  posts?: BlogPost[];
}

// User and authentication types
export interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

export enum UserRole {
  ADMIN = "ADMIN",
  USER = "USER",
  AUTHOR = "AUTHOR",
}

// API response types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

// Component props types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface LayoutProps extends BaseComponentProps {
  title?: string;
  description?: string;
}

// Search and filter types
export interface SearchFilters {
  query?: string;
  category?: string;
  tags?: string[];
  author?: string;
  sortBy?: "newest" | "oldest" | "popular";
  page?: number;
  limit?: number;
}

export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}
