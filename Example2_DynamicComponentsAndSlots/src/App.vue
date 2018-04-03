<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button @click="currentLayout = 'appBlue'" class="btn btn-primary">Load Blue Template</button>
                <button @click="currentLayout = 'appGreen'" class="btn btn-success">Load Green Template</button>
                <button @click="currentLayout = 'appRed'" class="btn btn-danger">Load Red Template</button>
                <button @click="currentLayout = null" class="btn btn-default">Reset templates</button>
                <hr>
                <component v-if="currentLayout" :is="currentLayout">
                    <h1 slot="title"> Hello {{ currentLayout }}</h1>
                    <div>
                        This is a static content in a default scope
                    </div>
                </component>
                <div v-else>
                    <span>
                        Choose a template...
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data() {
            return {
                currentLayout: null
            }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>
