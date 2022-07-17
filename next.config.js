/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env:{
    clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
    clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
    secret: process.env.JWT_SECRET
  }
}
