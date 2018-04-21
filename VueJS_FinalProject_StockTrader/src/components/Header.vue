<template>
    <nav class="navbar navbar-expand navbar-light bg-light justify-content-between">
        <router-link class="navbar-brand" to="/" tag="a">Stock Trader</router-link>

        <div class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto">
                <router-link class="nav-item" tag="li" to="/portfolio" active-class="active">
                    <a class="nav-link" href="">Portfolio</a>
                </router-link>
                <router-link class="nav-item" tag="li" to="/stocks" active-class="active">
                    <a class="nav-link" href="">Stocks</a>
                </router-link>
            </ul>

            <ul class="navbar navbar-nav">
                <li class="nav-item"><a href="#" @click="endDay()" class="nav-link">End day</a></li>
                <li class="nav-item dropdown" :class="{'show': isDropdownOpen}">
                    <a href="#"
                       class="nav-link dropdown-toggle"
                       @click="isDropdownOpen = !isDropdownOpen"
                       data-toggle="dropdown"
                       role="button"
                       aria-haspopup="true"
                       :aria-expanded="isDropdownOpen"
                    >Save & Load</a>
                    <div class="dropdown-menu" :class="{'show': isDropdownOpen}">
                        <a href class="dropdown-item" @click.prevent="saveData()">Save Data</a>
                        <a href="#" class="dropdown-item" @click="loadDataAction()">Load Data</a>
                    </div>
                </li>
            </ul>
            <strong>Funds: {{funds | currency}}</strong>
        </div>
    </nav>
</template>

<script>
    import {mapActions} from 'vuex';
    import axios from 'axios';

    import {ACT_RND_STOCKS} from "../store/modules/stocks";


    export default {
        data(){
            return {
                isDropdownOpen: false
            }
        },
        computed: {
            funds() {
                return this.$store.getters.funds;
            }
        },
        methods: {
            ...mapActions({
                randomizeStocks: ACT_RND_STOCKS,
                loadDataAction: 'loadData'
            }),
            endDay() {
                this.randomizeStocks();
            },
            saveData(){
                const data = {
                    funds: this.funds,
                    stockPortfolio: this.$store.getters.stockPortfolio,
                    stocks: this.$store.getters.stocks
                };

                axios.put('data.json', data);
            },
        }
    }
</script>

<style scoped>
    nav {
        margin-bottom: 10px;
    }
</style>