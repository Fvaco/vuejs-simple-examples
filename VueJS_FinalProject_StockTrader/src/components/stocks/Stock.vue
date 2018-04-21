<template>

    <div class="card">
        <div class="card-header">
            {{ stock.name }}
        </div>
        <div class="card-body">
            <h5 class="card-title">
                <div class="small text-muted">Price</div>
                <div class="badge badge-info">{{ stock.price | currency }}</div>
            </h5>
            <div class="input-group">
                <input v-model.number="quantity"
                       type="number"
                       class="form-control"
                       :class="{'border-danger': insufficientFunds}"
                       placeholder="Quantity">
                <div class="input-group-append">
                    <button @click="buyStock"
                            :disabled="insufficientFunds || quantity <= 0 || !Number.isInteger(quantity)"
                            class="btn btn-success"
                            type="button">Buy
                    </button>
                </div>
            </div>
        </div>

        <div class="card-footer">
            <div class="small" :class="{'text-danger': insufficientFunds}">
                {{ insufficientFunds ? 'Insufficient funds': 'Buy some stocks'}}
            </div>
        </div>
    </div>

</template>

<script>
    import {mapActions} from 'vuex'
    import {ACT_BUY_STOCK} from "../../store/modules/stocks";

    export default {
        props: ["stock"],
        data() {
            return {
                quantity: 0
            }
        },
        computed: {
            funds() {
                return this.$store.getters.funds;
            },
            insufficientFunds() {
                return this.quantity * this.stock.price > this.funds;
            }
        },
        methods: {
            ...mapActions({
                buyStockAction: ACT_BUY_STOCK
            }),
            buyStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                };
                this.buyStockAction(order);
                this.quantity = 0
            }
        }
    }
</script>

<style scoped>

</style>