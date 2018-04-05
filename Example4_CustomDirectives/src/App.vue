<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Challenge: Build a Custom Directive which works like v-on (Listen for Events) -->
                <button v-my-on:click="onFunction" class="btn btn-default">Click me!</button>
                <div style="width: 100px; height: 100px;border: 1px solid #DEDEDE;border-bottom: 2px solid #DEDEDE; margin: 10px 0; background-color:whitesmoke"
                     v-my-on:mousemove="onFunction">
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            myOn: {
                bind(el, binding, vnode) {
                    console.log(binding);
                    if (binding.arg) {
                        el.addEventListener(binding.arg, binding.value);
                    }
                }
            }
        },
        methods: {
            onFunction(e) {
                console.log(e.type);

            }
        }
    }
</script>

<style>
</style>
