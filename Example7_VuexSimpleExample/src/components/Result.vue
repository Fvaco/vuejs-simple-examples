<template>
    <div>
        <p>Counter doubled is: {{ doubleCounter }}</p>
        <p>Counter is : {{ doubleCounter / 2 }}</p>
    </div>

</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        computed: {
            ...mapGetters({
                doubleCounter: 'counter/doubleCounter',
                clickCounter: 'counter/clickCounter'
            })
        }
    }
</script>