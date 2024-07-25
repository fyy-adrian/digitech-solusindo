import { jwtDecode } from 'jwt-decode';
import { NextResponse } from 'next/server'
 
export function middleware(request) {
  const token = request.cookies.get('jwt');

  if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }else if(token && request.nextUrl.pathname.startsWith('/login')) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}