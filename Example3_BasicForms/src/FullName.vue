<template>
    <div>
        <div class="form-group">
            <label>First name</label>
            <input :value="firstName" type="text" class="form-control" placeholder="John"
                   @input="nameChanged(true, $event)">
        </div>
        <div class="form-group">
            <label>Last name</label>
            <input :value="lastName" type="text" class="form-control" placeholder="Doe"
                   @input="nameChanged(false, $event)">
        </div>
    </div>
</template>

<script>
    export default {
        props: ['value'],
        computed: {
            firstName() {
                if (this.value.length)
                    return this.value.split(' ')[0];
                else
                    return '';
            },
            lastName() {
                if (this.value.length)
                    return this.value.split(' ')[1];
                else
                    return '';
            }
        },
        methods: {
            nameChanged(isFirst, event) {
                let name = '';
                if (isFirst) {
                    name = `${event.target.value} ${this.lastName}`
                } else {
                    name = `${this.firstName} ${event.target.value}`
                }
                this.value = name;
                this.$emit("input", this.value);
            }
        }

    }
</script>

<style scoped>

</style>