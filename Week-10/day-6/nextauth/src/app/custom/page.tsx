import Link from 'next/link'
import React from 'react'

export const page = () => {
  return (
    <div className="flex h-screen items-center justify-center flex-col bg-gray-100 text-gray-800">
    <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
    <p className="mb-6">Sorry, the page you are looking for doesn't exist.</p>
    <Link href="/" className="text-blue-500 underline">Go back home</Link>
  </div>
  )
}
