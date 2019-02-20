import axios from 'axios';
import qs from 'qs';

/*
axios.interceptors.request.use(function (config) {
    // console.log( 'config.isInterceptRequest', config.isInterceptRequest )
    if (config.isInterceptRequest === false) {
        return config;
    } else {
        return new Promise(function (resolve) {
            const exp = Cookies.get('token_exp'); // 无值是undefined(理应为'',应是类库内部做了处理) 下面if会通不过 可以放心。
            let timestamp = (Date.parse(new Date())) / 1000;
            // console.log( 'token是否过期了', exp, timestamp, Number( exp ) - timestamp <= 300 )
            if (Number(exp) - timestamp <= 300) { // token过期了。重新设置token。
                fetch('/api/token/refresh', {token_refresh: true}, 'GET', {
                    isReturnResponse: true,
                    isInterceptRequest: false,
                }).then(function (response) {
                    const authorization = response.headers.authorization;
                    if (authorization) {
                        Cookies.set('jwt_token', authorization);
                        // 解析token中的user信息，并且保存
                        let tokenArray = authorization.split('.');
                        let user = atob(tokenArray[1]);
                        user = JSON.parse(user);
                        Cookies.set('token_exp', user.exp);
                        Cookies.set('user_name', user.mobile);
                        Cookies.set('is_authorizer', user.is_authorizer);
                        Cookies.set('is_license_valid', user.is_license_valid);
                    }
                    resolve(config);
                }).catch(function () {
                    resolve(config);
                });
            } else {
                resolve(config);
            }
        });
    }
}, function (error) {
    return Promise.reject(error);
});
*/

export default function (opts) {
    opts.method = (opts.method || opts.type || 'GET').toUpperCase();
    if (opts.method.toUpperCase() === 'GET') {
        opts.params = opts.params || opts.data;
    } else {
        if (Object.prototype.toString.call(opts.data).slice(8, -1).toLocaleLowerCase() === 'object') {
            opts.data = qs.stringify(opts.data);
        }
    }
    return axios(opts);
}
