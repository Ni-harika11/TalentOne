import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;

  // If no token, redirect to login
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Otherwise, continue
  return NextResponse.next();
}

// Match paths you want to protect
export const config = {
  matcher: ['/todos/:path*'], // Adjust this to match your protected path(s)
};
