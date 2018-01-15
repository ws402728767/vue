// index路由配置
import Login from "../component/login/Login.vue";
import Admin from "../component/admin/Admin.vue";

import goodsCtList from "../component/admin/goods/content/List.vue";
import goodsCtEdit from "../component/admin/goods/content/Edit.vue";

import goodsCglist from "../component/admin/goods/category/List.vue";
import goodsCgEdit from "../component/admin/goods/category/Edit.vue";

let AdminChildren = [
    { name: 'goodsCtList', path: 'goods/content/list', component: goodsCtList },
    { name: 'goodsCtAdd', path: 'goods/content/edit', component: goodsCtEdit },
    { name: 'goodsCtEdit', path: 'goods/content/edit/:id', component: goodsCtEdit },

    { name: 'goodsCgList', path: 'goods/category/list', component: goodsCglist },
    { name: 'goodsCgAdd', path: 'goods/category/add', component: goodsCgEdit },
    { name: 'goodsCgEdit', path: 'goods/category/edit/:id', component: goodsCgEdit },
];

export default {

    routes: [
        { name: 'login', path: '/login', component: Login },
        // redirect 重定向
        { name: 'index', redirect: '/admin',path:'/' },
        { name: 'admin', path: '/admin', component: Admin, children: AdminChildren }
    ]
}