<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Example 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <div class="col-xs-12">
                    <h3>Example 1</h3>
                    <p class="text-muted">Build a local Filter which reverses the Text it is applied on</p>
                    <div class="form-group-lg">
                        <input v-model="firstText" type="text" class="form-control"
                               placeholder="Type some text to apply reverse filter...">
                    </div>
                    <div v-if="firstText" class="well well-sm">
                        <small class="text-muted">Reversed text</small>
                        <div class="text-muted">{{firstText | reverseTextFilter }}</div>
                    </div>
                </div>
                <!-- Example 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <div class="col-xs-12">
                    <h3>Example 2</h3>
                    <p class="text-muted">
                        Build a global Filter which counts the length of a word and it appends it Like this:
                        <br>
                        <code>"Test"</code> <small><strong>gets filtered to</strong></small> <code>"Test (4)"</code>
                    </p>
                    <div class="form-group-lg">
                        <input v-model="secondText" type="text" class="form-control"
                               placeholder="Type some text to apply the length count formatter...">
                    </div>
                    <div v-if="secondText" class="well well-sm">
                        <small class="text-muted">Formatted text</small>
                        <div class="text-muted">{{secondText | countTextFilter }}</div>
                    </div>
                </div>

                <!-- Example 3 -->
                <!-- Do the same as in Examples 1 & 2, now with Computed Properties -->
                <div class="col-xs-12">
                    <h3>Example 3</h3>
                    <p class="text-muted">
                        Do the same as in Examples 1 & 2, now with Computed Properties
                    </p>
                    <div class="col-xs-12">
                        <h4>Example 1 <small>with computed properties</small></h4>
                        <div class="form-group">
                            <input v-model="thirdExample.firstText" type="text" class="form-control"
                                   placeholder="Type some text to apply reverse filter...">
                        </div>
                        <div v-if="thirdExample.firstText" class="well well-sm">
                            <small class="text-muted">Reversed text with a computed property</small>
                            <div class="text-muted">{{ thirdFirstText }}</div>
                        </div>
                    </div>
                    <div class="col-xs-12">
                        <h4>Example 2 <small>with computed properties</small>
                        </h4>
                        <div class="form-group">
                            <input v-model="thirdExample.secondText" type="text" class="form-control"
                                   placeholder="Type some text to apply the length count formatter...">
                        </div>
                        <div v-if="thirdExample.secondText" class="well well-sm">
                            <small class="text-muted">Count formatted text computed property</small>
                            <div class="text-muted">{{ thirdSecondText }}</div>
                        </div>
                    </div>
                </div>

                <!-- Example 4 -->
                <!-- Share the Computed Property rebuilding Example 2 via a Mixin -->
                <div class="col-xs-12">
                    <h3>Example 4</h3>
                    <p class="text-muted">
                        Share a Computed Property rebuilding Example 2 via a Mixin
                    </p>
                    <div class="form-group-lg">
                        <input v-model="fourText" type="text" class="form-control"
                               placeholder="Type some text to apply the length count formatter...">
                    </div>
                    <div v-if="fourText" class="well well-sm">
                        <small class="text-muted">Formatted text</small>
                        <div class="text-muted">{{ fourTextFormatted }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { CountFormatterMixin } from "./mixins/CountFormatter.js";

    export default {
        mixins:[CountFormatterMixin],
        data() {
            return {
                firstText: '',
                secondText: '',
                thirdExample: {
                    firstText: '',
                    secondText: ''
                }
            }
        },
        computed: {
            thirdFirstText() {
                return this.thirdExample.firstText.split("").reverse().join("");
            },
            thirdSecondText() {
                return  `${this.thirdExample.secondText} (${this.thirdExample.secondText.length})`;
            }
        },
        filters: {
            reverseTextFilter(value) {
                return value.split("").reverse().join("");
            }
        }
    }
</script>

<style>
</style>
