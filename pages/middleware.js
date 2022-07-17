import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
    // Token will exist if user is logged in
    const url = req.nextUrl.clone()
    const token = await getToken({ req, secret: 'process.env.JWT_SECRET' });
    console.log("token", token);

    const { pathname } = req.nextUrl;
    console.log("path");
    // Allow the request if the following is true...
    // 1) the token exists
    if (pathname.includes('/api/auth') || token) {
        return NextResponse.next();
    }

    // Redirect them to login if they have token and are requesting a protected route
    if (!token && pathname !== '/login') {
        url.pathname = '/login' 
        return NextResponse.redirect(url) 
        
    }
}

// export const config = {
//     matcher: ['/login', '/'],
//   }
