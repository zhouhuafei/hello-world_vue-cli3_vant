// 此文件通过export default config方式导出，无法应用在vue.config.js中。通过module.exports = config方式导出，可以应用在vue.config.js中。

const env = process.env.NODE_ENV;
const isDevelopment = env === 'development';

let name = '';
if (isDevelopment) {
    name = env;
} else {
    name = process.env.VUE_APP_TITLE;
}

const config = {
    NODE_ENV: name,
    name,
    publicPath: process.env.BASE_URL, // 经测试，如果vue.config.js的publicPath配置的是/beta 这里则是/beta/
    vueRouterBaseUrl: process.env.BASE_URL, // 经测试，如果vue.config.js的publicPath配置的是/beta 这里则是/beta/
    isDevelopment,
};

if (name === 'development') {
    config.apiDomain = '';
    config.apiBaseUrl = '/';
}

if (name === 'production') {
    config.apiDomain = '';
    config.apiBaseUrl = '/';
}

if (name === 'alpha') {
    config.apiDomain = '';
    config.apiBaseUrl = '/';
}

if (name === 'beta') {
    config.apiDomain = '';
    config.apiBaseUrl = '/';
}

export default config;
