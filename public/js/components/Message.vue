<template>
    <div>
        <h1>{{ text }}</h1>
    </div>
</template>

<script lang="babel">
    export default {
        props: {
            text: String
        }
    }
</script>

<style scoped>
    h1 {
        color: red;
    }
</style>