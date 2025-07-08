import { siteConfig } from '@/config/site';

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
            {/* Content sections จะเพิ่มทีหลัง */}
          </div>
        </div>
      </div>
    </div>
  );
}
