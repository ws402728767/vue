// 导入vue相关的第三方包
import Vue from "vue";
import VueRouter from "vue-router";

// 将axios导入vue原型中
import axios from "axios";
import api from "./js/api.js";
import { domain } from "./js/api.js";
axios.defaults.baseURL = domain;
Vue.prototype.$http = axios;

// 将api配置对象导入Vue原型中
Vue.prototype.$api = api;

// vue实例使用路由
Vue.use(VueRouter);

// 导入根组件
import App from "./component/App.vue";

// 导入路由配置
import RouterConfig from "./router/index.js"

// 把根组件渲染到指定视图
new Vue({
    el: '#app',
    render: c => c(App),
    router: new VueRouter(RouterConfig)
})