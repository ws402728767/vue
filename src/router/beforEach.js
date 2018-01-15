import axios from "axios";
import api from "../js/api.js";

export default function (to, from, next) {
    var toPage = to.path;
    console.log(toPage);
    var isLogin = false;

    axios.get(api.isLogin)
        .then(res => {
            if (res.data.code == "logined") {
                isLogin = true;
            }
            console.log(isLogin);
            if (toPage == "/login" && isLogin) {
                next("/admin")
            } else if (toPage !="/login" && !isLogin) {
                next({name:'login',query:{nextPage:to.fullPath}})
            } else {
                next();
            }
        })
}