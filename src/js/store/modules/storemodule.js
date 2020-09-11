export default {
    namespaced: true,
    state: {
        message: 'Hello World from Vuex!'
    },
    getters: {
        message: state => {
            return state.message
        }
    }
}