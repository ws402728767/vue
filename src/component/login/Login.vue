<template>
    <div class="login">
        <h1>后台管理</h1>
        <!-- 表单元素 -->
        <el-form :model="loginform" status-icon :rules="rules" ref="loginform" label-width="100px" class="demo-ruleForm" label-position="left">
            <el-form-item label="用户名" prop="uname">
                <el-input type="text" auto-complete="off" v-model="loginform.uname"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="upwd">
                <el-input type="password" auto-complete="off" v-model="loginform.upwd"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('loginform')">登录</el-button>
                <el-button @click="resetForm('loginform')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                loginform: {
                    uname: '',
                    upwd: ''
                },
                rules: {
                    uname: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    upwd: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            login() {
                this.$http.post(this.$api.login, this.loginform)
                    .then(res => {
                        if (res.data.status === 0) {
                            this.$alert('登录成功，正在跳转');
                            console.log(this);
                            this.$router.push({name:'admin'});
                        }else {
                            this.$alert(res.data.message);
                        }
                    })
            },

            submitForm(formName) {
                this.$refs[formName].validate(res => {
                    if (res) {
                        this.login()
                    } else {
                        this.$alert('请自重')
                    }
                })
            },
            resetForm(formName) {
                this.$refs[formName].resetFields()
            }
        }
    }
</script>

<style scoped>
    .login {
        width: 500px;
        height: 300px;
        margin: 0 auto;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        border: 1px solid #fff;
        padding: 20px;
        border-radius: 10px;
    }

    .login h1 {
        text-align: center;
        transform: translateY(-100px)
    }
</style>