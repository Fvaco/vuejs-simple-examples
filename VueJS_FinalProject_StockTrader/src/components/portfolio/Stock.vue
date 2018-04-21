<template>
        <div class="card">
            <div class="card-header bg-success text-white">
                {{ stock.name }}
            </div>
            <div class="card-body">
                <h5 class="card-title">Sell some stocks</h5>
                <p class="card-text">Price: {{ stock.price | currency }} | Qty: {{stock.quantity}}</p>
                <div class="input-group mb-3">
                    <input v-model.number="quantity"
                           type="number"
                           class="form-control"
                           placeholder="Quantity"
                           aria-label="Recipient's username"
                           aria-describedby="basic-addon2">
                    <div class="input-group-append">
                        <button @click="sellStock"
                                :disabled="insufficientQuantity || quantity <= 0 || !Number.isInteger(quantity)"
                                class="btn btn-outline-success"
                                type="button">Sell
                        </button>
                    </div>
                </div>
            </div>
            <div class="card-footer">
                <div class="small" :class="{'text-danger': insufficientQuantity}">
                    {{ insufficientQuantity ? 'Insufficient stock quantity': 'Sell some stocks'}}
                </div>
            </div>
    </div>

</template>

<script>
    import {mapActions} from 'vuex'
    import {ACT_SELL_STOCK} from "../../store/modules/portfolio";
    export default {
        props: ["stock"],
        data() {
            return {
                quantity: 0
            }
        },
        computed:{
            insufficientQuantity(){
                return this.quantity > this.stock.quantity
            }
        },
        methods: {
            ...mapActions({
                sellStockAction: ACT_SELL_STOCK
            }),
            sellStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                };
                this.sellStockAction(order);
                this.quantity = 0
            }
        },
        created(){
            console.log(this);
        }
    }
</script>

<style scoped>

</style>