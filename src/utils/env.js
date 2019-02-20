const name = process.env.NODE_ENV;

export default {
    name,
    isDevelopment: name === 'development',
    config: {
        development: {
            publicPath: '/',
            apiBaseUrl: '/',
        },
        production: {
            publicPath: '/',
            apiBaseUrl: '',
        },
        alpha: {
            publicPath: '/',
            apiBaseUrl: '',
        },
    },
};
