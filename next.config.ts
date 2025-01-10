import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	experimental: {
		authInterrupts: true,
		ppr: true,
		reactCompiler: true,
		dynamicIO: true,
	},
};

export default nextConfig;
