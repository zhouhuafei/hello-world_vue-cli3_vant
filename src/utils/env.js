const env = process.env.NODE_ENV;
const isDevelopment = env === 'development';
let name = '';
if (isDevelopment) {
    name = env;
} else {
    name = process.env.VUE_APP_TITLE;
}

export default {
    name,
    isDevelopment,
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
