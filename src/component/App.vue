<template>
    <div>
        <header></header>
        <!-- 根组件会有一些子组件, 我把这些子分为两种: 一种是子页面, 一种是页面布局结构 -->
        <app-login></app-login>
        <app-regieter></app-regieter>
        <div class="block">
            <el-slider v-model="value1" show-input>
            </el-slider>
        </div>
        <el-rate v-model="value4" :icon-classes="['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3']" void-icon-class="icon-rate-face-off"
            :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
        </el-rate>
        <el-rate v-model="value2" :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
        </el-rate>
        <router-link to="/login">登录</router-link>
        <router-view></router-view>
        <footer></footer>
        测试, 看看根组件能否成
    </div>
</template>

<script>
    export default {
        data() {
            return {
                value4: null,
                value1: 100,
                value2: 2
            }
        }
    }
</script>

<style scoped>
</style>
