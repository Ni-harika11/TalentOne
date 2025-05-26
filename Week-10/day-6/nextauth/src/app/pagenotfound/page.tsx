import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div> 
        <h1 className='text-2xl font-bold text-center'>Page Not Found</h1>
        <p className='text-center'>The page you are looking for does not exist.</p>
        <Link href='/' className='text-blue-500 underline'>Go to Home</Link>
    </div>
  )
}

export default page
