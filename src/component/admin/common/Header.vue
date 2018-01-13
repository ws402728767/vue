<template>
    <el-dropdown class="header">
        <span class="el-dropdown-link">
            <span>你好,{{uname}}</span>
            <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>modify</el-dropdown-item>
            <el-dropdown-item @click.native="logout">logout</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</template>

<script>
    export default {
        data () {
            return {
                uname:'admin'
            }
        },
        methods: {
            logout(){
                this.$http.get(this.$api.logout)
                    .then( res => {
                        if (res.data.status === 0) {
                            this.$router.push({name:'login'})
                        }else {
                            this.$alert(res.data.gessage)
                        }
                    })
            }
        }
    }
</script>

<style scoped>
    .header{
        width: 100%;
        text-align: right;
    }
</style>