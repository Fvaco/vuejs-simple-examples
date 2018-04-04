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
        computed:{
            firstName(){
                let value = (' ' + this.value).slice(1);
                let [firstName,  ...lastName] = value.split(' ');
                return firstName;
            },
            lastName(){
                let value = (' ' + this.value).slice(1);
                let [firstName,  ...lastName] = value.split(' ');
                return lastName.join(' ');
            }
        },
        data(){
            return {
                currentValue: '',
            }
        },
        methods: {
            nameChanged(isFirst, event) {
                let name = '';
                if (isFirst) {
                    name = [event.target.value, this.lastName].join(' ')
                } else {
                    name = [this.firstName, event.target.value].join(' ')
                }
                this.currentValue = name;
                this.$emit("input", this.currentValue);
            }
        }
    }
</script>

<style scoped>

</style>