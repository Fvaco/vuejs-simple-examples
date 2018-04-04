<template>
    <div class="container">
        <form v-if="!isSubmitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <app-full-name v-model="userData.fullName"></app-full-name>
                    {{userData.fullName}}
                    <div class="form-group">
                        <label>Email address</label>
                        <input v-model="userData.email" type="email" class="form-control" placeholder="email@yourdomain.com">
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control" placeholder="Enter your password">
                    </div>
                    <div class="form-group">
                        <label>
                            Store data
                            <div class="radio">
                                <label>
                                    <input type="radio" v-model="storeData" value="Yes">Yes
                                </label>
                            </div>
                            <div class="radio">
                                <label>
                                    <input type="radio" v-model="storeData" value="No"> No
                                </label>
                            </div>
                        </label>
                    </div>

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                    <button @click.prevent="submitted" class="btn btn-success">Submit</button>
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4 class="">Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{userData.fullName}}</p>
                        <p>Mail: {{userData.email}}</p>
                        <p>Password: </p>
                        <p>Store in Database?: {{storeData}}</p>
                    </div>
                    <div class="panel-footer">
                        <button class="btn btn-default" @click="isSubmitted = false">Edit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FullName from "./FullName.vue";

    export default {
        data() {
            return {
                userData: {
                    fullName:'',
                    email: '',
                    password: ''
                },
                storeData: 'No',
                isSubmitted: false
            }
        },
        methods:{
            submitted(){
                this.isSubmitted = true;
            }
        },
        components:{
            appFullName: FullName
        }
    }
</script>

<style>
</style>
