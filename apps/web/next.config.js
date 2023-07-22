module.exports = {
    reactStrictMode: true,
    transpilePackages: ["ui"],

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                // For pokemon assets
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
