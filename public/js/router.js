import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'component!pages/Home'
import Page from 'component!pages/Page'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home,
            name: 'home'
        },
        {
            path: '/page',
            component: Page,
            name: 'page'
        }
    ]
})

export default router