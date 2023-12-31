module.exports = {
    reactStrictMode: true,
    transpilePackages: ["ui", "utils"],

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                // For pokemon2 assets
                hostname: 'raw.githubusercontent.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/login',
                permanent: true,
            },
        ]
    },
};
