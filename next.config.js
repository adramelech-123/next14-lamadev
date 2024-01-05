/** @type {import('next').NextConfig} */
const nextConfig = {
    // Configure the use of external images e.g. from pexels
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.pexels.com'
            }
        ]
    }
}

module.exports = nextConfig
