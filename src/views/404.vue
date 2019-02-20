<template>
    <div class="not-fount">
        <h1>404 not-fount</h1>
    </div>
</template>
<script>
    export default {
        name: 'about',
        methods: {
            async getA() {
                return 123;
            },
        },
        async mounted() {
            var o = await this.getA();
            console.log(o);
        },
    };
</script>
<style scoped>
    .not-fount {
        font-size: 16px;
        text-align: center;
        line-height: 4;
    }
</style>
