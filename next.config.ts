import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "randomuser.me",
				pathname: "/**",
			},
		],
	},
	env: {
		RANDOMUSER_API: process.env.NEXT_PUBLIC_RANDOMUSER_API,
	},
};

export default nextConfig;
