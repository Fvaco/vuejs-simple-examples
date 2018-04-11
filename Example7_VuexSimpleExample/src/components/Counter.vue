<template>
    <div>
        <button class="btn btn-primary" @click="increment({by:100})">Increment</button>
        <button class="btn btn-primary" @click="decrement({by:100})">Decrement</button>
        <hr>
        <button class="btn btn-primary" @click="asyncIncrement({by:1, duration:500})">Async increment</button>
        <button class="btn btn-primary" @click="asyncDecrement({by:1, duration:1000})">Async decrement</button>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        methods: {
            ...mapActions({
                increment: 'counter/increment',
                decrement: 'counter/decrement',
                asyncIncrement: 'counter/asyncIncrement',
                asyncDecrement: 'counter/asyncDecrement'
            })
        }
    }
</script>