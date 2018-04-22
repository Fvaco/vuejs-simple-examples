<template>
    <div id="dashboard">
        <div v-if="user">
            <h1>That's the dashboard!</h1>
            <p>You should only get here if you're authenticated!</p>
            <p>Your email address: {{ user.email }}</p>
        </div>
        <div v-else>
            <p>No user fetched</p>
        </div>

    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {}
        },
        computed: {
            user() {

                return this.$store.getters.user
            }
        },
        created() {
            this.$store.dispatch('fetchUser')
        }
    }
</script>

<style scoped>
    h1, p {
        text-align: center;
    }

    p {
        color: red;
    }
</style>