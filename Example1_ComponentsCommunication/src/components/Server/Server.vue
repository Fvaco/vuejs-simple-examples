<template>
    <a href @click.prevent="serverSelected" class="list-group-item">
        <div>Server #{{ server.id }}</div>
        <div>Status: {{ server.status }}</div>
    </a>
</template>

<script>
    import {eventBus} from "../../main";

    export default {
        props: {
            server: Object
        },
        methods: {
            serverSelected() {
                eventBus.$emit("serverSelected", this.server);
            }
        }
    }
</script>

<style scoped>
</style>