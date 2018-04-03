import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
    methods: {
        serverSelected(server){
            this.$emit("serverSelected", server);
        },
        serverStatusUpdated(server, status){
            this.$emit("serverStatusUpdated", server, status);
        }
    }
});

new Vue({
    el: '#app',
    render: h => h(App)
})
