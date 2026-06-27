import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            { protocol: 'https', hostname: 'images.unsplash.com' },
            { protocol: 'https', hostname: 'bvimit.co.in' },
            { protocol: 'https', hostname: 'tour.panoee.net' }
        ]
    },
    async rewrites() {
        return [
            {
                source: '/legacy/pdfs/:path*',
                destination: '/pdf/:path*',
            },
            {
                source: '/legacy/images/:path*',
                destination: '/images/:path*',
            },
            {
                source: '/legacy/facultyresume/:path*',
                destination: '/facultyresume/:path*',
            },
            {
                source: '/legacy/gifs/:path*',
                destination: '/gifs/:path*',
            },
            {
                source: '/legacy/svg/:path*',
                destination: '/svg/:path*',
            },
            {
                source: '/legacy/admin2/:path*',
                destination: '/admin2/:path*',
            },
            {
                source: '/legacy/facultyimage/:path*',
                destination: '/facultyimage/:path*',
            },
        ];
    }
};

export default nextConfig;
