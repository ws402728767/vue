// 导入vue相关的第三方包
import Vue from "vue";
import VueRouter from "vue-router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "normalize.css";

// 全局样式
import "./less/index.less";

// 将axios导入vue原型中
import axios from "axios";
import api from "./js/api.js";

axios.defaults.baseURL = "http://127.0.0.1:8899";
axios.defaults.withCredentials = true;
Vue.prototype.$http = axios;

// 将api配置对象导入Vue原型中
Vue.prototype.$api = api;

// vue实例使用路由
Vue.use(VueRouter);

// vue使用elementUI
Vue.use(ElementUI);

// 导入根组件
import App from "./component/App.vue";

// 导入路由配置
import RouterConfig from "./router/index.js";
import beforEach from "./router/beforEach.js";
let router = new VueRouter(RouterConfig);
router.beforeEach(beforEach);
// 把根组件渲染到指定视图
new Vue({
    el: '#app',
    render: c => c(App),
    router: router
})