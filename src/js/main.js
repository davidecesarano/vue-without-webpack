require.config({
    paths: {
        'babel': 'utils/babel',
        'component': 'utils/component',
        'babel-standalone': 'https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min',
        'babel-polyfill': 'https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.10.4/polyfill.min',
        'vue': 'https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.21/vue',
        'vuex': 'https://cdnjs.cloudflare.com/ajax/libs/vuex/3.5.1/vuex.min',
        'vue-router': 'https://cdnjs.cloudflare.com/ajax/libs/vue-router/3.2.0/vue-router.min',
        'http-vue-loader': 'https://unpkg.com/http-vue-loader@1.4.2/src/httpVueLoader'
    }
});

require(['babel!app']);