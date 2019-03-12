<template>
    <div class="not-found">404 not-found</div>
</template>
<script>
    export default {
        name: 'not-found',
        methods: {},
        mounted() {
            console.log('NotFound mounted');
        },
        destroyed() {
            console.log('NotFound destroyed');
        },
    };
</script>
<style scoped>
    .not-found {
        text-align: center;
        line-height: 4;
    }
</style>
