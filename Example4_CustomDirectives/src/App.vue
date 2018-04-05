<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Challenge: Build a Custom Directive which works like v-on (Listen for Events) -->
                <div id="eventSandbox"
                     v-my-on:mouseenter="onFunction"
                     v-my-on:mouseleave="onFunction"
                     v-my-on:dblclick="onFunction"
                     v-my-on:mousedown="onFunction"
                     v-my-on:click="onFunction">
                    {{lastEvent}}
                </div>
                <div class="panel panel-info">
                    <div class="panel-heading">
                        You can perform this events over the gray box
                    </div>
                    <!--<div class="panel-body"></div>-->
                    <div class="list-group">
                        <div class="list-group-item">Click <span class="label label-default">click</span></div>
                        <div class="list-group-item">Double click <span class="label label-default">dbclick</span></div>
                        <div class="list-group-item">Mouse enter <span class="label label-default">mouseenter</span></div>
                        <div class="list-group-item">Mouse leave <span class="label label-default">mouseleave</span></div>
                        <div class="list-group-item">Mouse down <span class="label label-default">mousedown</span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                lastEvent: ''
            }
        },
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
                this.lastEvent = e.type;
            }
        }
    }
</script>

<style scoped>
    #eventSandbox {
        display: flex;
        justify-content: center;
        align-items: center;
        color: gray;
        font-size: 1.3em;
        width: 100%;
        height: 100px;
        border: 1px solid #DEDEDE;
        border-bottom: 2px solid #DEDEDE;
        margin: 10px 0;
        background-color: whitesmoke;

    }
</style>
