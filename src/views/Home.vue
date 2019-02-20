<template>
    <div class="home">
        <van-button type="default">默认按钮</van-button>
        <van-button type="primary">主要按钮</van-button>
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
    </div>
</template>

<script>
    import axios from '@/utils/axios';

    export default {
        name: 'home',
        components: {},
        methods: {
            async init() {
                const dataInfo = await axios({
                    method: 'GET',
                    url: '/api/verify-code-canvas/',
                    data: {a: 1, b: 2},
                });
                console.log(dataInfo);
            },
        },
        mounted() {
            this.init();
        },
    };
</script>
