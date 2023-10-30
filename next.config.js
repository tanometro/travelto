/* @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com']
  },
  remotePatterns: [
    {
      protocol: 'https',
      hostname: '**',
      port: '',
      pathname: '**',
    },
  ],

}

module.exports = nextConfig


