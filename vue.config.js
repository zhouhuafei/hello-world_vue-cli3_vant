console.log('process.env.VUE_APP_TITLE', process.env.VUE_APP_TITLE);

let publicPath = '/';

if (process.env.VUE_APP_TITLE === 'alpha') {
    publicPath = '/alpha';
}

if (process.env.VUE_APP_TITLE === 'beta') {
    publicPath = '/beta';
}

module.exports = {
    publicPath,
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
