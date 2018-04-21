<template>
    <div>
        <div class="card-columns">
            <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock"></app-stock>
        </div>

    </div>
</template>

<script>
    import Stock from "./Stock.vue";

    export default {

        computed:{
            stocks(){
                return this.$store.getters.stocks;
            }
        },
        components: {
            appStock: Stock
        }
    }
</script>

<style scoped>

</style>