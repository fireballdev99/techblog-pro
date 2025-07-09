'use client';

import { signIn, getSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Github, Chrome } from 'lucide-react';

export default function SignInPage() {
  const [loading, setLoading] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Check if user is already signed in
    getSession().then((session) => {
      if (session) {
        router.push('/');
      }
    });
  }, [router]);

  const handleSignIn = async (provider: string) => {
    setLoading(provider);
    try {
      const result = await signIn(provider, {
        callbackUrl: '/',
        redirect: false,
      });

      if (result?.error) {
        console.error('Sign in error:', result.error);
      } else if (result?.url) {
        router.push(result.url);
      }
    } catch (error) {
      console.error('Sign in error:', error);
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-md w-full space-y-8 p-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-white">
            Welcome to TechBlog Pro
          </h2>
          <p className="mt-2 text-sm text-gray-300">
            Sign in to your account to continue
          </p>
        </div>

        <div className="mt-8 space-y-4">
          <Button
            onClick={() => handleSignIn('google')}
            disabled={loading === 'google'}
            className="w-full flex items-center justify-center gap-3 bg-white text-gray-900 hover:bg-gray-100 h-12"
          >
            {loading === 'google' ? (
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900"></div>
            ) : (
              <Chrome className="h-5 w-5" />
            )}
            Continue with Google
          </Button>

          <Button
            onClick={() => handleSignIn('github')}
            disabled={loading === 'github'}
            className="w-full flex items-center justify-center gap-3 bg-gray-800 text-white hover:bg-gray-700 h-12"
          >
            {loading === 'github' ? (
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            ) : (
              <Github className="h-5 w-5" />
            )}
            Continue with GitHub
          </Button>
        </div>

        <div className="text-center text-sm text-gray-400">
          By signing in, you agree to our{' '}
          <a href="#" className="text-purple-400 hover:text-purple-300">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#" className="text-purple-400 hover:text-purple-300">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
}
