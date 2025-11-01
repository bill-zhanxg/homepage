import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	experimental: {
		authInterrupts: true,
	},
	cacheComponents: true,
	reactCompiler: true,
};

export default nextConfig;
