require.config({
    paths: {
        'babel-standalone': 'https://unpkg.com/@babel/standalone/babel.min',
        'vue': 'https://cdn.jsdelivr.net/npm/vue@2/dist/vue',
        'vuex': 'https://cdnjs.cloudflare.com/ajax/libs/vuex/3.5.1/vuex.min',
        'vue-router': 'https://cdnjs.cloudflare.com/ajax/libs/vue-router/3.2.0/vue-router.min',
        'http-vue-loader': 'https://unpkg.com/http-vue-loader@1.4.2/src/httpVueLoader',
        'babel': 'utils/babel',
        'component': 'utils/component'
    }
});

require(['babel!app']);