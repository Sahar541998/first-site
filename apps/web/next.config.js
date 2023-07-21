module.exports = {
    reactStrictMode: true,
    transpilePackages: ["ui"],
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
