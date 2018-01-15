<template>
    <el-row>
        <el-col :span="24">
            <h5>logo</h5>
            <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#545c64"
                text-color="#fff" active-text-color="#ffd04b">


                <el-submenu v-for="(item,index) in meun" :key="index" :index="item.title" class="asidenav">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>{{item.title}}</span>
                    </template>

                    <el-menu-item v-if="item.children.length" v-for="(subitem,subindex) in item.children" :key="subindex" index="subitem.title">
                        <router-link :to="subitem.path">{{subitem.title}}</router-link>
                    </el-menu-item>
                </el-submenu>


            </el-menu>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        data() {
            return {
                meun: [
                    {
                        title: '资源下载',
                        children: [
                            { title: '内容管理', path: '/a' },
                            { title: '类别管理', path: '/b' },
                            { title: '评论管理', path: '/c' }
                        ]
                    },
                    {
                        title: '购物商场',
                        children: [
                            { title: '内容管理', path: '/a' },
                            { title: '类别管理', path: '/b' },
                            { title: '评论管理', path: '/c' }
                        ]
                    },
                    {
                        title: '订单管理',
                        children: [
                            { title: '内容管理', path: '/a' },
                            { title: '类别管理', path: '/b' },
                            { title: '评论管理', path: '/c' }
                        ]
                    }
                ]
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }

</script>

<style scoped>

    .asidenav{
        text-align:left;
    }
    .asidenav a{
        color:steelblue;
    }
    .el-menu{
        border: none;
    }
</style>