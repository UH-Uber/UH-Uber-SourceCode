'use client'

import Link from 'next/link'
import styles from './page.module.css'

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-green-600 p-4">
      <div className="bg-white rounded-lg shadow-md w-full max-w-md p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-center">Create Account</h1>
          <p className="text-center text-gray-600 mt-2">
            Join the UH Manoa commuters community
          </p>
        </div>
        <form className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Create a password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-4 text-center text-sm">
          Already have an account?{' '}
          <Link href="/signin" className="text-green-600 hover:text-green-700">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  )
}