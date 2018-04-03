<template>
    <div class="col-xs-12 col-sm-6">
        <template v-if="selectedServer">
            <div class="col-xs-12 align-middle" :class="{'col-md-6': selectedServer.status !== 'Normal'}">
                <h2>Current server:</h2>
                <div>Server #{{ selectedServer.id }}</div>
                <div>Status {{ selectedServer.status }}</div>
            </div>
            <div v-if="selectedServer.status !== 'Normal'"
                 class="col-md-6 align-middle">
                <button class="btn btn-success"
                        @click="restoreServerStatus">
                    Restore status to Normal
                </button>
            </div>

        </template>
        <template v-else>
            <p>Select a server</p>
        </template>
    </div>

</template>

<script>
    import {eventBus} from "../../main";

    export default {
        data() {
            return {
                selectedServer: undefined
            }
        },
        methods:{
            restoreServerStatus(){
                this.selectedServer.status = 'Normal';
            }
        },
        created() {
            eventBus.$on("serverSelected", server => {
                this.selectedServer = server;
            });
        }
    }
</script>

<style>

</style>
