<template>
    <div>
        <message :text="hello"></message>
        <router-link to="/page">Change page</router-link>
    </div>
</template>

<script lang="babel">
    import Message from 'component!./components/Message'

    export default {
        components: {
            Message
        },
        data() {
            return {
                hello: null
            }
        },
        mounted() {
            this.hello = this.$store.getters['storemodule/message']
        }
    }
</script>