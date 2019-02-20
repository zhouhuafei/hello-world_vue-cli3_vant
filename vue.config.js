const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    publicPath: isProduction ? '/' : '/',
    devServer: {
        proxy: {
            '/api': {
                target: 'https://sbxx.top/admin/api',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
    },
};
