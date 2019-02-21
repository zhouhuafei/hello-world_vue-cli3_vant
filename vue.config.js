const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
    baseUrl: '/base-url',
    // publicPath: isDevelopment ? '/' : '/',
    devServer: {
        proxy: {
            '/api': {
                target: 'https://sbxx.top/admin/api',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': '',
                },
            },
        },
    },
};
