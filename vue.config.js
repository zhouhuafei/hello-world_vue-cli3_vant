const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
    publicPath: isDevelopment ? '/base-url/' : '/base-url/',
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
