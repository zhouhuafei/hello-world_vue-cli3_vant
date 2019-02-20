const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    publicPath: isProduction ? '/' : '/',
    devServer: {
        proxy: {
            '/api': 'https://www.sbxx.top/admin/api',
        },
    },
};
