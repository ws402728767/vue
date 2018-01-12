<template>
    <div>
        <header></header>

        <!-- 根组件会有一些子组件, 我把这些子分为两种: 一种是子页面, 一种是页面布局结构 -->
        <app-login></app-login>
        <app-regieter></app-regieter>
        <router-link to="/login">登录</router-link>
        <router-view></router-view>
        <footer></footer>
        测试, 看看根组件能否成
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>

</style>