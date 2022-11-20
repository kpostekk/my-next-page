/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['md', 'mdx', 'tsx', 'jsx'],
}

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})

module.exports = withMDX(nextConfig)
