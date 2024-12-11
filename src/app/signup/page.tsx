'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/react';

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setIsLoading(false);
      return;
    }

    if (!formData.email.endsWith('@hawaii.edu')) {
      setError('Please use your hawaii.edu email address');
      setIsLoading(false);
      return;
    }

    try {
      // Create the user
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to sign up');
      }

      // If signup successful, sign in the user automatically
      const result = await signIn('credentials', {
        email: formData.email,
        password: formData.password,
        callbackUrl: '/profile',
        redirect: true,
      });

      if (result?.error) {
        setError('Failed to sign in after registration');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-green-600 p-4">
      <div className="bg-white rounded-lg shadow-md w-full max-w-md p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-center">Create Account</h1>
          <p className="text-center text-gray-600 mt-2">
            Join the UH Manoa commuters community
          </p>
        </div>
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                placeholder="Enter your full name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md mt-1"
                required
              />
            </label>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                placeholder="Enter your hawaii.edu email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md mt-1"
                required
                pattern=".*@hawaii\.edu$"
              />
            </label>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
                placeholder="Create a password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md mt-1"
                required
                minLength={8}
              />
            </label>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData((prev) => ({ ...prev, confirmPassword: e.target.value }))}
                placeholder="Confirm your password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md mt-1"
                required
                minLength={8}
              />
            </label>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="
              w-full bg-green-600 text-white py-2 px-4 rounded-md
              hover:bg-green-700 transition-colors
              disabled:bg-green-400
            "
          >
            {isLoading ? 'Creating Account...' : 'Sign Up'}
          </button>
        </form>
        <div className="mt-4 text-center text-sm">
          <span>Already have an account?</span>
          {' '}
          <Link href="/signin" className="text-green-600 hover:text-green-700">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
