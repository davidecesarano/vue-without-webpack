import Vue from 'vue'
import Vuex from 'vuex'
import storemodule from 'babel!./modules/storemodule'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        storemodule
    }
})