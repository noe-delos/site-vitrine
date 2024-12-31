const nextConfig = {
	images: {
		domains: [
			'api.microlink.io',
			'images.unsplash.com',
			'assets.aceternity.com',
		],
		formats: ['image/webp'],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920],
		minimumCacheTTL: 31536000,
	},
	headers: () => [
		{
			source: '/:path*',
			headers: [
				{
					key: 'Content-Security-Policy',
					value:
						"default-src 'self'; img-src 'self' api.microlink.io images.unsplash.com assets.aceternity.com; style-src 'self' 'unsafe-inline';",
				},
				{
					key: 'Cache-Control',
					value: 'public, max-age=31536000, immutable',
				},
			],
		},
	],
	experimental: {
		optimizeCss: true,
		optimizePackageImports: ['date-fns', 'lodash'],
	},
};

export default nextConfig;
