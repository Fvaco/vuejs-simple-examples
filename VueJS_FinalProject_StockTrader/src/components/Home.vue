<template>
    <div>
        <div class="jumbotron">
            <h1 class="display-4">Stock Trader</h1>
            <p class="lead">Your funds are {{funds | currency}}</p>
            <div class="text-muted" >
                <div class="small font-italic">You may Save & Load your data</div>
                <div class="small font-italic">Click on 'End Day' to begin a New Day!</div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            funds(){
                return this.$store.getters.funds;
            }
        }
    }
</script>

<style scoped>

</style>