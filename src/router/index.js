import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
    {
        path: "",
        reditect: "/home"
    },
    {
        path: "/home",
        component:
    }
]
const router = new VueRouter({
    routes,
    mode: "history"
})
export default router
