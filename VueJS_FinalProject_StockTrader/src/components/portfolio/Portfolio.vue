<template>
    <div>
        <div v-if="!stocks.length" class="row align-items-cente mt-lg-5">
            <div class="col text-center">
                <h3 class="text-muted">You don't have any stock in your portfolio </h3>
                <div class="text-muted">Go to Stocks view to buy some stocks</div>
            </div>
        </div>

        <div class="card-columns">
            <app-stock :key="stock.id" v-for="stock in stocks" :stock="stock"></app-stock>
        </div>
    </div>

</template>

<script>
    import {mapGetters} from 'vuex';
    import Stock from './Stock.vue';

    export default {
        computed: {
            ...mapGetters({
                stocks: 'stockPortfolio'
            })
        },
        components: {
            appStock: Stock
        }
    }
</script>

<style scoped>

</style>