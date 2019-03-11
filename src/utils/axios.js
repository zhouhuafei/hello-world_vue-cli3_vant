import axios from 'axios';
import qs from 'qs';
import {
    merge,
} from 'lodash';

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
    opts = merge({
        method: 'GET', // 请求方式默认GET
        timeout: 30000, // 超时
        isHandleError: true, // 是否处理错误
        isHandleFailure: true, // 是否处理失败
        isHandleSuccess: false, // 是否处理成功
    }, opts);
    opts.method = (opts.method || opts.type || 'GET').toUpperCase();
    if (opts.method.toUpperCase() === 'GET') {
        opts.params = opts.params || opts.data;
    } else {
        if (Object.prototype.toString.call(opts.data).slice(8, -1).toLocaleLowerCase() === 'object') {
            opts.data = qs.stringify(opts.data);
        }
    }
    return new Promise(((resolve, reject) => {
        axios(opts).then(function (response) {
            const dataInfo = response.data;
            if (dataInfo.status === 'failure') { // 失败
                if (opts.isHandleFailure) {
                    /*
                    new Message({
                        config: {
                            content: `失败: ${dataInfo.message}`,
                        },
                    });
                    */
                }
            }
            if (dataInfo.status === 'success') { // 成功
                if (opts.isHandleSuccess) {
                    /*
                    new Message({
                        config: {
                            content: `成功: ${dataInfo.message}`,
                        },
                    });
                    */
                }
            }
            resolve(dataInfo);
        }).catch(function (error) {
            if (opts.isHandleError) {
                /*
                new Message({
                    config: {
                        content: error, // 这里的error其实是一个Error类型的数据
                    },
                });
                */
            }
            // 这里我个人建议返回格式如下。否则后续使用async/await时如果接口报错会导致js报错。
            reject({
                status: 'error',
                message: error,
            });
        });
    }));
}
