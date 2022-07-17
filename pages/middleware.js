import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

// op1
// export async function middleware(req) {
//     // Token will exist if user is logged in
//     const url = req.nextUrl.clone()
//     const token = await getToken({ req, secret: 'process.env.JWT_SECRET' });
//     console.log("token", token);

//     const { pathname } = req.nextUrl;
//     console.log("path");
//     // Allow the request if the following is true...
//     // 1) the token exists
//     if (pathname.includes('/api/auth') || token) {
//         return NextResponse.next();
//     }

//     // Redirect them to login if they have token and are requesting a protected route
//     if (!token && pathname !== '/login') {
//         url.pathname = '/login' 
//         return NextResponse.redirect(url) 
        
//     }
// }

// op2
export async function middleware(req) {
    //token will exist if user is logged in
    const token = await getToken({ req, secret: process.env.JWT_SECRET });
  
    const { pathname } = req.nextUrl;
  
    // Allow the request if the following is true...
    // 1) It's a request for next-auth session and provider fetching
    // 2) the token exists
    if (pathname.includes("/api/auth") || token) {
      return NextResponse.next();
    }
    if (!token && pathname !== "/login") {
      const url = req.nextUrl.clone();
      url.pathname = "/login";
      return NextResponse.rewrite(url);
    }
  }
