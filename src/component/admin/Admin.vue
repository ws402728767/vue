<template>
    <el-container class="admin">
        <el-aside width="200px">
            <Aside></Aside>
        </el-aside>
        <el-container>
            <el-header>
                <Header></Header>
            </el-header>
            <el-main>
                <router-view ></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import Header from "./common/Header.vue";
    import Aside from "./common/Aside.vue"

    export default {
        components: {
            Header,
            Aside
        }
    }

</script>

<style scoped>
    .el-header {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        background-color: #545c64;
        color: #333;
        text-align: center;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: left;
        line-height: 50px;
    }

    .admin {
        height: 100%;
    }
</style>