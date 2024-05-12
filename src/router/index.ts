import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/home'
    }, {
        path: '/home',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/home/index.vue'),
        meta: {
            title: '首页'
        }
    }, {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "login" */ '@/views/login/index.vue'),
        meta: {
            title: '登录'
        }
    }, {
        path: '/register',
        name: 'Register',
        component: () => import(/* webpackChunkName: "register" */ '@/views/register/index.vue'),
        meta: {
            title: '注册',
        }
    },]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, _, next) => {
    // 设置页面标题
    document.title = to.meta.title as string
    // 判断是否登录
    const token = localStorage.getItem('token')
    if (to.path === '/register') {
        next() // 未登录，到注册页面
        return
    }
    if (token && to.path === '/login') {
        next('/') // 已登录，重定向到其他页面（例如首页）
    } else if (token || to.path === '/login') {
        next() // 已登录或者访问的是登录页面，继续正常导航
    } else {
        next('/login'); // 未登录，重定向到登录页面
    }
})

export default router