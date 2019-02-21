<template>
    <div class="home">
        <router-link to="/not-found">Go to Not - Found</router-link>
        <div class="van-hairline--bottom">此乃首页</div>
        <input type="text" placeholder="请输入">
        <div>上面是输入框</div>
        <div>下面是ui框架vant</div>
        <van-cell-group>
            <van-field v-model="value" placeholder="请输入用户名"/>
        </van-cell-group>
        <div style="height: 20px;"></div>
        <van-cell-group>
            <van-field
                    v-model="username"
                    required
                    clearable
                    label="用户名"
                    right-icon="question-o"
                    placeholder="请输入用户名"
                    @click-right-icon="$toast('question')"
            />
            <van-field
                    v-model="password"
                    type="password"
                    label="密码"
                    placeholder="请输入密码"
                    required
            />
        </van-cell-group>
        <div style="height: 20px;"></div>
        <van-button type="default">默认按钮</van-button>
        <van-button type="primary">主要按钮</van-button>
        <div style="height: 20px;"></div>
        <van-cell-group>
            <van-cell title="单元格" value="内容"/>
            <van-cell title="单元格" value="内容"/>
            <van-cell title="单元格" value="内容"/>
            <van-cell title="单元格" value="内容"/>
            <van-cell title="单元格" value="内容"/>
            <van-cell title="单元格" value="内容"/>
            <van-cell title="单元格" value="内容"/>
            <van-cell title="单元格" value="内容" label="描述信息"/>
        </van-cell-group>
        <div style="height: 20px;"></div>
    </div>
</template>

<script>
    import axios from '@/utils/axios';
    import env from '@/utils/env';

    export default {
        name: 'home',
        components: {},
        data() {
            return {
                value: '123',
                username: '',
                password: '',
            };
        },
        methods: {
            async init() {
                const dataInfo = await axios({
                    method: 'GET',
                    url: '/api/verify-code-canvas/',
                    data: {a: 1, b: 2},
                });
                console.log('process.env.NODE_ENV process.env.VUE_APP_TITLE', process.env.NODE_ENV, process.env.VUE_APP_TITLE); // 开发环境process.env.VUE_APP_TITLE值为undefined，因未配置。
                console.log(dataInfo, 'env', env);
            },
        },
        mounted() {
            this.init();
        },
    };
</script>
