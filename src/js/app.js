import Vue from 'vue'
import router from 'babel!./router'
import store from 'babel!./store/index'
import App from 'component!App'

new Vue({
    el: '#app',
    render: h => h(App),
    router,
    store
})