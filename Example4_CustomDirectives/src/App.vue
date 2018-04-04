<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Challenge: Build a Custom Directive which works like v-on (Listen for Events) -->
                <button v-my-on:click="" class="btn btn-default">Click me!</button>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            myOn: {
                bind(el, binding, vnode){
                    if(binding.arg){
                        el.addEventListener(binding.arg, ()=>{
                            console.log(binding.arg);
                        });
                    }
                }
            }
        }
    }
</script>

<style>
</style>
